import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpAgent } from "agents/mcp";
import { z } from "zod";

// Adds our two secrets to the ambient `Env` type that `wrangler types` generates
// from wrangler.jsonc (which only knows about the MCP_OBJECT durable object binding).
declare global {
	interface Env {
		GOOGLE_MAPS_API_KEY: string;
		ACCESS_TOKEN: string;
	}
}

// Newer JSON APIs (Places API (New), Routes API) — key + field mask as headers.
// These are the ones supported by the no-billing "Maps Demo Key".
async function callGoogleJson(url: string, body: unknown, apiKey: string, fieldMask: string) {
	const res = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Goog-Api-Key": apiKey,
			"X-Goog-FieldMask": fieldMask,
		},
		body: JSON.stringify(body),
	});
	const data: any = await res.json();
	return { ok: res.ok, data };
}

// Geocoding API v4 — a GET request with the address URL-encoded into the path.
// This is the version covered by the no-billing "Maps Demo Key"; the classic
// `maps.googleapis.com/maps/api/geocode/json` endpoint is NOT and returns
// REQUEST_DENIED without a billing account attached.
async function geocodeV4(address: string, apiKey: string) {
	const url = `https://geocode.googleapis.com/v4/geocode/address/${encodeURIComponent(address)}`;
	const res = await fetch(url, {
		headers: {
			"X-Goog-Api-Key": apiKey,
			"X-Goog-FieldMask": "results.placeId,results.location,results.formattedAddress,results.types",
		},
	});
	const data: any = await res.json();
	return { ok: res.ok, data };
}

// Define our MCP agent with Google Maps tools
export class MapsMCP extends McpAgent<Env> {
	server = new McpServer({
		name: "Google Maps",
		version: "1.0.0",
	});

	async init() {
		const apiKey = this.env.GOOGLE_MAPS_API_KEY;

		// --- Geocoding ---
		this.server.registerTool(
			"geocode_address",
			{
				description:
					"Wandelt eine Adresse oder einen Ortsnamen in geografische Koordinaten (Breitengrad/Längengrad) um. Nutze dieses Tool, um einen Ort zu finden, bevor du ihn für Umkreissuchen oder Wegbeschreibungen verwendest.",
				inputSchema: {
					address: z
						.string()
						.describe("Adresse oder Ortsname, z. B. 'München Hauptbahnhof' oder 'Eiffelturm, Paris'"),
				},
			},
			async ({ address }) => {
				if (!apiKey) {
					return {
						content: [{ type: "text", text: "Fehler: Kein Google Maps API-Key auf dem Server hinterlegt." }],
						isError: true,
					};
				}
				const { ok, data } = await geocodeV4(address, apiKey);
				if (!ok || !data.results?.length) {
					return {
						content: [
							{
								type: "text",
								text: `Keine Ergebnisse gefunden. ${data.error?.message ?? JSON.stringify(data)}`,
							},
						],
					};
				}
				const results = data.results.slice(0, 5).map((r: any) => ({
					formatted_address: r.formattedAddress,
					location: r.location,
					place_id: r.placeId,
					types: r.types,
				}));
				return {
					content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
				};
			},
		);

		// --- Places search (Places API (New) — Text Search) ---
		this.server.registerTool(
			"search_places",
			{
				description:
					"Sucht Orte (Restaurants, Sehenswürdigkeiten, Geschäfte usw.) über die Google Places API. Wenn nach Orten 'in der Nähe' gesucht wird, kennt dieser Server den aktuellen Standort des Nutzers NICHT automatisch — frage in dem Fall zuerst nach Stadt/Adresse und übergib sie im Parameter 'location'.",
				inputSchema: {
					query: z
						.string()
						.describe("Freitextsuche, z. B. 'italienisches Restaurant' oder 'Sehenswürdigkeiten'"),
					location: z
						.string()
						.optional()
						.describe(
							"Ort, um den herum gesucht werden soll, z. B. 'München' oder eine volle Adresse. Wird zuerst geokodiert.",
						),
					radiusMeters: z
						.number()
						.optional()
						.describe("Suchradius in Metern um 'location' (Standard: 5000)"),
				},
			},
			async ({ query, location, radiusMeters }) => {
				if (!apiKey) {
					return {
						content: [{ type: "text", text: "Fehler: Kein Google Maps API-Key auf dem Server hinterlegt." }],
						isError: true,
					};
				}

				const body: Record<string, unknown> = { textQuery: query };

				if (location) {
					const { data: geo } = await geocodeV4(location, apiKey);
					const loc = geo.results?.[0]?.location;
					if (loc) {
						body.locationBias = {
							circle: {
								center: { latitude: loc.latitude, longitude: loc.longitude },
								radius: radiusMeters ?? 5000,
							},
						};
					}
				}

				const { ok, data } = await callGoogleJson(
					"https://places.googleapis.com/v1/places:searchText",
					body,
					apiKey,
					"places.id,places.displayName,places.formattedAddress,places.location,places.rating,places.userRatingCount,places.currentOpeningHours.openNow",
				);

				if (!ok || !data.places?.length) {
					return {
						content: [
							{
								type: "text",
								text: `Keine Ergebnisse gefunden. ${data.error?.message ?? JSON.stringify(data)}`,
							},
						],
					};
				}
				const results = data.places.slice(0, 10).map((p: any) => ({
					name: p.displayName?.text,
					address: p.formattedAddress,
					rating: p.rating,
					user_ratings_total: p.userRatingCount,
					location: p.location,
					place_id: p.id,
					open_now: p.currentOpeningHours?.openNow,
				}));
				return {
					content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
				};
			},
		);

		// --- Directions (Routes API — computeRoutes) ---
		this.server.registerTool(
			"get_directions",
			{
				description:
					"Berechnet eine Wegbeschreibung zwischen zwei Orten über die Google Routes API (Auto, zu Fuß, Fahrrad oder ÖPNV). Bei mehrdeutigen Kurznamen (z. B. nur 'Flughafen X') kann die Adresse falsch aufgelöst werden — nutze wenn möglich eine vollständige Adresse oder ermittle sie vorher mit 'geocode_address'.",
				inputSchema: {
					origin: z.string().describe("Startpunkt, möglichst als vollständige Adresse, z. B. 'München Hauptbahnhof, Bayerstraße 10a, 80335 München'"),
					destination: z.string().describe("Zielpunkt, möglichst als vollständige Adresse, z. B. 'Flughafen München (MUC), Nordallee, 85356 München'"),
					mode: z
						.enum(["driving", "walking", "bicycling", "transit"])
						.optional()
						.describe("Verkehrsmittel (Standard: driving)"),
				},
			},
			async ({ origin, destination, mode }) => {
				if (!apiKey) {
					return {
						content: [{ type: "text", text: "Fehler: Kein Google Maps API-Key auf dem Server hinterlegt." }],
						isError: true,
					};
				}

				const modeMap: Record<string, string> = {
					driving: "DRIVE",
					walking: "WALK",
					bicycling: "BICYCLE",
					transit: "TRANSIT",
				};
				const travelMode = modeMap[mode ?? "driving"];

				const body: Record<string, unknown> = {
					origin: { address: origin },
					destination: { address: destination },
					travelMode,
				};
				if (travelMode === "DRIVE") {
					body.routingPreference = "TRAFFIC_AWARE";
				}

				const { ok, data } = await callGoogleJson(
					"https://routes.googleapis.com/directions/v2:computeRoutes",
					body,
					apiKey,
					"routes.duration,routes.distanceMeters,routes.description,routes.legs.steps.navigationInstruction,routes.legs.steps.distanceMeters,routes.legs.steps.staticDuration",
				);

				if (!ok || !data.routes?.length) {
					return {
						content: [
							{
								type: "text",
								text: `Keine Route gefunden. ${data.error?.message ?? JSON.stringify(data)}`,
							},
						],
					};
				}

				const route = data.routes[0];
				const summary = {
					description: route.description,
					distance_meters: route.distanceMeters,
					duration: route.duration,
					steps: (route.legs?.[0]?.steps ?? []).map((s: any) => ({
						instruction: s.navigationInstruction?.instructions,
						distance_meters: s.distanceMeters,
						duration: s.staticDuration,
					})),
				};
				return {
					content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
				};
			},
		);
	}
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		const url = new URL(request.url);

		// Expected path: /mcp/<ACCESS_TOKEN> — acts as a simple shared-secret gate
		// so random internet users can't burn through the Google Maps API quota.
		const match = url.pathname.match(/^\/mcp\/([^/]+)\/?$/);
		if (!match || !env.ACCESS_TOKEN || match[1] !== env.ACCESS_TOKEN) {
			return new Response("Not found", { status: 404 });
		}

		return MapsMCP.serve(`/mcp/${match[1]}`).fetch(request, env, ctx);
	},
};
