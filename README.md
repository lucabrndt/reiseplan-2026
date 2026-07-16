# Reiseplan 2026 — Südostasien

Interaktiver Reiseführer für die Reise München → Zürich → Istanbul → Bangkok → Laos → Vietnam → Kambodscha → Bangkok, August–Oktober 2026.

Statische Website ohne Build-Tool und ohne Server-Backend. `index.html` im Browser öffnen genügt.

## Projektstruktur

```
.
├── index.html                    Seitengerüst (nur Markup)
├── assets/
│   ├── css/style.css             Alle Styles
│   └── js/
│       ├── data.js               Reisedaten & Inhalte (Städte, Panels, Visa, Timeline)
│       └── app.js                Seitenaufbau & Interaktion
├── data/
│   ├── reiseplan-2026.kml        182 Orte für Google My Maps (Import-Datei)
│   └── kategorien-liste.md       Kategorie-/Icon-Zuordnung aller Orte
├── docs/
│   └── reiseplan-2026.md         Reiseplan als Fließtext (Langfassung)
├── scripts/
│   └── verify-koordinaten.py     Prüft/ergänzt Koordinaten in der KML via Google-Maps-API
├── tools/
│   └── maps-mcp-server/          Cloudflare-Worker (MCP-Server für die Geocoding-Abfragen)
└── archive/                      Alte Stände, absichtlich aufbewahrt
```

`data.js` wird vor `app.js` geladen — die Reihenfolge der beiden `<script>`-Tags in
`index.html` ist deshalb relevant.

## Lokal öffnen

```bash
open index.html
```

Alternativ über einen lokalen Server:

```bash
python3 -m http.server 8080
# → http://localhost:8080/index.html
```

## Karten

Die Karten sind Einbettungen einer **Google-My-Maps**-Karte: eine große Übersichtskarte
über der Route und pro Stadt eine auf den jeweiligen Ort gezoomte Karte.

Die Orte selbst liegen in `data/reiseplan-2026.kml` (182 Placemarks, nach Ländern
gruppiert, Farbe = Land, Symbol = Kategorie). Zum Aktualisieren die KML in
[Google My Maps](https://www.google.com/mymaps) importieren — vorher die alten
Ebenen löschen, sonst entstehen Duplikate.

Damit Scrollen nicht versehentlich in einer Karte landet, sind die Karten erst nach
einem Klick/Tipp bedienbar (Tippen daneben bzw. Maus wegbewegen sperrt sie wieder).

## Koordinaten prüfen

```bash
python3 scripts/verify-koordinaten.py
```

Ergänzt fehlende Koordinaten in der KML über den Google-Maps-MCP-Worker. Das Skript ist
wiederholbar und bricht bei erschöpftem API-Tageskontingent sauber ab. Der genutzte
Demo-Key hat ein Tageslimit — **nicht** auf einen abrechnungspflichtigen Key wechseln.

## Externe Ressourcen

Alles per CDN, kein npm und kein Build für die Website nötig:

- **Inter** (Schriftart) — fonts.googleapis.com
- **Google My Maps** (Karten) — google.com/maps/d/embed
- **Bilder** — Wikimedia Commons (`loading="lazy"`)

Nur `tools/maps-mcp-server/` ist ein eigenständiges npm-Projekt mit eigenem Build.

## Auf GitHub Pages hosten

1. Repository auf [github.com/new](https://github.com/new) anlegen (Public)
2. Projekt pushen:

   ```bash
   git add .
   git commit -m "Reiseplan 2026"
   git remote add origin https://github.com/DEIN-USERNAME/reiseplan-2026.git
   git branch -M main
   git push --set-upstream origin main
   ```

3. **Settings → Pages → Source:** „Deploy from a branch", Branch `main`, Ordner `/ (root)`

Nach 1–2 Minuten live unter `https://DEIN-USERNAME.github.io/reiseplan-2026/`.

Wichtig: Es muss der **ganze Ordner** hochgeladen werden, nicht mehr nur `index.html` —
die Seite lädt CSS und JS aus `assets/`.
