# Reiseplan 2026 — Südostasien

Interaktiver Reiseführer für die Reise München → Zürich → Istanbul → Bangkok → Laos → Vietnam → Kambodscha → Bangkok, August–Oktober 2026.

Eine einzelne HTML-Datei, kein Build-Tool, kein Server nötig. Einfach `index.html` im Browser öffnen oder über GitHub Pages hosten.

## Features

- Interaktive Leaflet.js-Karten für jede Stadt (lazy-geladen)
- Globale Übersichtskarte mit eingezeichneter Route
- Accordion-Panels pro Stadt (Sehenswürdigkeiten, Essen, Geheimtipps, etc.)
- KI-Prompt-Panel mit Kopieren-Button
- Visa-Übersicht, Budget-Tabelle, Apps-Liste, Rückflug-Info
- Mobil-optimiert (375px aufwärts, horizontale Nav mit Scroll)
- Kein Build-Step — alles in einer Datei, CDN-Ressourcen

## Lokal öffnen

```bash
open index.html
```

Oder mit einem lokalen Server (für korrekte CORS-Behandlung der Kartenkacheln):

```bash
python3 -m http.server 8080
# → http://localhost:8080/index.html
```

## Auf GitHub Pages hosten

### Schritt 1 — Repository erstellen

1. Auf [github.com/new](https://github.com/new) ein neues Repository anlegen
2. Name wählen, z. B. `reiseplan-2026`
3. Auf **Public** stellen (GitHub Pages braucht Public für den kostenlosen Plan)
4. Repository erstellen

### Schritt 2 — Datei hochladen

**Option A — direkt im Browser:**

1. Im leeren Repository auf **"Add file" → "Upload files"** klicken
2. `index.html` hochziehen
3. Unten auf **"Commit changes"** klicken

**Option B — per Git:**

```bash
git init
git add index.html README.md
git commit -m "Reiseplan 2026"
git remote add origin https://github.com/DEIN-USERNAME/reiseplan-2026.git
git branch -M main
git push --set-upstream origin main
```

### Schritt 3 — GitHub Pages aktivieren

1. Im Repository auf **Settings** klicken
2. Im linken Menü: **Pages**
3. Unter "Source": **"Deploy from a branch"** wählen
4. Branch: **main**, Ordner: **/ (root)**
5. Auf **Save** klicken

Nach 1–2 Minuten ist die Seite live unter:

```
https://DEIN-USERNAME.github.io/reiseplan-2026/
```

### Schritt 4 — Aktualisierungen

Einfach eine neue Version von `index.html` hochladen (Schritt 2 wiederholen). GitHub Pages deployt automatisch.

## Welche Dateien werden benötigt

Nur eine einzige Datei:

```
index.html    ← die komplette Website (HTML + CSS + JS + Daten)
```

Alle externen Ressourcen werden via CDN geladen:
- **Leaflet.js 1.9.4** (Karten) — unpkg.com
- **OpenStreetMap-Kacheln** — tile.openstreetmap.org
- **Hero-Bilder** — Wikimedia Commons (mit `loading="lazy"`)

Kein npm, kein Build, keine Config-Dateien nötig.
