/* Reiseplan 2026 — Inhalte & Reisedaten.
   Reine Daten, keine Logik. Wird vor app.js geladen. */

/* ═══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */

const MYMAPS_MID = '1CbvwqFlRghMc57pbNAOyAYe4em8Zisg';
const MYMAPS_EHBC = '2E312F';

const CITIES = [
  {
    id: 'zuerich', name: 'Zürich', flag: '🇨🇭',
    dates: '1.–4. August',
    lat: 47.3769, lng: 8.5417, zoom: 13,
    gradient: 'linear-gradient(150deg,#2c6fad 0%,#5ba4d4 55%,#89c4f4 100%)',
  },
  {
    id: 'istanbul', name: 'Istanbul', flag: '🇹🇷',
    dates: '5.–6. August',
    lat: 41.0082, lng: 28.9784, zoom: 13,
    gradient: 'linear-gradient(150deg,#7b2d8b 0%,#c97432 55%,#f1c40f 100%)',
  },
  {
    id: 'bangkok', name: 'Bangkok', flag: '🇹🇭',
    dates: 'mehrmals (Aug–Okt)',
    lat: 13.7563, lng: 100.5018, zoom: 12,
    gradient: 'linear-gradient(150deg,#a0720b 0%,#d4a830 50%,#c0392b 100%)',
  },
  {
    id: 'nong-khai', name: 'Nong Khai', flag: '🇹🇭',
    dates: '16. August (Morgenstopp ~2–3h)',
    lat: 17.8782, lng: 102.7427, zoom: 14,
    gradient: 'linear-gradient(150deg,#1a6b3c 0%,#27ae60 55%,#52be80 100%)',
  },
  {
    id: 'vientiane', name: 'Vientiane', flag: '🇱🇦',
    dates: 'Einstieg ab 16. Aug (nichts gebucht) · 1–2 Tage',
    lat: 17.9757, lng: 102.6331, zoom: 13,
    gradient: 'linear-gradient(150deg,#b03020 0%,#e67e22 55%,#f39c12 100%)',
  },
  {
    id: 'vang-vieng', name: 'Vang Vieng', flag: '🇱🇦',
    dates: 'Optional · Empfehlung 2–3 Tage',
    lat: 18.9229, lng: 102.4477, zoom: 13,
    gradient: 'linear-gradient(150deg,#0d5ebd 0%,#0096c7 55%,#90e0ef 100%)',
  },
  {
    id: 'luang-prabang', name: 'Luang Prabang', flag: '🇱🇦',
    dates: 'wahrscheinlichster Ausstieg (nichts gebucht) · 2–3 Tage',
    lat: 19.8877, lng: 102.1348, zoom: 14,
    gradient: 'linear-gradient(150deg,#c35000 0%,#e67e22 55%,#f5a623 100%)',
  },
  {
    id: 'nong-khiaw', name: 'Nong Khiaw', flag: '🇱🇦',
    dates: 'Optional — falls Zeit ist',
    lat: 20.5667, lng: 102.9833, zoom: 13,
    gradient: 'linear-gradient(150deg,#2c5f2d 0%,#5b8c5a 55%,#97bc62 100%)',
  },
  {
    id: 'muang-ngoi', name: 'Muang Ngoi Neua', flag: '🇱🇦',
    dates: 'Optional — nur per Boot ab Nong Khiaw',
    lat: 20.6167, lng: 102.9333, zoom: 13,
    gradient: 'linear-gradient(150deg,#1f5c4d 0%,#3f8f6f 55%,#8fc9a0 100%)',
  },
  {
    id: 'thakhek', name: 'Thakhek Loop', flag: '🇱🇦',
    dates: 'Alternative statt Norden — 4–5 Tage Motorrad-Loop',
    lat: 17.4028, lng: 104.8016, zoom: 12,
    gradient: 'linear-gradient(150deg,#4a3b1f 0%,#8a6d3a 55%,#c9a86c 100%)',
  },
  {
    id: 'si-phan-don', name: '4000 Islands (Si Phan Don)', flag: '🇱🇦',
    dates: 'Alternative im Süden — reine Entspannung',
    lat: 13.9088, lng: 105.9169, zoom: 12,
    gradient: 'linear-gradient(150deg,#0d5c6b 0%,#2a94a3 55%,#7ecdd6 100%)',
  },
  {
    id: 'da-nang', name: 'Da Nang', flag: '🇻🇳',
    dates: '23.–25. August',
    lat: 16.0544, lng: 108.2022, zoom: 13,
    gradient: 'linear-gradient(150deg,#0d47a1 0%,#1976d2 55%,#64b5f6 100%)',
  },
  {
    id: 'hoi-an', name: 'Hội An', flag: '🇻🇳',
    dates: '25.–27. August',
    lat: 15.8794, lng: 108.3350, zoom: 15,
    gradient: 'linear-gradient(150deg,#9a6200 0%,#d4a830 55%,#e8c547 100%)',
  },
  {
    id: 'bangkok-geburtstag', name: 'Bangkok 🎂', flag: '🇹🇭',
    dates: '28. Aug–3. September',
    lat: 13.7563, lng: 100.5018, zoom: 12,
    gradient: 'linear-gradient(150deg,#a0720b 0%,#d4a830 50%,#c0392b 100%)',
  },
  {
    id: 'hcmc', name: 'Ho Chi Minh City', flag: '🇻🇳',
    dates: '3.–7. September',
    lat: 10.8231, lng: 106.6297, zoom: 13,
    gradient: 'linear-gradient(150deg,#a01020 0%,#e74c3c 55%,#f1948a 100%)',
  },
  {
    id: 'siem-reap', name: 'Siem Reap', flag: '🇰🇭',
    dates: '7.–9. September',
    lat: 13.3633, lng: 103.8564, zoom: 13,
    gradient: 'linear-gradient(150deg,#3d1f0a 0%,#8b6340 55%,#c9956c 100%)',
  },
  {
    id: 'korat', name: 'Korat (Nakhon Ratchasima)', flag: '🇹🇭',
    dates: 'irgendwann mit Freundin',
    lat: 14.9799, lng: 102.0978, zoom: 13,
    gradient: 'linear-gradient(150deg,#1a6b3c 0%,#27ae60 50%,#d4a830 100%)',
  },
];

/* ═══════════════════════════════════════════════
   CITY CONTENT  (CC)
   Keys in `panels` must match PANELS[].title
═══════════════════════════════════════════════ */
const CC = {

  /* ──────────── ZÜRICH ──────────── */
  zuerich: {
    image:    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Z%C3%BCrich_Grossm%C3%BCnster_panorama_2012.jpg/1280px-Z%C3%BCrich_Grossm%C3%BCnster_panorama_2012.jpg',
    imageAlt: 'Zürich – Blick auf Grossmünster und Limmat',
    intro: `
      <p>📅 <strong>1.–4. August</strong> — Sa+So mit Clement, Mo+Di (3.+4.) deine freien Tage.</p>
      <p>🎆 <strong>1. August = Schweizer Nationalfeiertag!</strong> Höhenfeuer auf dem Uetliberg, Feuerwerk am See, Festbetrieb überall — Clement wird was planen.</p>
    `,
    pins: [
      { lat: 47.3700, lng: 8.5439, name: 'Grossmünster ⭐',            desc: 'Wahrzeichen Zürichs · Turmbesteigung 5 CHF' },
      { lat: 47.3697, lng: 8.5412, name: 'Fraumünster ⭐⭐',            desc: 'Chagall-Fenster · ~5 CHF · Mo–Sa 10–18 Uhr' },
      { lat: 47.3710, lng: 8.5406, name: 'St. Peterskirche',            desc: 'Größtes Kirchturm-Zifferblatt Europas · Gratis' },
      { lat: 47.3722, lng: 8.5409, name: 'Lindenhof',                   desc: 'Aussichtshügel · Schach · Gratis' },
      { lat: 47.3763, lng: 8.5484, name: 'ETH Polyterrasse',            desc: 'Panoramablick Stadt + Alpen · Gratis' },
      { lat: 47.3837, lng: 8.5293, name: 'Museum für Gestaltung ⭐⭐',   desc: '12–15 CHF · Di–So (Mo geschlossen!)' },
      { lat: 47.3879, lng: 8.5222, name: 'Freitag Tower ⭐',            desc: 'Flagship Store + Aussicht · Gratis' },
      { lat: 47.3807, lng: 8.5369, name: 'Flussbad Oberer Letten ⭐',   desc: 'Schwimmen im Limmat · Gratis' },
      { lat: 47.3658, lng: 8.5413, name: 'Wochenmarkt Bürkliplatz ⭐',  desc: 'Di + Fr 6–11 Uhr · Gratis' },
      { lat: 47.3497, lng: 8.4918, name: 'Uetliberg ⭐',                desc: '871 m Aussicht · S10 25 Min ab HB' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Grossmünster ⭐</div>
    <div class="poi-desc">Das Wahrzeichen Zürichs mit charakteristischen Doppeltürmen. Gebaut im 12. Jhdt., später Ausgangspunkt der Schweizer Reformation unter Zwingli. Von der anderen Limmatseite hat man den schönsten Blick drauf. Innen kostenlos — Turmbesteigung lohnt sich für den Blick.</div>
    <span class="poi-meta">Innen gratis · Turmbesteigung 5 CHF</span>
  </div>
  <div class="poi">
    <div class="poi-name">Fraumünster ⭐⭐ <span class="must">(für Kunstinteressierte Pflicht!)</span></div>
    <div class="poi-desc">Direkt gegenüber dem Grossmünster. Das Innere beherbergt fünf Kirchenfenster von <strong>Marc Chagall</strong> (1970) und ein Rosettenfenster von <strong>Augusto Giacometti</strong> — leuchtende Blau- und Rottöne in einem romanischen Bau. Eines der bemerkenswertesten Kunstwerke der Schweiz.</div>
    <span class="poi-meta">~5 CHF · Mo–Sa 10–18 Uhr</span>
  </div>
  <div class="poi">
    <div class="poi-name">St. Peterskirche</div>
    <div class="poi-desc">Die älteste Pfarrkirche Zürichs. Bekannt für das größte Kirchturm-Zifferblatt Europas (8,64 m Durchmesser). Sehr ruhig.</div>
    <span class="poi-meta">Gratis</span>
  </div>
  <div class="poi">
    <div class="poi-name">Altstadt / Niederdorf</div>
    <div class="poi-desc">Das historische Herz Zürichs auf beiden Seiten der Limmat. Kopfsteinpflaster, bunte Fassaden, kleine Gassen, Cafés auf Holzstühlen vor der Tür. Einfach durchschlendern.</div>
    <span class="poi-meta">Gratis</span>
  </div>
  <div class="poi">
    <div class="poi-name">Lindenhof</div>
    <div class="poi-desc">Kleiner Aussichtshügel mitten in der Altstadt, wo die Zürcher Schach spielen und Einheimische entspannen. Blick über Limmat und Niederdorf. Fast keine Touristen.</div>
    <span class="poi-meta">Gratis</span>
  </div>
  <div class="poi">
    <div class="poi-name">ETH Polyterrasse</div>
    <div class="poi-desc">Kostenlose Panorama-Aussicht vom ETH-Campus auf die ganze Stadt, den Zürichsee und bei klarem Wetter die Alpen. Mit der historischen Polybahn (Standseilbahn) rauf.</div>
    <span class="poi-meta">Gratis · Polybahn im Stadtticket inbegriffen</span>
  </div>
  <div class="acc-lbl">🏞️ Natur &amp; Aussichten</div>
  <div class="poi">
    <div class="poi-name">Uetliberg ⭐</div>
    <div class="poi-desc">Zürichs Hausberg, 25 Min mit der S10 vom HB. Oben auf 871 m: Panoramablick auf Stadt, Zürichsee und Alpen. Planetenweg-Wanderung entlang des Grats möglich (~2h).</div>
    <span class="poi-meta">Gratis oben · Zugfahrt ~5–8 CHF</span>
  </div>
  <div class="poi">
    <div class="poi-name">Flussbad Oberer Letten ⭐</div>
    <div class="poi-desc">Im August schwimmen die Zürcher mitten in der Stadt im Limmat. Dich im Fluss treiben lassen, von Sprungbrettern springen oder gegen die Strömung schwimmen. Liegewiese, Bars. Im August perfekt.</div>
    <span class="poi-meta">Gratis · sehr lokal und atmosphärisch</span>
  </div>
  <div class="poi">
    <div class="poi-name">Zürichsee</div>
    <div class="poi-desc">Spazieren, Sitzen, Schauen. Schiffsfahrten auf dem See ebenfalls möglich.</div>
    <span class="poi-meta">Gratis</span>
  </div>
  <div class="poi">
    <div class="poi-name">Botanischer Garten</div>
    <div class="poi-desc">7.000 Pflanzenarten aus aller Welt, darunter tropische Glashäuser. Schön für eine ruhige Stunde.</div>
    <span class="poi-meta">Gratis</span>
  </div>
  <div class="poi">
    <div class="poi-name">Sukkulenten-Sammlung</div>
    <div class="poi-desc">Eine der größten der Welt in mehreren Glashäusern. Riesige Kakteen, Aloen, kuriose Gewächse.</div>
    <span class="poi-meta">Gratis</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Museum für Gestaltung ⭐⭐</div>
    <div class="poi-desc"><em>Das</em> Schweizer Design- und Grafikmuseum, weltbekannt. Dauersammlung zu Schweizer Gestaltungsgeschichte + wechselnde Ausstellungen zu zeitgenössischem Design, Typografie, Plakatkunst. <strong>Adresse:</strong> Ausstellungsstrasse 60, Kreis 5. <strong>Mo geschlossen</strong> — also Dienstag gehen!</div>
    <span class="poi-meta">~12–15 CHF · Di–So 10–17 Uhr (Do bis 20 Uhr)</span>
  </div>
  <div class="poi">
    <div class="poi-name">Freitag Tower ⭐</div>
    <div class="poi-desc">Ikonisches Flagship-Store aus gestapelten gebrauchten Schiffscontainern. Das Unternehmen macht Taschen aus alten LKW-Planen — sehr bekanntes Schweizer Designlabel. Oben auf dem Turm tolle Aussicht über Zürich-West. Direkt in Kreis 5 neben dem Viadukt.</div>
    <span class="poi-meta">Reinschauen gratis</span>
  </div>
  <div class="poi">
    <div class="poi-name">Kreis 4 &amp; 5 / Langstrasse</div>
    <div class="poi-desc">Zürichs Kreativviertel. Ehemalige Arbeiterviertel mit Rotlichtgeschichte, jetzt voll mit Ateliers von ZHdK-Absolventen, Galerien, Upcycling-Stores, Designboutiquen. Einfach durchlaufen.</div>
    <span class="poi-meta">Gratis</span>
  </div>
  <div class="poi">
    <div class="poi-name">artspaceguide.ch</div>
    <div class="poi-desc">Kostenloser Führer zu unabhängigen Off-Space-Galerien in Zürich, viele in Hinterhöfen und Nebenstraßen versteckt. Echte Kunstszene, kein Touristenspektakel. PDF auf der Website.</div>
    <span class="poi-meta">Gratis · artspaceguide.ch</span>
  </div>
  <div class="poi">
    <div class="poi-name">Markthalle im Viadukt (Kreis 5)</div>
    <div class="poi-desc">Alter Eisenbahnviadukt umgebaut zu einer Foodhalle mit angeschlossenen Designshops. Die Bögen des Viadukts beherbergen lokale Händler, Cafés und Spezialitätenläden. Tolles industrielles Flair.</div>
    <span class="poi-meta">Gratis reinschauen · täglich 9–20 Uhr</span>
  </div>
  <div class="poi">
    <div class="poi-name">Öffentliche Kunst im Stadtbild</div>
    <div class="poi-desc">Über 1.300 Kunstwerke im Stadtbild, alle gratis und immer zugänglich. Von der Stadt aktiv gefördert. Besonders viel in Kreis 4 und 5.</div>
    <span class="poi-meta">Gratis · überall</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Wochenmarkt Bürkliplatz ⭐</div>
    <div class="poi-desc">Di + Fr 6–11 Uhr. Du bist am <strong>Dienstag</strong> da! Frischer Zürichsee-Fisch, Käse, Gemüse, Blumen, lokale Spezialitäten. Sehr atmosphärischer Morgenmarkt direkt am See.</div>
    <span class="poi-meta">Gratis · Di + Fr 6–11 Uhr</span>
  </div>
  <div class="poi">
    <div class="poi-name">Bratwurst vom Sternen Grill ⭐</div>
    <div class="poi-desc">Zürcher Kult seit Jahrzehnten. Am Bellevueplatz. Die weiße Kalbsbratwurst <em>ohne</em> Senf essen — das ist die lokale Regel.</div>
    <span class="poi-meta">~8 CHF · Bellevueplatz</span>
  </div>
  <div class="poi">
    <div class="poi-name">Birchermüesli</div>
    <div class="poi-desc">In Zürich erfunden (Dr. Bircher-Benner, 1900). In jedem Café. Das Original ist kalt, mit Haferflocken, Früchten, Nüssen und Joghurt/Rahm eingeweicht.</div>
    <span class="poi-meta">In jedem Café</span>
  </div>
  <div class="poi">
    <div class="poi-name">Luxemburgerli bei Sprüngli (Bahnhofstrasse)</div>
    <div class="poi-desc">Mini-Macarons von Sprüngli. Teuer aber legendär. Gut als kleiner Snack zwischendurch.</div>
    <span class="poi-meta">Teuer aber legendär</span>
  </div>
  <div class="poi">
    <div class="poi-name">Mensa ETH Polyterrasse</div>
    <div class="poi-desc">Günstiges Mittagessen mit Terrassen-Aussicht auf die Stadt. Mo–Fr mittags geöffnet.</div>
    <span class="poi-meta">7–12 CHF · Mo–Fr mittags</span>
  </div>
  <div class="acc-lbl">💚 Gratis-Essen-Tipps</div>
  <div class="poi">
    <div class="poi-name">Acapulco Bar</div>
    <div class="poi-desc">Di–Fr 17–20 Uhr gratis Apérobuffet mit Häppchen.</div>
    <span class="poi-meta">Gratis · Di–Fr 17–20 Uhr</span>
  </div>
  <div class="poi">
    <div class="poi-name">La Tanza</div>
    <div class="poi-desc">Sa ab 18 Uhr gratis Tomaten-Pasta (solange Vorrat reicht).</div>
    <span class="poi-meta">Gratis · Sa ab 18 Uhr</span>
  </div>
  <div class="poi">
    <div class="poi-name">sBier Brauerei (Kilchberg)</div>
    <div class="poi-desc">Sa Vormittag gratis Bierverkostung.</div>
    <span class="poi-meta">Gratis · Sa Vormittag</span>
  </div>
  <div class="poi">
    <div class="poi-name">1.200 Trinkbrunnen in der Stadt</div>
    <div class="poi-desc">Überall in Zürich — gratis Trinkwasser von höchster Qualität. Flasche mitbringen und immer wieder auffüllen.</div>
    <span class="poi-meta">Gratis · überall</span>
  </div>
</div>`,

      'Geheimtipps': `
<ul class="tip-list">
  <li><strong>Züri rollt</strong> — Kostenloser Fahrradverleih an mehreren Standorten in der Stadt. Einfach registrieren und losfahren.</li>
  <li><strong>Kostenlose Stadtführungen</strong> — Offizielle Touren der Stadt Zürich, gratis. Auch eine Nachtleben-Tour möglich.</li>
  <li><strong>Archäologische Fenster</strong> — Versteckte Ausgrabungsfenster in der Altstadt (Römisches Kastell, Pfahlbausiedlungen). Kostenlos, überall in der Altstadt verteilt — einfach Augen auf.</li>
  <li><strong>Freilichtkino am Oberen Letten</strong> — Im Sommer (Donnerstags) werden draußen Filme gezeigt. Gratis, sehr atmosphärisch.</li>
  <li><strong>1. August Nationalfeiertag!</strong> Höhenfeuer auf dem Uetliberg, Feuerwerk am Zürichsee, Festbetrieb überall. Clement wird was planen.</li>
  <li><strong>Kostenlose Panorama-Tipps:</strong> ETH Polyterrasse, Lindenhof, Polybahn-Fahrt — drei verschiedene Blickwinkel auf die Stadt, alle kostenlos oder sehr günstig.</li>
</ul>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>Öffentlicher Transport:</strong> ZVV-Tageskarte ~10 CHF deckt alles ab (Tram, Bus, S-Bahn, Polybahn, Fähren).</li>
  <li><strong>Währung:</strong> Schweizer Franken (CHF). Teurer als EU! 1 CHF ≈ 1,05 €. Kreditkarten überall akzeptiert.</li>
  <li><strong>Museum für Gestaltung:</strong> Di–So geöffnet, <em>Mo geschlossen</em> — also Di oder Mi gehen!</li>
  <li><strong>Wochenmarkt Bürkliplatz:</strong> Di + Fr 6–11 Uhr — Dienstag perfekt für dich!</li>
  <li><strong>Uetliberg:</strong> S10 ab Hauptbahnhof, ~25 Min, stündlich.</li>
  <li><strong>Smartphone:</strong> EU-Roaming gilt in der Schweiz nicht — Roaming-Paket aktivieren oder lokale SIM kaufen.</li>
  <li><strong>Nächste Station:</strong> Weiter am 5. Aug mit Flug Zürich → Istanbul, Abflug 7:40 Uhr.</li>
</ul>`,

      'Suchbegriffe': `"Zürich Geheimtipps Kreis 4 5 kostenlos 2026"
"Zürich free things to do student budget local"
"artspaceguide Zürich off spaces Galerien"
"zuerich.com gratis Tipps August"`,
    },
  },

  /* ──────────── ISTANBUL ──────────── */
  istanbul: {
    image:    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/1280px-Hagia_Sophia_Mars_2013.jpg',
    imageAlt: 'Ayasofya (Hagia Sophia) Istanbul',
    intro: `
      <p>📅 <strong>5.–6. August</strong> — Ankunft 11:40 Uhr (5. Aug), Abflug 2:00 Uhr (7. Aug) → ~34 Stunden in Istanbul.</p>
      <p>🏨 <strong>Archeo Hostel</strong>, Tophane/Karaköy — direkt am Bosporus, 5 Min zur Galata Kulesi, perfekte Lage.</p>
      <p class="warn">⚠️ <strong>E-Visum vorab beantragen!</strong> evisa.gov.tr — ~35€ — nicht vergessen!</p>
      <p class="warn">⚠️ <strong>Abflug 2:00 Uhr am 7. Aug</strong> → spätestens 22:00 Uhr aufbrechen. Flughafen IST liegt ~45–60 Min entfernt (Havas-Bus oder Metro).</p>
      <p>🚌 Bei Ankunft sofort <strong>İstanbulkart</strong> kaufen — macht Tram, Metro &amp; Fähre viel günstiger.</p>
    `,
    pins: [
      { lat: 41.0086, lng: 28.9802, name: 'Ayasofya (Hagia Sophia) ⭐⭐', desc: 'Moschee gratis · Galerie ~25€ · früh morgens!' },
      { lat: 41.0055, lng: 28.9768, name: 'Sultanahmet Meydanı ⭐',       desc: 'Hipodrom mit 3.000 Jahre alten Obelisken · Gratis' },
      { lat: 41.0054, lng: 28.9763, name: 'Blaue Moschee ⭐',             desc: '20.000 İznik-Kacheln · gratis außerhalb Gebetszeiten' },
      { lat: 41.0082, lng: 28.9778, name: 'Yerebatan Zisterne ⭐⭐',       desc: 'Byzantinisches Wasserreservoir · ~20€' },
      { lat: 41.0172, lng: 28.9740, name: 'Galatabrücke',                 desc: 'Fischer + Fischrestaurants · Gratis' },
      { lat: 41.0256, lng: 28.9742, name: 'Galata Kulesi',                desc: 'Mittelalterturm Karaköy · außen gratis' },
      { lat: 41.0338, lng: 28.9491, name: 'Balat + Fener ⭐⭐',            desc: 'Buntes altes Viertel · kaum Touristen · Gratis' },
      { lat: 41.0327, lng: 28.9772, name: 'İstiklal Caddesi',             desc: 'Fußgängerzone · Nachtleben · Gratis' },
      { lat: 41.0278, lng: 28.9758, name: '🏨 Archeo Hostel (Tophane)',   desc: 'Dein Hostel · direkt am Bosporus' },
      { lat: 41.0183, lng: 28.9688, name: 'Eminönü Fähranleger',          desc: 'Linienfähre Bosporus · günstig mit İstanbulkart' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Ayasofya (Hagia Sophia) ⭐⭐</div>
    <div class="poi-desc">Eines der bedeutendsten Bauwerke der Menschheit. Gebaut 537 n.Chr. unter Kaiser Justinian I. als christliche Kathedrale, später Moschee, dann Museum, seit 2020 wieder Moschee. Als Moschee <strong>gratis</strong> zugänglich. Für die Galerie mit den byzantinischen Mosaiken und Wandmalereien (6.–10. Jhdt.): ~25€ — 1.500 Jahre Geschichte in einem Raum. <strong>Früh morgens</strong> (vor 8:30 Uhr) gehen!</div>
    <span class="poi-meta">Moschee gratis · Galerie ~25€ · früh morgens!</span>
  </div>
  <div class="poi">
    <div class="poi-name">Sultanahmet Meydanı (Hipodrom) ⭐</div>
    <div class="poi-desc">Der Platz vor der Hagia Sophia ist ein offenes Freilichtmuseum: der ägyptische Obelisk von Thutmosis III. (1450 v.Chr.), die Schlangensäule aus Delphi (479 v.Chr.), der Konstantinus-Obelisk. Alles Jahrtausende alt, alle auf einem Platz.</div>
    <span class="poi-meta">Gratis · einfach durchschlendern</span>
  </div>
  <div class="poi">
    <div class="poi-name">Sultanahmet Camii (Blaue Moschee) ⭐</div>
    <div class="poi-desc">Direkt gegenüber der Ayasofya. Gebaut 1616. Innen über 20.000 handbemalte İznik-Kacheln in Blau- und Grüntönen — daher der Name. Als Moschee gratis rein, außerhalb der Gebetszeiten. Schultern + Knie bedecken, Schuhe ausziehen.</div>
    <span class="poi-meta">Gratis · Knie + Schultern bedecken</span>
  </div>
  <div class="poi">
    <div class="poi-name">Yerebatan Sarnıcı (Basilika-Zisterne) ⭐⭐</div>
    <div class="poi-desc">Unterirdisches byzantinisches Wasserreservoir aus dem 6. Jhdt., von Kaiser Justinian erbaut. 336 Marmorsäulen, dramatische Beleuchtung, Reflexionen auf dem Wasser. Im hinteren Teil: zwei umgedrehte Medusa-Köpfe als Säulensockel — niemand weiß warum. Magische Atmosphäre, nur wenige Minuten von der Ayasofya entfernt.</div>
    <span class="poi-meta">~20€</span>
  </div>
  <div class="poi">
    <div class="poi-name">Galatabrücke</div>
    <div class="poi-desc">Gratis rüberlaufen. Fischer hängen ihre Ruten über die Seiten, darunter Fischrestaurants in den Brückenbögen. Blick auf Minarette und Bosporus. Abends besonders schön.</div>
    <span class="poi-meta">Gratis · abends besonders schön</span>
  </div>
  <div class="poi">
    <div class="poi-name">Galata Kulesi</div>
    <div class="poi-desc">Ikonischer Mittelalterturm in Karaköy, nahe deinem Hostel. Das Viertel drumherum mit Gassen, Streetart und kleinen Cafés ist sehr interessant — das allein lohnt sich. Innen Aussicht, teuer für Touristen.</div>
    <span class="poi-meta">Von außen gratis · Eintritt 30€</span>
  </div>
  <div class="poi">
    <div class="poi-name">Balat + Fener ⭐⭐ <span class="must">(Geheimtipp!)</span></div>
    <div class="poi-desc">Zwei nebeneinanderliegende alte Stadtviertel auf der Westseite des Goldenen Horns. Ehemaliges griechisch-jüdisches Viertel mit bunten, leicht verfallenen Häusern, engen Kopfsteinpflastergassen, winzigen Cafés und echtem Alltagsleben. Kaum Touristen, sehr authentisch, sehr fotogen.</div>
    <span class="poi-meta">Gratis · einfach durchlaufen</span>
  </div>
  <div class="poi">
    <div class="poi-name">İstiklal Caddesi + Taksim</div>
    <div class="poi-desc">Lange Fußgängerzone mit Shops, Straßenmusikern und lokalem Leben. Abends und nachts besonders lebendig.</div>
    <span class="poi-meta">Gratis · abends am besten</span>
  </div>
  <div class="acc-lbl">⛴️ Bosporus-Fähre (Şehir Hatları) ⭐⭐</div>
  <div class="poi">
    <div class="poi-name">Linienfähre mit İstanbulkart</div>
    <div class="poi-desc">Das Highlight für Budget-Reisende. <strong>Keine Touristenfähre buchen</strong> — die reguläre Linienfähre mit İstanbulkart nehmen (~1–2 TL, fast gratis). Du fährst mit Einheimischen auf dem Bosporus, Blick auf Moscheen, Brücken und beide Kontinente. <strong>Linie Eminönü → Kadıköy</strong> oder die längere Boğaz-Linie. Unvergesslich.</div>
    <span class="poi-meta">~1–2 TL mit İstanbulkart · ab Eminönü</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">İstanbul Modern</div>
    <div class="poi-desc">Modernes Kunstmuseum direkt in Karaköy, 5 Min vom Hostel. Zeitgenössische türkische Kunst in einem Industriegebäude am Bosporus.</div>
    <span class="poi-meta">~10–15€ · Karaköy</span>
  </div>
  <div class="poi">
    <div class="poi-name">Karaköy — dein Hostel-Viertel!</div>
    <div class="poi-desc">Streetart, Designshops, Cafés, Fischrestaurants. Direkt am Bosporus. Abends sehr lebendig. Archeo Hostel liegt mittendrin — perfekte Ausgangslage.</div>
    <span class="poi-meta">Gratis · direkt vor der Tür</span>
  </div>
  <div class="poi">
    <div class="poi-name">Cihangir</div>
    <div class="poi-desc">Hipster-Viertel direkt hinter Taksim. Arty, viele unabhängige Buchläden, kleine Galerien, Cafés. Zum Durchschlendern.</div>
    <span class="poi-meta">Gratis</span>
  </div>
  <div class="poi">
    <div class="poi-name">Großer Basar (Kapalı Çarşı)</div>
    <div class="poi-desc">Einer der ältesten und größten überdachten Basare der Welt, 4.000 Läden. Gratis reinschauen, nichts kaufen müssen. Feilschen gehört dazu — aber nicht bei Essen. Eher als Sehenswürdigkeit denn als Einkaufsort.</div>
    <span class="poi-meta">Gratis rein · Feilschen erwünscht</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Simit</div>
    <div class="poi-desc">Sesam-Brezel-Ring, überall auf der Straße von Wagen. Das Frühstück der İstanbuler.</div>
    <span class="poi-meta">Unter 1 €</span>
  </div>
  <div class="poi">
    <div class="poi-name">Midye Dolma ⭐⭐</div>
    <div class="poi-desc">Mit gewürztem Reis und Pinienkernen gefüllte Muscheln, von Straßenständen mit Zitrone. Kult in Istanbul. Direkt in Karaköy: <strong>Tarihi Karaköy Midyecisi</strong> (seit 1921). Du isst sie stehend, eine nach der anderen.</div>
    <span class="poi-meta">Sehr günstig · Tarihi Karaköy Midyecisi</span>
  </div>
  <div class="poi">
    <div class="poi-name">Balık Dürüm / Balık Ekmek ⭐</div>
    <div class="poi-desc">Gegrilltes Fischsandwich. An der Galatabrücke und in Karaköy. Bester: <strong>Balık Dürüm Mehmet Usta</strong> in Karaköy — deboned, mit Granatapfelkernen und Spezialgewürzen.</div>
    <span class="poi-meta">~3–5 € · Galatabrücke oder Karaköy</span>
  </div>
  <div class="poi">
    <div class="poi-name">Karaköy Güllüoğlu Baklava ⭐⭐</div>
    <div class="poi-desc">Legendäre Baklava-Bäckerei, gilt als beste in Istanbul. Direkt in Karaköy, paar Minuten vom Hostel. Pistazien-Baklava probieren.</div>
    <span class="poi-meta">Günstig · Karaköy</span>
  </div>
  <div class="poi">
    <div class="poi-name">Döner</div>
    <div class="poi-desc">Ikonisch. In kleinen lokalen Lokalen in Seitenstraßen viel besser als in Touristenrestaurants.</div>
    <span class="poi-meta">~3–6 €</span>
  </div>
  <div class="poi">
    <div class="poi-name">Lahmacun</div>
    <div class="poi-desc">Türkische dünne Pizza mit Hackfleischfüllung, überall günstig.</div>
    <span class="poi-meta">1–2 €</span>
  </div>
  <div class="poi">
    <div class="poi-name">Çiğ Köfte</div>
    <div class="poi-desc">Veganer Bulgur-Wrap mit Granatapfelmelasse und Salat. Überall von Straßenständen, sehr günstig. Erkennbar an pinken Läden.</div>
    <span class="poi-meta">Sehr günstig</span>
  </div>
  <div class="poi">
    <div class="poi-name">Islak Burger ⭐</div>
    <div class="poi-desc">Dampfburger, typisch für die Nacht nach dem Ausgehen. <strong>Kızılkayalar</strong> in Taksim. Sehr lokal und günstig.</div>
    <span class="poi-meta">Günstig · Kızılkayalar in Taksim</span>
  </div>
  <div class="poi">
    <div class="poi-name">Kumpir</div>
    <div class="poi-desc">Riesige Ofenkartoffel mit Butter, Käse und allem was du willst. Am besten in Ortaköy am Bosporus.</div>
    <span class="poi-meta">~3–5 € · Ortaköy</span>
  </div>
  <div class="poi">
    <div class="poi-name">Türkischer Tee (çay) &amp; Granatapfelsaft</div>
    <div class="poi-desc">Tee überall, kleines Glas, 5–10 TL. Nie ablehnen wenn angeboten. Granatapfelsaft frisch gepresst von Straßenständen — besonders bei Bazaren.</div>
    <span class="poi-meta">5–10 TL Tee · sehr günstig</span>
  </div>
  <div class="poi">
    <div class="poi-name">Börek</div>
    <div class="poi-desc">Blätterteig mit Käse, Spinat oder Hackfleisch. Beim <strong>Balat Börekcisi</strong> im Balat-Viertel besonders gut.</div>
    <span class="poi-meta">Sehr günstig · Balat Börekcisi empfohlen</span>
  </div>
</div>`,

      'Geheimtipps': `
<ul class="tip-list">
  <li><strong>Früh aufstehen:</strong> Sultanahmet ist um 7–8 Uhr morgens fast leer und magisch — danach extreme Touristenmassen.</li>
  <li><strong>Eminönü</strong> — Belebtestes Fährterminal der Stadt. Direkt am Goldenen Horn, Mischung aus Händlern, Fährgästen und Streetfood. Super Atmosphäre auch ohne Fähre.</li>
  <li><strong>Niemals Taxis</strong> ohne Taxameter nehmen — Tram + Fähre + Metro mit İstanbulkart ist günstiger und schneller. Bei Ankunft İstanbulkart kaufen!</li>
  <li><strong>Großer Basar:</strong> Feilschen gehört dazu — immer bei 30–40% des genannten Preises starten. Nicht bei Essen feilschen.</li>
  <li><strong>Balat + Fener</strong> frühmorgens erkunden — die buntesten Häuser und engsten Gassen, kaum Touristen, toll zum Fotografieren.</li>
  <li><strong>İstanbul Modern</strong> liegt 5 Min vom Hostel — perfekt für einen Nachmittag am ersten Tag.</li>
</ul>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>E-Visum vorab beantragen!</strong> evisa.gov.tr — ~35€. Online in wenigen Minuten, sofort verfügbar. Nicht vergessen!</li>
  <li><strong>İstanbulkart</strong> bei Ankunft an Automaten oder Kiosks kaufen. Tram, Metro, Fähre viel günstiger als Einzelticket.</li>
  <li><strong>Flughafen IST ist sehr weit</strong> (~45–60 Min mit Havas-Bus oder Metro). Abflug 2:00 Uhr am 7. Aug → spätestens 22:00 Uhr Hostel verlassen!</li>
  <li><strong>Hostel:</strong> Archeo Hostel, Tophane/Karaköy — direkt am Bosporus, 5 Min zur Galata Kulesi.</li>
  <li><strong>Währung:</strong> Türkische Lira (TRY). Wechsel am besten an Wechselbüros in der Stadt, nicht am Flughafen.</li>
  <li><strong>Timing:</strong> Ankunft 11:40 Uhr. Einchecken, Gepäck ablegen, sofort los — nur ~34h in Istanbul!</li>
  <li><strong>Transport:</strong> Tramway T1 verbindet Kabataş–Sultanahmet–Eminönü. Sehr praktisch für Sightseeing.</li>
</ul>`,

      'Suchbegriffe': `"Istanbul gezilecek yerler ücretsiz 2026" (türkisch)
"Karaköy Tophane yerel mekanlar" (lokale Spots deines Viertels)
"Balat Fener gezilecek yerler"
"Istanbul street food budget backpacker local tips"`,
    },
  },

  bangkok: {
    image:    'https://upload.wikimedia.org/wikipedia/commons/b/bd/Wat_Arun_from_Chao_Phraya_River.jpg',
    imageAlt: 'Wat Arun am Chao Phraya Fluss, Bangkok',
    intro: `
      <p>📅 <strong>Mehrmals auf der Reise:</strong> <strong>7.–14. Aug</strong> (mit Freundin ankommen) · <strong>28. Aug–3. Sept</strong> (inkl. 🎂 30. Aug Geburtstag) · <strong>ab 9. Sept</strong> (Rückflug-Puffer)</p>
      <p>Du kennst Bangkok gut (5+ Besuche) — Fokus auf noch unbekannte Ecken, neue Kunstquartiere und lokale Märkte abseits der Touristenpfade.</p>
    `,
    pins: [
      { lat: 13.7438, lng: 100.4889, name: 'Wat Arun ⭐',                   desc: 'Fotogenischster Tempel am Chao Phraya · ~100 Baht' },
      { lat: 13.7535, lng: 100.5056, name: 'Wat Saket (Golden Mount) ⭐',    desc: '344 Stufen · 360°-Panorama · günstig' },
      { lat: 13.7218, lng: 100.5160, name: 'Charoen Krung Art District ⭐⭐', desc: 'Neuestes Kunstquartier · Galerien &amp; Cafés · gratis' },
      { lat: 13.7459, lng: 100.4677, name: 'Klong Bang Luang ⭐⭐',          desc: 'Geheimes Künstlerdorf am Kanal · gratis' },
      { lat: 13.7469, lng: 100.5304, name: 'BACC (Siam)',                    desc: 'Bangkok Art &amp; Culture Centre · kostenlos' },
      { lat: 13.7474, lng: 100.5273, name: 'Jim Thompson House',             desc: 'Seidenmuseums-Villa · ~200 Baht' },
      { lat: 13.7384, lng: 100.5118, name: 'Chinatown / Yaowarat',           desc: 'Abends mit Streetfood-Ständen besuchen' },
      { lat: 13.8082, lng: 100.5742, name: 'Jodd Fairs Dan Neramit ⭐',      desc: 'Hipster Nachtmarkt · sehr lokal' },
      { lat: 13.8001, lng: 100.5505, name: 'Or Tor Kor Market',              desc: 'Premium-Frischmarkt neben Chatuchak' },
      { lat: 13.7500, lng: 100.4913, name: 'Grand Palace + Wat Phra Kaew',   desc: 'Klassiker · ~500 Baht' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Wat Arun ⭐</div>
    <div class="poi-desc">Wohl der fotogenischste Tempel Bangkoks, direkt am Chao Phraya Fluss. Der charakteristische Prang (Turm) ist vollständig mit farbigem Porzellan-Mosaik bedeckt — Scherben aus alten chinesischen Handelsschiffen wurden in den Putz eingearbeitet. Besonders schön zum Sonnenuntergang von der anderen Flussseite fotografiert. Mit der kleinen Fähre (~4 Baht) überqueren und auf der Pier Tha Tien warten.</div>
    <span class="poi-meta">~100 Baht Eintritt · Fähre ~4 Baht · Sonnenuntergang ideal</span>
  </div>
  <div class="poi">
    <div class="poi-name">Wat Saket (Golden Mount) ⭐</div>
    <div class="poi-desc">Weniger touristisch als der Grand Palace und dafür umso schöner. Der Tempel liegt auf einem künstlichen Hügel — 344 Stufen führen in Spiralen hinauf zu einem goldenen Stupa. Von oben hat man einen wunderbaren 360°-Panoramablick über Bangkoks Dächer, Tempel und den Fluss. Sehr entspannte Atmosphäre, kaum Massentourismus.</div>
    <span class="poi-meta">Günstig · früh morgens oder abends gehen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Chinatown / Yaowarat</div>
    <div class="poi-desc">Bangkoks Chinatown rund um die Yaowarat Road ist tagsüber geschäftig und interessant, aber abends verwandelt es sich komplett: Streetfood-Stände füllen die Gehwege, Garküchen kochen bis tief in die Nacht, goldene Tempel und Leuchtreklamen tauchen alles in warmes Licht. Unbedingt ab ~19 Uhr besuchen, wenn der Markt aufblüht.</div>
    <span class="poi-meta">Kostenlos · abends ab 19 Uhr am besten</span>
  </div>
  <div class="poi">
    <div class="poi-name">Grand Palace + Wat Phra Kaew</div>
    <div class="poi-desc">Du kennst es — der bekannteste Komplex Bangkoks mit dem berühmten Smaragd-Buddha (Wat Phra Kaew) und dem ehemaligen Königspalast. Erwähnt der Vollständigkeit halber. Falls du jemanden begleitest, der es noch nicht gesehen hat, ist der Komplex trotzdem immer beeindruckend. Korrekte Kleidung erforderlich (Schultern und Knie bedeckt — Leihkleidung an der Tür gegen Pfand).</div>
    <span class="poi-meta">~500 Baht · Mo–So 8:30–15:30 Uhr · Kleidungsregeln!</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Charoen Krung Art District ⭐⭐</div>
    <div class="poi-desc">Bangkoks neuestes und derzeit heißestes Kunstquartier rund um Charoen Krung Soi 32. Alte Lagerhäuser, Shophouses und Kolonialgebäude beherbergen Galerien, Design-Studios, Concept Stores und Cafés. Von Thai-Locals 2025/26 als der spannendste neue Spot in Bangkok empfohlen — kein Touristenort, sehr authentisch. Besonders schön zwischen 16 und 18 Uhr, wenn das Licht stimmt. Als Kunst/Design-Mensch ist das ein absolutes Muss.</div>
    <span class="poi-meta">Gratis · bestes Licht 16–18 Uhr · Charoen Krung Soi 32</span>
  </div>
  <div class="poi">
    <div class="poi-name">Klong Bang Luang Artist Village ⭐⭐</div>
    <div class="poi-desc">Ein verstecktes Künstlerdorf an einem alten Kanal im Westen Bangkoks — absoluter Geheimtipp und kein Touristenort. Historische Holzhäuser entlang des Wassers, kleine Galerien, Kunsthandwerk-Workshops, ein traditionelles Puppentheater (Khon-Masken), Cafés in alten Gebäuden. Hier kaufen und arbeiten echte lokale Künstler. Die Atmosphäre ist außergewöhnlich ruhig und unberührt. Per Grab oder Boot erreichbar.</div>
    <span class="poi-meta">Gratis · Westen Bangkoks · per Grab oder Boot</span>
  </div>
  <div class="poi">
    <div class="poi-name">Bangkok Art &amp; Culture Centre (BACC)</div>
    <div class="poi-desc">Kostenloses modernes Kunstmuseum direkt am Siam-Platz, mit rotierenden Ausstellungen zeitgenössischer thailändischer und internationaler Kunst über mehrere Stockwerke. Klimatisiert — ideal für einen verregneten Nachmittag. Die spiralförmige Innenarchitektur ist selbst sehenswert. Die Außentreppe ist auch ohne Ausstellung ein schöner Aussichtspunkt über den Siam-Knotenpunkt.</div>
    <span class="poi-meta">Gratis · Di–So 10–21 Uhr · Siam BTS</span>
  </div>
  <div class="poi">
    <div class="poi-name">Jim Thompson House</div>
    <div class="poi-desc">Die Villa des amerikanischen Seidendesigners Jim Thompson, der in den 1950ern die Thai-Seidenindustrie international bekannt machte und 1967 spurlos in Malaysia verschwand. Sechs traditionelle Thai-Teakhäuser wurden zu einem außergewöhnlichen Museum vereint, umgeben von tropischem Garten. Wertvolle asiatische Kunstobjekte, Wandmalereien, antike Keramik. Als Design-Interessierter sehr sehenswert — der Mann hatte exzellenten Geschmack.</div>
    <span class="poi-meta">~200 Baht · täglich 10–18 Uhr · National Stadium BTS</span>
  </div>
  <div class="poi">
    <div class="poi-name">Chao Phraya Sky Park</div>
    <div class="poi-desc">Neues Stadtprojekt: Ein schwebendes Grünband auf einer stillgelegten Eisenbahnbrücke über den Chao Phraya Fluss. Einzigartiger Blickwinkel auf den Fluss und die anliegenden Tempel von oben. Sehr lokal — kaum Touristen bisher. Schöner Ort zum Flanieren bei Sonnenuntergang.</div>
    <span class="poi-meta">Gratis · abends besonders schön</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Pad Kra Pao ⭐⭐</div>
    <div class="poi-desc">Das eigentliche Nationalgericht Thailands — nicht Pad Thai, das eher für Touristen entwickelt wurde. Fein gehacktes Schweine- oder Hühnerfleisch mit frischem Heiligen Basilikum (Kra Pao), Chili, Knoblauch und Austernsauce, scharf angebraten. Über Jasminreis mit einem Spiegelei obendrauf (Kai Dao). Jede Garküche macht es, jede leicht anders — das macht den Charme. Überall erhältlich, ~60–80 Baht.</div>
    <span class="poi-meta">~60–80 Baht · überall · das echte Nationalgericht</span>
  </div>
  <div class="poi">
    <div class="poi-name">Boat Noodles</div>
    <div class="poi-desc">Kleine Schüsseln intensiver Nudelsuppe (je ~20 Baht), ursprünglich von Booten auf den Khlong-Kanälen serviert. Die Brühe ist dunkel und kräftig durch Schweine- oder Rinderblut mit Gewürzen. Isst man üblicherweise 3–5 Schüsselchen nacheinander. Im Victory Monument-Viertel gibt es ganze Straßenzüge mit Boat-Noodle-Restaurants.</div>
    <span class="poi-meta">~20 Baht/Schüssel · Victory Monument BTS</span>
  </div>
  <div class="poi">
    <div class="poi-name">Jay Fai ⭐</div>
    <div class="poi-desc">Bangkoks berühmteste Garküche mit Michelin-Stern — Khun Jay Fai kocht seit Jahrzehnten selbst mit riesigen Woks, Schutzbrille und Wollmütze. Legendäre Meeresfrüchte-Omelette und Krab Curry mit Glasnudeln. Um einen Tisch zu bekommen, muss man sich am frühen Morgen persönlich in eine Warteliste eintragen (keine Online-Reservierung). Teuer für Bangkok (~1.000 Baht pro Person), aber einmalig.</div>
    <span class="poi-meta">~1.000 Baht · Banglampu · früh morgens persönlich eintragen!</span>
  </div>
  <div class="poi">
    <div class="poi-name">Mango Sticky Rice</div>
    <div class="poi-desc">Klebreis mit gesüßter Kokosmilch und frischer Mango — eines der Dessert-Highlights Thailands. An Marktständen kaufen, nicht in Restaurants (authentischer und günstiger). Hauptmango-Saison ist März–Juni, im August gibt es möglicherweise andere Fruchtsorten oder importierte Mangos. Trotzdem lohnt sich der Versuch.</div>
    <span class="poi-meta">~60–80 Baht · Marktstände (nicht Restaurants!)</span>
  </div>
  <div class="poi">
    <div class="poi-name">Khao Man Gai</div>
    <div class="poi-desc">Gedämpftes Hühnchen auf Hühnerbrühe-Reis, serviert mit einer würzigen Ingwer-Sojabohnen-Sauce und klarer Suppe. Das günstigste und befriedigendste Alltagsessen Bangkoks — überall erhältlich, sehr sättigend, sehr lokal. Perfektes günstiges Mittagessen wenn man schnell weiter muss.</div>
    <span class="poi-meta">~50–60 Baht · überall</span>
  </div>
  <div class="poi">
    <div class="poi-name">Egg Coffee (Cà Phê Trứng)</div>
    <div class="poi-desc">Vietnamesischer Egg Coffee — espressostarker Kaffee unter einer cremig-süßen Eigelb-Sahne-Haube — wird in Bangkok in vietnamesischen Cafés immer populärer und ist wirklich gut. Ein ungewöhnliches aber sehr lohnenswertes Kaffee-Erlebnis für Kaffeeliebhaber.</div>
    <span class="poi-meta">~100–150 Baht · vietnamesische Cafés</span>
  </div>
</div>`,

      'Geheimtipps': `
<div class="poi-list">
  <div class="acc-lbl">🛍️ Lokale Märkte</div>
  <div class="poi">
    <div class="poi-name">Jodd Fairs Dan Neramit ⭐</div>
    <div class="poi-desc">Der neueste und derzeit hippste Ableger der Jodd-Fairs-Reihe — auf dem alten Dan Neramit Vergnügungspark-Gelände. Vintage-Ästhetik durch die nostalgische Location, coole Foodstände, internationale Street Cuisine, junges lokales Publikum. Deutlich weniger Touristen als die innerstädtischen Märkte. Abends hingehen. BTS Hä Yaek Lat Phrao, Ausgang 3.</div>
    <span class="poi-meta">Abends · BTS Hä Yaek Lat Phrao Exit 3</span>
  </div>
  <div class="poi">
    <div class="poi-name">Klong Lat Mayom Floating Market</div>
    <div class="poi-desc">Einer der wenigen echten lokalen Schwimmmärkte, kein Touristenmarkt. Thais kaufen hier am Wochenendmorgen Gemüse, Kräuter, frisch zubereitetes Essen und Haushaltsartikel von kleinen Booten. Die Atmosphäre ist völlig anders als beim touristischen Damnoen Saduak — authentisch, entspannt, preiswert. Frühzeitig hingehen (ab 7 Uhr).</div>
    <span class="poi-meta">Sa + So · morgens ab 7 Uhr · Bangkok Noi</span>
  </div>
  <div class="poi">
    <div class="poi-name">Or Tor Kor Market</div>
    <div class="poi-desc">Premium-Frischmarkt direkt neben dem Chatuchak Weekend Market — wo Bangkoks Profiköche und Foodie-Szene einkauft. Hochwertigstes Obst (Mangosteen, Rambutan, Durian), seltene Kräuter, fertige Curries, frische Meeresfrüchte in Spitzenqualität. Für Lebensmittel-Interessierte und Foodie-Traveller spannender als Chatuchak selbst. Sauber, klimatisiert, kein Feilschen.</div>
    <span class="poi-meta">Täglich 6–18 Uhr · BTS Mo Chit · neben Chatuchak</span>
  </div>
</div>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>Grab App</strong> — Immer nutzen statt normaler Taxis. Preis wird vorher festgelegt, kein Feilschen, kein "Zähler kaputt"-Trick. Deutlich günstiger und stressfreier. App vorab installieren und mit Kreditkarte verknüpfen.</li>
  <li><strong>BTS + MRT Skytrain</strong> — Für alles was am Skytrain-Netz liegt, deutlich günstiger als Grab. Rabbit Card für weitere Rabatte kaufen (wiederaufladbar, Pfand ~100 Baht).</li>
  <li><strong>Korat-Ausflug</strong> — Bus ab Mo Chit Northern Bus Terminal, ~3h Fahrt, ~150 Baht. Mit Ausflug nach Phimai Historical Park kombinieren (Khmer-Tempel, UNESCO-Kandidat, fußläufig vom Busbahnhof). Gut mit Freundin als Tagesausflug.</li>
  <li><strong>Wetter August</strong> — Regenzeit, aber in Bangkok meist kurze intensive Schauer am Nachmittag, selten ganztägig. Faltschirm oder Regenponcho (~50 Baht am Markt) immer dabei.</li>
  <li><strong>SIM-Karte</strong> — Am Suvarnabhumi-Flughafen direkt nach der Ankunft kaufen. True Move oder AIS, 30 Tage unbegrenzte Daten ~300–400 Baht. Günstiger und besser als Roaming.</li>
  <li><strong>Bargeld</strong> — Bangkok ist cashfreundlicher als Europa. ATMs überall, Gebühr ~220 Baht pro Abhebung bei ausländischen Karten — größere Beträge auf einmal abheben.</li>
</ul>`,

      'Suchbegriffe': `"ที่เที่ยวกรุงเทพ ซ่อนเร้น 2026" (Hidden gems Bangkok auf Thai)
"Bangkok hidden gems art design local 2026"
"ย่านศิลปะกรุงเทพ" (Bangkoks Kunstquartiere auf Thai)
"Klong Bang Luang artist village Bangkok"`,
    },
  },

  'nong-khai': {
    image:    'https://upload.wikimedia.org/wikipedia/commons/6/68/Sala_Keoku.JPG',
    imageAlt: 'Sala Kaew Ku Skulpturenpark, Nong Khai',
    intro: `
      <p>📅 <strong>16. August</strong> — Übernachtzug kommt ~6 Uhr an. <strong>Morgenstopp ca. 2–3 Stunden</strong>, dann weiter zur Grenze nach Laos.</p>
      <p>⚠️ <strong class="warn">Passfoto mitbringen!</strong> Für das Visa on Arrival in Laos wird 1 Passfoto benötigt.</p>
      <p>Nong Khai liegt direkt am Mekong, der die Grenze zu Laos bildet. Fast keine Touristen, völlig entspanntes Mekong-Flair. Von hier sind es 24 km nach Vientiane.</p>
    `,
    pins: [
      { lat: 17.8698, lng: 102.7655, name: 'Sala Kaew Ku ⭐⭐⭐', desc: 'Bizarrer Skulpturenpark · 200+ Figuren · 4 km vom Zentrum' },
      { lat: 17.8763, lng: 102.7413, name: 'Wat Pho Chai',         desc: 'Goldener Buddha mit Mekong-Geschichte · gratis' },
      { lat: 17.8783, lng: 102.7402, name: 'Mekong Promenade',     desc: 'Früh morgens: Mönche, Jogger, Blick nach Laos' },
      { lat: 17.8780, lng: 102.7418, name: 'Tha Sadet Market',     desc: 'Grenzmarkt · ab 7 Uhr · Waren aus Laos &amp; Vietnam' },
      { lat: 17.9172, lng: 102.7297, name: 'Freundschaftsbrücke',  desc: '1. Thai-Laos Freundschaftsbrücke · Grenzübergang' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Sala Kaew Ku (Skulpturenpark) ⭐⭐⭐</div>
    <div class="poi-desc">Das absolute Highlight von Nong Khai und ein kompletter Geheimtipp. Ein bizarrer Skulpturenpark 4 km vom Zentrum, erschaffen ab 1978 vom Mystiker und Künstler <strong>Luang Pu Bunleua Sulilat</strong> — derselbe, der zuvor in Laos den Buddha Park bei Vientiane gebaut hatte und nach dem Pathet-Lao-Putsch ins Exil floh. Über 200 monumentale Betonfiguren füllen das Gelände: 15 Meter hohe Dämonen, siebenköpfige Nagas, Hindu-Götter, kosmische Räder, surreale Figurengruppen ohne Vergleich. Die Figuren mischen buddhistisches und hinduistisches Gedankengut auf eine völlig eigenwillige, persönliche Weise. Im zweiten Stock des Kuppelgebäudes liegt der einbalsamierte Leichnam des Gründers im Glassarg — Thais und Laoten betreten diesen Raum nie (strikte Trennung zwischen Lebenden und Toten in der lokalen Tradition). Als Kunst/Design-Mensch: absolut geniales, surreales Kunstwerk von einzigartiger Originalität. Outsider Art im monumentalen Maßstab. Früh morgens bist du fast allein.</div>
    <span class="poi-meta">~20–80 Baht · täglich 7–18 Uhr · Tuk-Tuk ~60 Baht (4 km)</span>
  </div>
  <div class="poi">
    <div class="poi-name">Wat Pho Chai</div>
    <div class="poi-desc">Der wichtigste Tempel in Nong Khai. Beherbergt den "Luang Pho Phra Sai", eine goldene Buddha-Statue mit fesselnder Geschichte: Ursprünglich sollte sie von Vientiane nach Bangkok transportiert werden, versank jedoch beim Überqueren des Mekong und wurde erst Jahre später bei Niedrigwasser geborgen. Die farbigen Wandfresken im Inneren erzählen diese Geschichte in Bildern. Sehr ruhig und wenig Touristen.</div>
    <span class="poi-meta">Gratis · täglich 6–18 Uhr</span>
  </div>
  <div class="poi">
    <div class="poi-name">Mekong Promenade</div>
    <div class="poi-desc">Wenige Gehminuten vom Bahnhof entfernt. Früh morgens ist die Promenade besonders schön: Jogger, Fischer, Mönche auf dem Weg zur Runde, Blick auf Laos auf der anderen Seite des breiten Mekong. Sehr friedlich und echt lokal — keine Touristeninfrastruktur, nur das echte Nong Khai.</div>
    <span class="poi-meta">Gratis · früh morgens am schönsten</span>
  </div>
  <div class="poi">
    <div class="poi-name">Phra That Nong Khai ("Versunkene Pagode")</div>
    <div class="poi-desc">Bei Niedrigwasser (September–November) taucht mitten im Mekong eine alte Pagode auf, die einst ins Wasser gefallen ist — ein einzigartiges Phänomen. Von der Promenade aus sichtbar. Im August (Regenzeit, Hochwasser) ist sie wahrscheinlich noch überflutet und nicht zu sehen, aber die Geschichte ist trotzdem faszinierend.</div>
    <span class="poi-meta">Gratis · von der Promenade sichtbar · im Aug. evtl. überflutet</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Sala Kaew Ku als Kunstwerk</div>
    <div class="poi-desc">Der Skulpturenpark ist nicht nur eine Sehenswürdigkeit, sondern ein genuines Kunstwerk von außergewöhnlicher Originalität. Luang Pu Bunleua Sulilat schuf über Jahrzehnte ein persönliches Universum aus Beton — ohne Architekturstudium, ohne kunstakademischen Hintergrund, geleitet von religiöser Vision und persönlicher Mythologie. Die Monumentalfiguren verbinden hinduistisch-buddhistische Ikonographie mit surrealer Fantasie: riesige Dämonen mit Hunderten von Köpfen, mehrköpfige Schlangengötter (Nagas), kosmische Szenen mit klarer Botschaft, aber undurchdringlicher Eigenlogik. Für Design/Kunst-Interessierte ist das eine Kategorie für sich: Outsider Art im monumentalen Maßstab, mit der konsequenten Handschrift einer einzigen Person über Jahrzehnte.</div>
    <span class="poi-meta">Teil von Sala Kaew Ku · 4 km vom Zentrum · Tuk-Tuk ~60 Baht</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Khao Soi</div>
    <div class="poi-desc">Die lokale Nudelsuppe des Isan — gebratene Eiernudeln in einer Kokosmilch-Curry-Brühe, mit eingelegtem Senf, frischen Schalotten und Limette. Das typische Frühstück der Region. An Garküchen in der Nähe des Bahnhofs und des Marktes, für ~50 Baht. Unterscheidet sich leicht von der nordthailändischen Variante (Chiang Mai Khao Soi ist reichhaltiger).</div>
    <span class="poi-meta">~50 Baht · Frühstück · Garküchen am Markt</span>
  </div>
  <div class="poi">
    <div class="poi-name">Naem Nuang ⭐</div>
    <div class="poi-desc">Vietnamesische Reispapier-Rolls — Kult-Adresse ist <strong>Daeng Naem Nuang</strong> am Tha Sadet Markt. Frisch gerollte Reispapier-Blätter mit gegrilltem Schweinefleisch, frischen Kräutern, Gurke und einer süß-sauren Dipsauce. Starker vietnamesischer Einfluss durch die Grenzlage — viele Vietnamesen haben sich in Nong Khai niedergelassen und ihre Küche mitgebracht.</div>
    <span class="poi-meta">~80–100 Baht · Tha Sadet Markt · Daeng Naem Nuang</span>
  </div>
  <div class="poi">
    <div class="poi-name">Laab Moo</div>
    <div class="poi-desc">Isan-Klassiker: Warmer Hackfleischsalat aus fein gehacktem Schweinefleisch mit geröstetem Reispulver (das gibt die nussig-rauchige Note), frischen Kräutern (Minze, Frühlingszwiebeln), Fischsauce und Limettensaft. Serviert mit rohem Gemüse als Beilage und Klebreis. Eines der charakteristischsten Gerichte der gesamten Nordostregion.</div>
    <span class="poi-meta">~60–80 Baht · lokale Restaurants</span>
  </div>
</div>`,

      'Geheimtipps': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Tha Sadet Market (Indochina Market) ⭐</div>
    <div class="poi-desc">Lokaler Grenzmarkt direkt am Mekong-Ufer. Waren aus Laos, Vietnam und China — Textilien, Haushaltswaren, Gewürze, Snacks, frisches Obst und Gemüse. Öffnet ab 7 Uhr, wenn die ersten Händler mit Booten ankommen. Sehr atmosphärisch, günstig, und kein Touristenmarkt. Ein kleines Fenster in das Leben der gesamten Mekong-Region an einem einzigen Ort.</div>
    <span class="poi-meta">Ab 7 Uhr · Mekong-Ufer · Zentrum</span>
  </div>
  <div class="poi">
    <div class="poi-name">Sa-Ard 100 Pi Market (Wochenendmarkt)</div>
    <div class="poi-desc">Kleiner authentischer Wochenendmarkt mit Isan-Essen und lokalen Waren, falls du am Samstag oder Sonntag in Nong Khai bist. Wenig bekannt, sehr lokal, keine Touristen.</div>
    <span class="poi-meta">Sa + So · Stadtgebiet</span>
  </div>
</div>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>Grenzübergang nach Laos — Schritt für Schritt:</strong></li>
  <li>1️⃣ <strong>Tuk-Tuk</strong> vom Bahnhof / Zentrum zur 1. Thai-Laos Freundschaftsbrücke (~60 Baht, ~15 min)</li>
  <li>2️⃣ <strong>Bus über die Brücke</strong> (~1,7 km): 20 Baht, fährt regelmäßig hin und zurück</li>
  <li>3️⃣ Thai-Seite: <strong>Ausreisestempel</strong> am Immigration Counter — Passport vorlegen, unkompliziert, ~5 min</li>
  <li>4️⃣ Laos-Seite: <strong>Visa on Arrival (~35 USD)</strong> — Antragsformular ausfüllen (liegt aus), <strong>1 Passfoto abgeben</strong>, Gebühr in USD zahlen, Stempel erhalten. Dauert ~15–30 min je nach Andrang</li>
  <li>5️⃣ <strong>Tuk-Tuk oder Bus</strong> von der Grenze nach Vientiane (~25 km, ~30–45 min, ~$2–4 je nach Verhandlung)</li>
  <li><strong>Gesamtzeit</strong> ab Bahnhof Nong Khai bis Vientiane Zentrum: ca. 1–1,5 Stunden</li>
  <li><strong>Öffnungszeiten Grenze:</strong> täglich 6–22 Uhr</li>
  <li><strong>Passfoto nicht vergessen!</strong> Ohne Foto gibt es Extragebühr oder Verzögerung an der Grenze</li>
  <li><strong>Währung für Visum:</strong> USD bereithalten (Bargeld). Wechseln direkt an der Grenze ist möglich, aber mit schlechterer Rate</li>
</ul>`,

      'Suchbegriffe': `"Nong Khai hidden gems things to do morning"
"Sala Kaew Ku Nong Khai Skulpturenpark"
"Nong Khai local food Isan breakfast"`,
    },
  },

  vientiane: {
    image:    'https://upload.wikimedia.org/wikipedia/commons/d/db/Pha_That_Luang.jpg',
    imageAlt: 'Pha That Luang – nationales Symbol von Laos, Vientiane',
    intro: `
      <p>📅 <strong>Einstiegspunkt ab 16. August</strong> — nichts gebucht, Dauer flexibel, Empfehlung 1–2 Tage.</p>
      <p>Vientiane wirkt eher wie eine entspannte Kleinstadt als eine Hauptstadt — überschaubar, ohne Hektik, mit buddhistischen Tempeln, französischem Kolonialerbe und Mekong-Atmosphäre. Günstigstes Pflaster auf der ganzen Reise.</p>
      <p>🧭 <strong>Mögliche Stopps in Laos — Zeitfenster 16.–22. August (7 Tage):</strong> Nichts davon ist gebucht, auch der Rückflug ab Luang Prabang nicht — das war bisher nur die naheliegendste Annahme, weil von dort die Verbindungen weiter nach Vietnam am einfachsten sind. Fix ist eigentlich nur die Geografie: Die Zugstrecke aus Thailand endet hier in Vientiane, da kommt ihr an. Wo ihr Laos wieder verlasst, ist komplett offen.</p>
      <p><strong>Bewusst mehr Optionen aufgelistet als in 7 Tage passen</strong> — die Idee ist nicht, alles abzuklappern, sondern dass ihr vor Ort seht, was euch zieht, und spontan entscheidet. Gefällt's euch irgendwo besonders gut, bleibt einfach länger und lasst was anderes weg. Sortiert nach dem, was dich interessiert:</p>
      <div class="timeline-wrap" style="margin-bottom:14px">
        <table class="tl-table">
          <thead><tr><th>Ort</th><th>Fluss/Schwimmen</th><th>Wandern</th><th>Kultur</th><th>Entspannung</th></tr></thead>
          <tbody>
            <tr><td>🇱🇦 Vientiane</td><td>–</td><td>–</td><td>⭐⭐⭐</td><td>⭐</td></tr>
            <tr><td>🇱🇦 Vang Vieng</td><td>⭐⭐⭐</td><td>⭐⭐⭐</td><td>–</td><td>⭐</td></tr>
            <tr><td>🇱🇦 Luang Prabang</td><td>⭐⭐ (Kuang Si)</td><td>⭐</td><td>⭐⭐⭐</td><td>⭐⭐</td></tr>
            <tr><td>🇱🇦 Nong Khiaw</td><td>⭐⭐</td><td>⭐⭐⭐</td><td>⭐</td><td>⭐⭐</td></tr>
            <tr><td>🇱🇦 Muang Ngoi Neua</td><td>⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐ (Dorfleben)</td><td>⭐⭐⭐</td></tr>
            <tr><td>🇱🇦 Thakhek-Loop <em>(Alternative)</em></td><td>⭐⭐⭐ (Kong Lor)</td><td>–</td><td>–</td><td>–</td></tr>
            <tr><td>🇱🇦 4000 Islands <em>(Alternative)</em></td><td>⭐⭐⭐</td><td>–</td><td>⭐</td><td>⭐⭐⭐</td></tr>
          </tbody>
        </table>
      </div>
      <p>Vientiane, Vang Vieng und Luang Prabang liegen alle an der Zugstrecke und lassen sich gut kombinieren. Nong Khiaw und Muang Ngoi Neua hängen dran (nur per Bus/Boot ab Luang Prabang), sind aber eine Ecke ruhiger und wandern-lastiger. Der Thakhek-Loop und die 4000 Islands liegen geografisch im Süden, also komplett gegenläufig — die wären eher ein Ersatz für den Norden als eine Ergänzung dazu (Details und Zeitaufwand direkt in den jeweiligen Abschnitten).</p>
      <p>Grober Rechenweg für die Nord-Route: 7 Tage minus 1–2 An-/Abreisetage lässt realistisch ~5–6 Tage zum Verteilen auf so viele Orte, wie euch reizen. Merkt ihr vor Ort, dass euch eine Stadt mehr zieht — einfach umschichten, das ist ausdrücklich der Plan.</p>
    `,
    pins: [
      { lat: 17.9802, lng: 102.6359, name: 'Pha That Luang ⭐⭐',         desc: '45 m goldene Stupa · abends im Sonnenuntergang' },
      { lat: 17.9677, lng: 102.6261, name: 'Patuxai Monument ⭐',         desc: "Laos' Arc de Triomphe · bester Stadtblick · ~5.000 KIP" },
      { lat: 17.9625, lng: 102.6167, name: 'Wat Si Saket ⭐',             desc: 'Ältester Tempel 1818 · tausende Buddha-Figuren' },
      { lat: 17.9636, lng: 102.6297, name: 'COPE Visitor Center ⭐⭐',    desc: 'Clusterbomben-Museum · kostenlos · sehr bewegend' },
      { lat: 17.9675, lng: 102.6017, name: 'Mekong Riverside',            desc: 'Sonnenuntergang und lokale Atmosphäre' },
      { lat: 17.9675, lng: 102.6150, name: 'Ban Anou Night Market ⭐',    desc: 'Lokaler Streetfood-Markt · ab 5.000 KIP' },
      { lat: 17.9120, lng: 102.7543, name: 'Buddha Park / Xieng Khuan ⭐⭐', desc: '25 km außerhalb · gleicher Künstler wie Sala Kaew Ku' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Pha That Luang ⭐⭐</div>
    <div class="poi-desc">Das heiligste Bauwerk in ganz Laos und nationales Symbol des Landes — abgebildet auf Münzen, Staatsemblem, Flaggenhintergrund, überall. Eine goldene Stupa mit 45 m Höhe, erbaut 1566 auf früheren Fundamenten aus dem 3. Jahrhundert. Umgeben von hohen quadratischen Mauern mit Buddhafiguren in den Nischen. Von außen kostenlos, kleiner Eintritt für das Innere. <strong>Abends im Sonnenuntergang ist das Pha That Luang unglaublich</strong> — das Gold leuchtet intensiv orangefarben in der untergehenden Sonne. Unbedingt gegen 17–18 Uhr hingehen.</div>
    <span class="poi-meta">Außen gratis · innen kleine Gebühr · abends am schönsten!</span>
  </div>
  <div class="poi">
    <div class="poi-name">Patuxai Monument ⭐</div>
    <div class="poi-desc">Laos' eigener Arc de Triomphe, erbaut 1958–1968 aus Zementlieferungen, die die USA ursprünglich für den Bau des Flughafens gegeben hatten — die laotische Regierung verwendete sie lieber für dieses Monument. Die Tafel am Eingang nennt es ironisch "das Betonmonster, das Geld verschlingt". Trotzdem lohnt sich der Aufstieg: Von der Dachterrasse hat man den besten Überblick über die breite Lan Xang Avenue und Vientiane. Auf den Treppen gibt es kleine lokale Handwerksläden.</div>
    <span class="poi-meta">~5.000 KIP · täglich 8–17 Uhr</span>
  </div>
  <div class="poi">
    <div class="poi-name">Wat Si Saket ⭐</div>
    <div class="poi-desc">Der älteste noch erhaltene Tempel Vientianes, gebaut 1818 unter König Anouvong. Als die siamesischen Truppen 1828 Vientiane zerstörten, blieb Wat Si Saket als einziger Tempel unversehrt — möglicherweise weil er im siamesischen Stil gebaut war und deshalb verschont wurde. Berühmt für die Tausenden kleiner Buddha-Figuren in den Wandnischen der Kreuzgänge — alle Größen, alle Materialien, über Jahrhunderte hingestellt. Sehr ruhig, sehr wenig Touristen.</div>
    <span class="poi-meta">~10.000 KIP · täglich 8–12 + 13–16 Uhr</span>
  </div>
  <div class="poi">
    <div class="poi-name">COPE Visitor Center ⭐⭐</div>
    <div class="poi-desc">Eines der wichtigsten und bewegendsten Museen Südostasiens — <strong>kostenlos</strong> und absolut empfehlenswert. Laos ist das <strong>meistbombardierte Land der Welt pro Kopf</strong> (Vietnam-Krieg, 1964–1973): Die USA warfen 270 Millionen Clusterbomben ab — mehr Bomben als in ganz Europa im Zweiten Weltkrieg zusammen. <strong>80 Millionen davon explodierten nicht</strong> und liegen bis heute im Boden. Jährlich werden Menschen verstümmelt oder getötet — hauptsächlich Kinder, die die Bomblets für Spielzeug halten. COPE stellt Prothesen her und zeigt die Geschichte durch Fotos, Videos, Karten und persönliche Interviews mit Überlebenden. Sehr wichtige und nüchterne Perspektive auf die bis heute andauernden Folgen des Vietnamkriegs. Niemand der das gesehen hat, sieht Laos danach gleich.</div>
    <span class="poi-meta">Kostenlos · täglich 9–18 Uhr · Spendenbox annehmen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Buddha Park (Xieng Khuan) ⭐⭐</div>
    <div class="poi-desc">25 km außerhalb der Stadt, erreichbar mit Bus Linie 14 (ab Talat Sao, ~10.000 KIP) oder Tuk-Tuk (~$5–8 für Hin- und Rückfahrt). Ein riesiger Freiluftpark mit surrealen Hindu/Buddhist-Statuen auf einer Wiese direkt am Mekong. Gigantischer liegender Buddha (40 m!), Götter, Dämonen, kosmische Szenen — alles freiluft, ohne Erklärung, in der Landschaft verteilt. Derselbe Künstler-Mystiker Luang Pu Bunleua Sulilat hatte zuvor das Sala Kaew Ku in Nong Khai gebaut! Die beiden Parks gehören zusammen und ergänzen sich faszinierend.</div>
    <span class="poi-meta">~$3 Eintritt · Bus Linie 14 oder Tuk-Tuk ~$5–8</span>
  </div>
  <div class="poi">
    <div class="poi-name">Mekong Riverside</div>
    <div class="poi-desc">Abends entlang des Mekong schlendern und den Sonnenuntergang über dem Fluss genießen — Blick auf Thailand auf der anderen Seite. Lokale Bars und Restaurants direkt am Ufer, entspannte Atmosphäre. Im August hat der Mekong Hochwasser, der Fluss wirkt breiter und mächtiger als in der Trockenzeit.</div>
    <span class="poi-meta">Gratis · abends am besten · lokale Bars &amp; Restaurants</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Laotische Tempelarchitektur</div>
    <div class="poi-desc">Die Tempel Vientianes haben eine charakteristisch andere Ästhetik als Thai-Tempel: geschwungene mehrschichtige Dächer (sogenannte "Dok So Fa" Spitzen), die fast den Boden zu berühren scheinen, dezentere Vergoldung, ruhigere Proportionen. Besonders Wat Si Saket und die Stupa des Pha That Luang zeigen den eigenständigen laotischen Stil. Für Architektur- und Design-Interessierte lohnt sich der bewusste Vergleich mit den prunkvolleren Thai-Tempeln in Bangkok — subtile, aber deutliche Unterschiede.</div>
    <span class="poi-meta">Gratis zu betrachten · Wat Si Saket + Pha That Luang</span>
  </div>
  <div class="poi">
    <div class="poi-name">COPE als Ausstellungsdesign</div>
    <div class="poi-desc">COPE ist aus gestalterischer Sicht bemerkenswert durchdacht: Klare Informationsgrafiken, bewegende persönliche Geschichten in Wort und Bild, interaktive Elemente ohne Kitsch. Die Kuratorik schafft es, ein schwieriges und traumatisches Thema (Kriegsfolgen, Verstümmelung, Armut) in eine zugängliche, nicht-voyeuristische und respektvolle Ausstellung zu verwandeln. Das ist selbst gestalterisch interessant.</div>
    <span class="poi-meta">Kostenlos · COPE Visitor Center</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Khao Jee (Baguette-Sandwich) ⭐⭐</div>
    <div class="poi-desc">Das Streetfood-Highlight von Laos schlechthin — einzigartig in Südostasien. Frisch gebackenes, knuspriges Baguette (französisches Kolonialerbe!) mit Paté, Mayonnaise, frischem Gemüse, Koriander, Chili und manchmal Spiegelei oder Schinken. Wird morgens an Straßenständen auf dem Grill warm gemacht und frisch zusammengestellt. Vietnamesisch-laotisch-französisch in einem Happen. Der günstigste und beste Frühstückssnack auf der Reise.</div>
    <span class="poi-meta">~5.000–10.000 KIP (~25–50 Cent) · morgens · Straßenstände</span>
  </div>
  <div class="poi">
    <div class="poi-name">Khao Piak Sen</div>
    <div class="poi-desc">Laos' Version der Nudelsuppe zum Frühstück — dicke Reisnudeln in klarer Hühner- oder Schweinebrühe, mit frischen Kräutern, Limette, Chili und Bohnenkeim. Morgens überall erhältlich, sättigend und günstig. Das Standardfrühstück der Laoten.</div>
    <span class="poi-meta">~15.000 KIP (~75 Cent) · morgens · überall</span>
  </div>
  <div class="poi">
    <div class="poi-name">Larb ⭐</div>
    <div class="poi-desc">Das Nationalgericht von Laos (auch in Thailand bekannt, aber der Ursprung ist laotisch). Fein gehacktes Fleisch (Schwein, Hühnchen oder Fisch) mit frischer Minze, Frühlingszwiebeln, Zitronengras, geröstetem Reispulver und Limettensaft. Das Reispulver gibt eine nussige, leicht rauchige Textur. Scharf, frisch, komplex. In lokalen Restaurants bestellen — kein Touristenrestaurant nötig.</div>
    <span class="poi-meta">~20.000–30.000 KIP · lokale Restaurants</span>
  </div>
  <div class="poi">
    <div class="poi-name">Tam Mak Hoong</div>
    <div class="poi-desc">Laos' Version des grünen Papayasalats — schärfer und würziger als die Thai-Version, mit fermentierten Krabben (Pu Pla Ra) und Padaek (fermentierter Fischpaste) statt einfacher Fischsauce. Sehr intensiv und sehr lokal. An Straßenständen frisch gestampft, ~10.000 KIP.</div>
    <span class="poi-meta">~10.000 KIP · Straßenstände · frisch gestampft</span>
  </div>
  <div class="poi">
    <div class="poi-name">Beer Lao</div>
    <div class="poi-desc">Das Nationalbier von Laos — ernsthaft eines der besten Biere Südostasiens. Leicht, erfrischend, leicht malzig. ~10.000 KIP (~50 Cent) die große Flasche (640 ml). Überall erhältlich. Der Toast auf Laotisch ist "Nyok!" (Cheers). </div>
    <span class="poi-meta">~10.000 KIP/Flasche · überall</span>
  </div>
  <div class="poi">
    <div class="poi-name">Ban Anou Night Market ⭐</div>
    <div class="poi-desc">Lokaler Streetfood-Markt am Abend — kein Touristenmarkt, Einheimische essen hier. Grillstände mit Hühnchen, Schweinebauch, Fisch, dazu Larb, Papayasalat, Suppen. Günstigste und authentischste Abendessen-Option in Vientiane.</div>
    <span class="poi-meta">Ab 5.000 KIP/Gericht (~25 Cent) · abends · kein Touristenmarkt</span>
  </div>
  <div class="poi">
    <div class="poi-name">Lao-Lao</div>
    <div class="poi-desc">Lokaler Reiswhisky, in Dörfern selbst gebrannt — fast umsonst, sehr stark (oft 40–50%). Im Nachtmarkt probieren. Wird traditionell in Gesellschaft getrunken, manchmal aus einem gemeinsamen Topf mit langen Strohhalmen (Thip Khao).</div>
    <span class="poi-meta">~5.000 KIP · Nachtmarkt · sehr kräftig!</span>
  </div>
</div>`,

      'Geheimtipps': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Mönch-Chats am Sangha College</div>
    <div class="poi-desc">Am ersten Sonntag im Monat treffen sich Mönche des Sangha Colleges mit Touristen, um Englisch zu üben und Fragen über ihr Leben, ihren Glauben und ihren Alltag im Kloster zu beantworten. Völlig ungezwungen, offene Atmosphäre, echte Gespräche. Einzigartiges kulturelles Erlebnis. Gratis. Vorab prüfen ob die Veranstaltung im August stattfindet.</div>
    <span class="poi-meta">Gratis · 1. Sonntag im Monat · Sangha College</span>
  </div>
  <div class="poi">
    <div class="poi-name">Ban Chan Pottery Village</div>
    <div class="poi-desc">Kleines Töpferdorf auf der anderen Mekong-Seite (kurze Bootsfahrt, ~5.000 KIP). Traditionelle handgetöpferte Keramik in typisch laotischen Formen — große Tonkrüge, Vasen, Schalen. Ein echter Handwerksbetrieb ohne touristische Inszenierung. Gratis reinschauen. Kleine Stücke als Souvenir sehr günstig.</div>
    <span class="poi-meta">Gratis · Boot ~5.000 KIP · andere Mekong-Seite</span>
  </div>
</div>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>Jumbos (Shared Tuk-Tuks)</strong> — Günstigste Fortbewegung in der Stadt: Sammel-Tuk-Tuks auf festen Routen, ~10.000 KIP pro Fahrt. Einfach an der Straße winken und einsteigen.</li>
  <li><strong>Vientiane ist flach &amp; überschaubar</strong> — Viele Sehenswürdigkeiten liegen in Gehweite voneinander. Die Altstadt misst nur wenige Kilometer — ideal für Fußgänger.</li>
  <li><strong>Währung:</strong> Lao Kip (LAK). USD und Thai Baht werden fast überall akzeptiert, geben aber schlechtere Rate als Kip. ATMs in der Innenstadt, Gebühr ~20.000–30.000 KIP pro Abhebung mit ausländischer Karte — größere Beträge auf einmal abheben.</li>
  <li><strong>SIM / Wlan:</strong> Lao Telecom oder <strong>Unitel</strong> SIM günstig erhältlich — von Reisenden empfohlen wegen gutem Empfang auch außerhalb der Städte. Viele Cafés und Restaurants haben gutes Wlan.</li>
  <li><strong>Grobe Umrechnung:</strong> ~1 Baht ≈ 670 Kip, falls ihr noch Baht übrig habt und wechseln wollt (schwankt).</li>
  <li><strong>Weiter nach Vang Vieng:</strong> Hochgeschwindigkeitszug (Laos-China Railway) ab dem <strong>Vientiane Railway Station</strong> — der liegt ca. 17 km außerhalb der Innenstadt, plant ~30–40 Min. und ~30.000–50.000 KIP Taxi/Tuk-Tuk zusätzlich ein. Fahrzeit ~1,5 Stunden, Preis ~$5. Einlass zum Bahnsteig nur mit Ticket + Reisepass, Kontrolle wie am Flughafen.</li>
  <li>⚠️ <strong>Zugticket unbedingt vorab buchen</strong> — am besten über die App <strong>„LCR Ticket"</strong>, mind. 3–4 Tage im Voraus (sonst 12go.asia). Ein Reisepaar, das diese Strecke im Oktober 2024 ohne Vorabbuchung gefahren ist, musste auf die <strong>Business Class ausweichen — ca. 3× teurer</strong> als 2nd/1st Class, weil die günstigeren Klassen schon ausverkauft waren.</li>
</ul>`,

      'Suchbegriffe': `"Vientiane hidden gems local tips 2026"
"ທ່ອງທ່ຽວວຽງຈັນ ສະຖານທີ່ດີ" (Vientiane Sehenswürdigkeiten auf Laotisch)
"Vientiane budget street food local"
"COPE visitor center Vientiane"`,
    },
  },

  'vang-vieng': {
    image:    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/VientianeProvince_VangVieng9_tango7174.jpg/1280px-VientianeProvince_VangVieng9_tango7174.jpg',
    imageAlt: 'Karstberge am Nam Song Fluss, Vang Vieng, Laos',
    intro: `
      <p>📅 <strong>Optional</strong> — Empfehlung: 2–3 Tage zwischen dramatischen Karstfelsen am Nam Song Fluss.</p>
      <p>🏍️ <strong>Motorrad oder E-Bike mieten ist Pflicht</strong> (~4–8€/Tag) — ohne geht fast nichts. Die Lagunen und Höhlen liegen alle 8–17 km außerhalb der Stadt und sind nicht anders erreichbar.</p>
      <p>🌧️ <strong class="warn">August = Regenzeit:</strong> Die Lagunen können bräunlich statt türkis sein. Trotzdem schön — und deutlich weniger Touristen als in der Trockenzeit.</p>
    `,
    pins: [
      { lat: 18.9382, lng: 102.4141, name: 'Blue Lagoon 1',          desc: 'Bekannteste Lagune · Sprungplattform · ~50.000 KIP' },
      { lat: 18.9748, lng: 102.3834, name: 'Blue Lagoon 3 ⭐⭐',       desc: 'Geheimtipp · Rope Swing · Zipline · weniger Touristen' },
      { lat: 18.9684, lng: 102.3943, name: 'Blue Lagoon 4',           desc: 'Versteckteste Lagune · kaum Touristen' },
      { lat: 18.9127, lng: 102.4371, name: 'Tham Chang Cave',         desc: 'Zugänglichste Höhle · gut beleuchtet · Aussicht oben' },
      { lat: 18.9500, lng: 102.4050, name: 'Tham Phu Kham',           desc: 'Liegender Buddha in Höhle · neben Blue Lagoon 1' },
      { lat: 18.9209, lng: 102.4471, name: 'Nam Xay Viewpoint ⭐',     desc: 'Beliebtester Aufstieg · 360°-Karstblick' },
      { lat: 18.9229, lng: 102.4477, name: 'Vang Vieng Zentrum',      desc: 'Motorrad mieten · Markt · Baguette-Stände' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="acc-lbl">🛏️ Unterkunftstipp</div>
  <div class="poi">
    <div class="poi-name">Lisha (The Grand) Riverside Hotel</div>
    <div class="poi-desc">Von Reisenden empfohlen: VIP-Zimmer für 2 Personen ~1.400 Baht/Nacht inkl. Frühstücksbuffet (über trip.com/Agoda/Booking buchbar). Eigenes Bad mit Wanne, TV, Kühlschrank, Pool, direkt am Fluss. Zimmer etwas in die Jahre gekommen, aber die Flussaussicht auf die Karstberge ist sehr schön — abends Heißluftballons/Paramotoren über dem Fluss sichtbar. ⚠️ Privates Hotelzimmer, kein Hostel — ~18 €/Person/Nacht. Für reine Hostel-Budgets: Dorm-Betten in Vang Vieng ab ~3–6 $ (~3–5 €)/Nacht.</div>
    <span class="poi-meta">~1.400 Baht/Nacht (kein Hostel) · trip.com · Flussblick</span>
  </div>
  <div class="acc-lbl">💧 Blaue Lagunen</div>
  <div class="poi">
    <div class="poi-name">Blue Lagoon 1</div>
    <div class="poi-desc">Die bekannteste und am meisten besuchte Lagune — türkisblaues Wasser (in der Trockenzeit intensiver, im August möglicherweise bräunlicher), Sprungplattformen in verschiedenen Höhen (~5 m), Seilschaukel. Direkt daneben liegt <strong>Tham Phu Kham Höhle</strong> (120 m Aufstieg, liegender Buddha tief in der Höhle, Stalaktiten, Wände glitzern im Taschenlampen-Licht) — immer kombinieren. Früh morgens oder spätnachmittags gehen, mittags sehr voll. ⚠️ Zufahrtsstraße hat viele Schlaglöcher — vorsichtig fahren. Auf dem Ticket steht der Hinweis, Wertsachen selbst im Auge zu behalten. Direkt am Eingang: <strong>Eyung Pizza &amp; Coffee</strong> — nette Atmosphäre, Pizza nachmittags aber oft ausverkauft (dann Chicken Wings).</div>
    <span class="poi-meta">~50.000 KIP Eintritt · 8 km vom Zentrum · ~15 min</span>
  </div>
  <div class="poi">
    <div class="poi-name">Blue Lagoon 3 ⭐⭐</div>
    <div class="poi-desc">Geheimtipp unter den Lagunen und eindeutig die schönste Atmosphäre. Türkisblaues rechteckiges Becken unter einer bewaldeten Klippe. Rope Swing, Zipline, rustikale Bambusflöße. Daneben liegt eine zusätzliche kleine Höhle zum Erkunden. Deutlich weniger Touristen als Blue Lagoon 1 — entspannte Backpacker-Atmosphäre, kleines lokales Restaurant. Weiter draußen (17 km, ~35 min), daher weniger Besucherstrom.</div>
    <span class="poi-meta">17 km vom Zentrum · ~35 min · kleines Restaurant vor Ort</span>
  </div>
  <div class="poi">
    <div class="poi-name">Blue Lagoon 4</div>
    <div class="poi-desc">Die versteckteste und rustikalste der Lagunen — kaum Touristen, kein Restaurant vor Ort. Für alle, die wirklich Ruhe und Natur ohne Infrastruktur wollen. Snacks und Wasser mitbringen. Motorrad ist hier absolut notwendig — kein Minivan fährt dorthin.</div>
    <span class="poi-meta">15 km vom Zentrum · Snacks mitbringen · kein Restaurant</span>
  </div>
  <div class="poi">
    <div class="poi-name">Tham Phu Kham (Blue Lagoon 1 kombinieren)</div>
    <div class="poi-desc">Liegender goldener Buddha tief in einer Felshöhle, umgeben von Stalaktiten. Die Wände glitzern im Taschenlampen-Licht. Aufstieg zur Höhle ~120 m. Direkt neben Blue Lagoon 1 — immer zusammen besuchen. Taschenlampe mitbringen oder am Eingang leihen.</div>
    <span class="poi-meta">Zusammen mit Blue Lagoon 1 · Taschenlampe!</span>
  </div>
  <div class="acc-lbl">🦇 Höhlen</div>
  <div class="poi">
    <div class="poi-name">Tham Chang Cave</div>
    <div class="poi-desc">Die einfachste und zugänglichste Höhle in Vang Vieng — nur 2 km vom Zentrum. Gut beleuchtet, breite Gänge mit beeindruckenden Stalaktiten und Stalagmiten in allen Größen. Der Weg führt durch die Höhle hindurch und oben hinaus: Von der Terrasse hat man einen schönen Blick über das Nam-Song-Tal. Kleine Lagune unten zum Schwimmen. Ideal als erster Einstieg vor den weiter entfernten Lagunen.</div>
    <span class="poi-meta">~15.000 KIP · 2 km vom Zentrum · Aussicht oben!</span>
  </div>
  <div class="poi">
    <div class="poi-name">Tham Nam (Wasserhöhle)</div>
    <div class="poi-desc">Das ungewöhnlichste Höhlenerlebnis: Man zieht sich an einem Seil auf einem aufgeblasenen Schlauch durch eine dunkle Höhle mit unterirdischem Fluss. Im Dunkeln, mit Stirnlampe, Wasser um einen herum. <strong class="warn">Achtung: Nur in der Trockenzeit (Nov–Apr) zugänglich</strong> — im August ist zu viel Wasser im Fluss und die Höhle ist gesperrt. Trotzdem erwähnt, falls die Bedingungen im August ausnahmsweise passen.</div>
    <span class="poi-meta">14 km · NUR Trockenzeit Nov–Apr · im Aug. meist gesperrt!</span>
  </div>
  <div class="poi">
    <div class="poi-name">Tham Sang Dreieck (4 Höhlen)</div>
    <div class="poi-desc">14 km vom Zentrum: Vier Höhlen nah beieinander als Halbtagesausflug kombinierbar. <strong>Tham Sang</strong> (Elefantenhöhle — ein Stalaktit hat Elefantenform, heilig), <strong>Tham Hoi</strong>, <strong>Tham Loup</strong> und <strong>Tham Nam</strong> (Wasserhöhle, im August gesperrt). Ideal wenn man mehrere Höhlen effizient verbinden will. Am Eingang ("Tham None &amp; Angel Cave") hängt eine Übersichtskarte der Gegend mit <strong>Nam Taen Waterfall</strong>, Kajak-Strecken (5/10 km) und einer Trekking-Route (~15 km) — lohnt sich, vor Ort einen Blick draufzuwerfen.</div>
    <span class="poi-meta">14 km · Halbtagesausflug · 4 Höhlen kombiniert</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Karstlandschaft als Naturkunst</div>
    <div class="poi-desc">Vang Vieng liegt in einer der spektakulärsten Karstlandschaften Südostasiens — senkrecht aus der Ebene aufragende Kalksteinnadeln, von Dschungel bedeckt, spiegeln sich im Nam Song Fluss. Die Geometrie dieser Landschaft ist selbst ein ästhetisches Erlebnis. Beim Motorradfahren durch die Reisfelder und Dörfer mit diesen Felsen im Hintergrund versteht man, warum Vang Vieng seit Jahrzehnten Fotografen, Künstler und Traveller anzieht.</div>
    <span class="poi-meta">Gratis · überall sichtbar · morgens bestes Licht</span>
  </div>
  <div class="poi">
    <div class="poi-name">Dörfer und Reisfelder per Motorrad</div>
    <div class="poi-desc">Das Beste an Vang Vieng ist nicht in einem Reiseführer aufgelistet: einfach auf der Straße abbiegen, Feldwege durch Reisfelder folgen, in einem Dorf halten. Lokale Kinder, Fischer am Fluss, Familien vor ihren Häusern. Die Karstfelsen als Kulisse. Kein Programm, kein Ziel — das ist das eigentliche Vang Vieng. Motorrad Pflicht dafür.</div>
    <span class="poi-meta">Motorrad mieten ~4–8€/Tag · keine Route nötig</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Baguette-Sandwich ⭐</div>
    <div class="poi-desc">Auch in Vang Vieng überall und gleich gut wie in Vientiane — frisches Baguette mit Paté, Gemüse, Chili. Morgens an Straßenständen. Billigstes und bestes Frühstück vor dem Ausflug zu den Lagunen.</div>
    <span class="poi-meta">~5.000–10.000 KIP · morgens · Hauptstraße</span>
  </div>
  <div class="poi">
    <div class="poi-name">Or Lam</div>
    <div class="poi-desc">Laotischer Gemüseeintopf mit geräuchertem Fleisch, Auberginen und frischen Kräutern. In lokalen Restaurants günstig und sättigend. Gut nach einem langen Tag auf dem Motorrad.</div>
    <span class="poi-meta">~20.000–30.000 KIP · lokale Restaurants</span>
  </div>
  <div class="poi">
    <div class="poi-name">Ping Kai (Gegrilltes Hühnchen)</div>
    <div class="poi-desc">Hühnchen am Spieß, langsam über Holzkohle gegrillt, serviert mit Klebreis und einer würzigen Chili-Sauce. An Straßenrändern und auf Märkten überall erhältlich. Sehr günstig und sehr lokal.</div>
    <span class="poi-meta">~20.000 KIP · Straßenstände</span>
  </div>
  <div class="poi">
    <div class="poi-name">Fruchtsäfte &amp; Shakes ⭐</div>
    <div class="poi-desc">Vang Vieng ist bekannt für günstige frische Smoothies und Säfte aller Art. Nach einem heißen Tag an der Lagune ist das ideal. Mango, Ananas, Passionsfrucht, Wassermelone — alles frisch gemixt.</div>
    <span class="poi-meta">~15.000 KIP · überall</span>
  </div>
  <div class="poi">
    <div class="poi-name">Westliches Essen / Backpacker-Cafés</div>
    <div class="poi-desc">Vang Vieng hat viele Backpacker-Cafés mit günstigen westlichen Gerichten: Burger, Falafel, Pasta, Pancakes. Nach zwei Tagen intensiver Lao-Küche manchmal willkommen. Preise trotzdem sehr günstig (~30.000–50.000 KIP).</div>
    <span class="poi-meta">~30.000–50.000 KIP · Hauptstraße im Zentrum</span>
  </div>
  <div class="poi">
    <div class="poi-name">Mr. Mo Restaurant ⭐⭐</div>
    <div class="poi-desc">Von Einheimischen empfohlener Geheimtipp, kein Touristenladen. Nudelsuppe, Laab (Fleischsalat) und Khao Moo Krob (knuspriger Reis mit Schweinefleisch) — alles hausgemacht. Reisende, die ihn erst am letzten Tag entdeckt haben, waren sich einig: unbedingt vorher hin.</div>
    <span class="poi-meta">Lokaler Geheimtipp · Nudelsuppe, Laab, Khao Moo Krob</span>
  </div>
  <div class="poi">
    <div class="poi-name">Café mit Bergblick</div>
    <div class="poi-desc">Kleines Café ca. 1,3 km vom Zentrum mit Blick auf die Karstberge, sehr freundlicher Besitzer. Am besten morgens oder abends hin — mittags brennt die Sonne zu stark auf der Terrasse.</div>
    <span class="poi-meta">1,3 km vom Zentrum · morgens/abends besser</span>
  </div>
  <div class="poi">
    <div class="poi-name">Phu Mai Café</div>
    <div class="poi-desc">Weiterer Café-Name, der bei Reisenden als fester Stopp in Vang Vieng auftauchte, ohne dass mehr Details überliefert sind — einfach mal nachschauen, ob's auf dem Weg liegt.</div>
    <span class="poi-meta">Name notiert · Details unbekannt</span>
  </div>
</div>`,

      'Geheimtipps': `
<div class="poi-list">
  <div class="acc-lbl">🏔️ Aussichtspunkte</div>
  <div class="poi">
    <div class="poi-name">Nam Xay Viewpoint ⭐</div>
    <div class="poi-desc">Der beliebteste Aufstieg in Vang Vieng. Geöffnet 5:00–17:30 Uhr, Eintritt ~20.000 KIP/Person, Startpunkt 7,6 km vom Zentrum (~20 min Roller, gleiche Straße wie Blue Lagoon 1). Steiler Climb von ~30–40 Minuten über Stufen und Felspfade (~350–390 m), für untrainierte Personen wirklich anstrengend. Oben: 360°-Blick über die gesamte Karstlandschaft, Reisfelder, den Nam Song Fluss und das Stadtgebiet. Kleiner Getränkeladen am Parkplatz — trotzdem eigenes Wasser mitbringen. Früh morgens gehen — vor 8 Uhr bist du fast allein, gegen 9 Uhr kommen die ersten Gruppen.</div>
    <span class="poi-meta">~20.000 KIP · 5:00–17:30 Uhr · ~30–40 min Aufstieg · Wasser mitnehmen!</span>
  </div>
  <div class="acc-lbl">🚣 Aktivitäten</div>
  <div class="poi">
    <div class="poi-name">Tubing auf dem Nam Song River</div>
    <div class="poi-desc">Auf einem aufgeblasenen Reifen den Nam Song Fluss langsam hinuntertreiben — früher berüchtigte Partymeile, heute chillig und entspannt. Im August hat der Fluss mehr Wasser und die Strömung ist stärker. Günstig (~60.000 KIP inkl. Leihring und Rücktransport).</div>
    <span class="poi-meta">~60.000 KIP · im August stärkere Strömung</span>
  </div>
  <div class="poi">
    <div class="poi-name">Kajak ab der Namsong Blue Bridge ⭐</div>
    <div class="poi-desc">Auch ohne organisierte Tour spontan machbar: Startpunkt an der blauen Brücke (Sapan Fah/Namsong Blue Bridge), ~150.000 KIP/Person, Strecke ca. 10 km. Spätestens bis 17 Uhr dort ankommen — danach sind je nach Andrang keine Boote mehr verfügbar. Unsichere Paddler bekommen Unterstützung, ein Guide begleitet im eigenen Boot. Strömung streckenweise wechselhaft.</div>
    <span class="poi-meta">~150.000 KIP · 10 km · spätestens 17 Uhr starten</span>
  </div>
  <div class="poi">
    <div class="poi-name">Hot Air Balloon ⭐ (optional)</div>
    <div class="poi-desc">Weltgünstigster Heißluftballon über Karstbergen — ~$90 pro Person bei Sonnenaufgang. Für Backpacker-Budget teuer, aber angeblich absolut unvergesslich: Die Karstnadeln aus der Luft, der Nebel in den Tälern, die Stille. Nicht billig, aber ein echtes Erlebnis. Buchung im Zentrum oder beim Hostel.</div>
    <span class="poi-meta">~$90 · Sonnenaufgang · Buchung beim Hostel</span>
  </div>
  <div class="poi">
    <div class="poi-name">Motorradtour durch Dörfer</div>
    <div class="poi-desc">Keine feste Route — einfach fahren. Westseite des Flusses: ruhigere Straßen, weniger Touristen, Dörfer mit traditionellen Holzhäusern. Feldwege zu verlassenen Lagunen, Reisfelder im August leuchtend grün. Das ist das Herz von Vang Vieng — nicht die bekannten Spots, sondern was dazwischen liegt.</div>
    <span class="poi-meta">Motorrad mieten · keine Route · einfach abbiegen</span>
  </div>
</div>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>Motorrad mieten</strong> — Am besten direkt beim Hostel oder an einer der vielen Verleihstationen auf der Hauptstraße. Automatik für ~4€/Tag, Halbautomatik für ~5–8€ (~150.000–170.000 KIP/24h). Als Pfand wird meist Reisepass oder Personalausweis einbehalten. Führerschein wird nicht kontrolliert, aber Helm immer tragen. E-Bikes als Alternative für kürzere Strecken (~3€/Tag).</li>
  <li><strong>Taschenlampe mitbringen</strong> — Für alle Höhlen absolut notwendig. Entweder eigene Stirnlampe oder am Eingang leihen (~10.000 KIP) — eigene ist besser und heller.</li>
  <li><strong>Wäsche waschen:</strong> "Champa Laundry" wurde von Reisenden als Waschsalon-Stopp genutzt — praktisch, falls der Rucksack nach der ersten Woche eine Auffrischung braucht.</li>
  <li><strong>Früh los zu den Lagunen</strong> — Vor 9 Uhr starten. Mittags (11–14 Uhr) sind Blue Lagoon 1 und Nam Xay extrem voll. Frühzeitig zurück wenn Regen droht — Feldwege können aufweichen.</li>
  <li><strong>Regenzeit-Hinweis August</strong> — Morgens oft schönes Wetter, Regen häufig nachmittags. Frühzeitig aufbrechen, nachmittags zurück oder im Café warten. Tham Nam Höhle ist im August meist gesperrt (Wasserstand).</li>
  <li><strong>Bargeld</strong> — Wenige ATMs in Vang Vieng, Gebühren hoch. In Vientiane genug Kip abheben bevor du fährst. Lagunen-Eintritte nur bar.</li>
  <li><strong>Bahnhof-Transfer:</strong> ~5,2 km außerhalb, ~15 min. Geteiltes Songthaew ~40.000 KIP/Person, privat gechartert ~130.000 KIP (verhandeln!). Alternative: App <strong>inDriver</strong> — Preis vorher fest vereinbart, oft bequemer.</li>
  <li>⚠️ <strong>Preise verhandeln</strong>, wo es keine Festpreise gibt (Songthaews, Charter-Fahrten) — mehrere Reiseberichte erwähnen unabsichtlich überteuerte Fahrten genau in dieser Gegend.</li>
  <li><strong>Weiter nach Luang Prabang:</strong> Hochgeschwindigkeitszug, ~2h, ~$8. Bahnhof ist außerhalb der Stadt — Tuk-Tuk dorthin ~30.000 KIP. <strong>Ticket vorab per LCR-Ticket-App buchen</strong> (mind. 3–4 Tage im Voraus) — sonst Gefahr, nur noch teure Business Class zu bekommen.</li>
</ul>`,

      'Suchbegriffe': `"Vang Vieng blue lagoon guide 2026"
"Vang Vieng hidden gems motorbike"
"Vang Vieng caves budget tips"
"Vang Vieng less touristy spots local"`,
    },
  },

  'luang-prabang': {
    image:    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Kuang_Si_waterfalls_in_Luang_Prabang%2C_Laos.jpg/1280px-Kuang_Si_waterfalls_in_Luang_Prabang%2C_Laos.jpg',
    imageAlt: 'Kuang Si Wasserfälle bei Luang Prabang, Laos',
    intro: `
      <p>📅 <strong>Wahrscheinlichster Ausstieg</strong> (nichts gebucht, beste Flüge weiter nach Vietnam) — Empfehlung: 2–3 Tage in der schönsten Stadt Laos.</p>
      <p>🏛️ <strong>UNESCO-Weltkulturerbe</strong> — Luang Prabang ist die besterhaltene buddhistische Stadt Südostasiens: Mönche, Wasserfälle, Kolonialarchitektur, Mekong. Die Altstadt auf der Halbinsel ist kompakt und zu Fuß erlebbar.</p>
      <p>🌧️ <strong class="warn">August = Regenzeit:</strong> Kuang Si Wasserfälle führen mehr Wasser (mächtiger!), Farbe kann bräunlicher sein. Tad Sae bei sehr viel Regen evtl. gesperrt. Früh morgens starten.</p>
    `,
    pins: [
      { lat: 19.8910, lng: 102.1355, name: 'Almosenzeremonie ⭐⭐⭐',    desc: 'ab 5:30 Uhr · Nebenstraßen nutzen · respektvoll!' },
      { lat: 19.8961, lng: 102.1347, name: 'Wat Xieng Thong ⭐⭐',       desc: 'Schönster Tempel · Gold-Mosaik · 16. Jhdt.' },
      { lat: 19.8862, lng: 102.1376, name: 'Mount Phousi ⭐',           desc: '328 Stufen · goldener Stupa · Sonnenuntergangs-Blick' },
      { lat: 19.8870, lng: 102.1371, name: 'Royal Palace Museum',       desc: 'Ehem. Königspalast · Phra Bang Buddha · ~30.000 KIP' },
      { lat: 19.8877, lng: 102.1330, name: 'TAEC ⭐⭐',                  desc: 'Museum ethnische Minderheiten · sehr gut kuratiert' },
      { lat: 19.7703, lng: 101.9976, name: 'Kuang Si Wasserfälle ⭐⭐⭐', desc: '30 km südlich · türkise Terrassen · Schwimmen' },
      { lat: 20.1072, lng: 102.1088, name: 'Pak Ou Höhlen',             desc: '2h Bootsfahrt · 6.000 Buddha-Figuren' },
      { lat: 19.8856, lng: 102.1369, name: 'Nachtmarkt + Morgenmarkt ⭐', desc: 'Abends Handwerk &amp; Streetfood · morgens Phosi Market' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="acc-lbl">🛏️ Unterkunftstipp</div>
  <div class="poi">
    <div class="poi-name">Sokview Residence ⭐⭐</div>
    <div class="poi-desc">Neu eröffnete Unterkunft direkt am Mekong. Deluxe River View Zimmer ~1.600 Baht/Nacht (trip.com/Agoda/Booking), komplett neu ausgestattet (Bad mit Wanne, Waschmaschine, Kühlschrank, Sofa/Netflix, Balkon zum Sonnenuntergang). Kostenlose Leihfahrräder, 2,5 km / ~6 min zum Nachtmarkt. Besitzer kümmert sich persönlich und gibt gute Vor-Ort-Tipps. ⚠️ Privates Hotelzimmer, kein Hostel — ~21 €/Person/Nacht. Für reine Hostel-Budgets: Dorm-Betten in Luang Prabang ab ~3 $ (~3 €)/Nacht.</div>
    <span class="poi-meta">~1.600 Baht/Nacht (kein Hostel) · trip.com · Mekong-Blick</span>
  </div>
  <div class="acc-lbl">🏛️ Sehenswürdigkeiten</div>
  <div class="poi">
    <div class="poi-name">Almosenzeremonie (Tak Bat) ⭐⭐⭐</div>
    <div class="poi-desc">Das ikonischste Erlebnis in Luang Prabang. Jeden Morgen ab ca. <strong>5:30 Uhr</strong> ziehen Hunderte Mönche in leuchtenden Safranroben schweigend durch die Altstadtstraßen und nehmen von knienden Einheimischen Klebreis entgegen. Jahrhunderte alte Tradition — kein Touristenevent, sondern echte religiöse Praxis die täglich stattfindet.</div>
    <span class="poi-meta">Ab 5:30 Uhr · täglich · keine Reservierung nötig</span>
  </div>
  <div class="city-intro" style="margin:0 0 8px">
    <strong>⚠️ Verhaltensregeln — BITTE EINHALTEN</strong>
    <p>• <strong>Respektvoller Abstand</strong> — mindestens 3–4 Meter zu den Mönchen. Nicht in die Zeremonie hineindrängen.</p>
    <p>• <strong>Kein Blitz</strong>, kein lautes Reden, kein Telefonieren. Kamera diskret und auf lautlos.</p>
    <p>• <strong>Schultern und Knie bedeckt</strong> — am besten Sarong oder Sinh umwickeln.</p>
    <p>• <strong>Geh auf Nebenstraßen</strong> — z. B. rund um <em>Wat Sensoukharam</em>. Die Hauptstraße Sakkaline ist von Busgruppen überfüllt und die Zeremonie wird dort zur Show. Auf den Nebenstraßen erlebst du sie authentisch.</p>
    <p>• Wenn lokale Frauen anbieten, für dich Reis zu kaufen um ihn den Mönchen zu geben — das ist legitim und unterstützt sie. Annehmen wenn du mitmachen möchtest.</p>
  </div>
  <div class="poi">
    <div class="poi-name">Kuang Si Wasserfälle ⭐⭐⭐</div>
    <div class="poi-desc">Das absolute Naturhighlight und eines der schönsten Naturwunder Südostasiens. 30 km südlich von Luang Prabang, mehrstufiger Wasserfall durch Dschungel in türkisfarbene Kalksteinterrassen (Travertin). Schwimmen in den Becken möglich! Auf dem Gelände befindet sich auch eine <strong>Bärenschutzstation (Free the Bears)</strong> mit Sonnenbären — lohnt sich. August: Mehr Wasser (mächtiger!), aber die Farbe kann bräunlich sein statt türkis. Trotzdem beeindruckend. <strong>Früh morgens</strong> (8–9 Uhr) — mittags bis zu 200+ Besucher gleichzeitig. ⚠️ Genug Zeitpuffer einplanen: Ein Reisepaar musste den Ausflug wegen einer Reifenpanne kurzfristig canceln — bei 30 km einfacher Strecke lieber nicht auf den letzten Nachmittag legen.</div>
    <span class="poi-meta">~$3 Eintritt · früh morgens! · Tuk-Tuk ~$4 geteilt · Bärenschutzstation</span>
  </div>
  <div class="poi">
    <div class="poi-name">Wat Xieng Thong ⭐⭐</div>
    <div class="poi-desc">Der bedeutendste und schönste Tempel Luang Prabangs, erbaut 1560 unter König Setthathirath. Charakteristisch: die mehrfach abgestuften, geschwungenen Dächer die fast den Boden berühren — "wie eine Glucke die ihre Küken schützt", sagt die lokale Überlieferung. Außenwände mit farbigen Glasmosaiken (Lebensbaum), Innenräume mit vergoldeten Wandmalereien. Abends weniger Besucher, schöneres Licht. Beliebter Fotospot: das goldverzierte Fenster im Eingangsbereich. Rauchverbot im gesamten Tempelbereich. Liegt ca. 1,6 km vom Nachtmarkt, ~5 min mit dem Roller.</div>
    <span class="poi-meta">~30.000 KIP (Preise ziehen an) · täglich 8–17 Uhr · nördlichste Spitze der Halbinsel</span>
  </div>
  <div class="poi">
    <div class="poi-name">Mount Phousi ⭐</div>
    <div class="poi-desc">Hügel mitten in der Altstadt, 328 Stufen hinauf (von der Sakkaline-Seite oder der That Chomsi-Seite). Oben: goldener Stupa Chomsi und 360°-Blick über Mekong, Nam Khan, Dschungel und die Altstadt im Abendlicht. Sonnenuntergang ist der beste Zeitpunkt — viele Locals kommen dann ebenfalls, wird von mehreren Reisenden als absolutes Tages-Highlight in LP beschrieben. Lass dir ~20–30 min für den Aufstieg.</div>
    <span class="poi-meta">~30.000 KIP · Sonnenuntergang ideal · ~20–30 min Aufstieg</span>
  </div>
  <div class="poi">
    <div class="poi-name">Royal Palace Museum (Haw Kham)</div>
    <div class="poi-desc">Ehemaliger Königspalast der laotischen Monarchie, bis zur kommunistischen Übernahme 1975 bewohnt. Französisch-laotische Architektur aus dem frühen 20. Jahrhundert. Ausgestellt: Staatsgeschenke aus aller Welt (u.a. ein Stück Mondgestein von Nixon), historische Karten und Fotos, und der heilige goldene <strong>Phra Bang Buddha</strong> — die ikonische Figur nach der die Stadt benannt ist. Kleiderordnung streng.</div>
    <span class="poi-meta">~30.000 KIP · Schultern &amp; Knie bedeckt · Foto im Inneren verboten</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Traditional Arts &amp; Ethnology Centre (TAEC) ⭐⭐</div>
    <div class="poi-desc">Kleines, aber sehr sorgfältig kuratiertes Museum für Laos' ethnische Minderheiten — über 100 Volksgruppen leben in Laos, die meisten kaum dokumentiert. Traditionelle Kostüme (Hmong, Akha, Tai Lü), Ritualarbeiten, Schmuck, Haushaltsgeräte. Jeder Gegenstand mit ausführlicher Geschichte und Kontext erklärt — kein statisches Völkerkundemuseum sondern lebendige Dokumentation. Ethischer Shop mit hochwertigen Handwerksartikeln direkt von Gemeinschaften. Als Design/Kunst-Interessierter das beste Museum in LP.</div>
    <span class="poi-meta">~$3 · Di–So 9–18 Uhr · Altstadt Luang Prabang</span>
  </div>
  <div class="poi">
    <div class="poi-name">Ock Pop Tok Living Crafts Centre</div>
    <div class="poi-desc">Traditionelle Weberei direkt am Mekong. Man kann zuschauen wie traditionelle Seidentextilien auf Handwebstühlen gewebt werden — komplexe Muster aus Hmong- und Lao-Traditionen. Kurse buchbar (halber Tag oder ganzer Tag). Gratis reinschauen und zuschauen. Shop mit hochwertigen ethisch produzierten Textilien. Für Design-Interessierte sehr inspirierend — die Musterkomplexität ist beeindruckend.</div>
    <span class="poi-meta">Gratis reinschauen · Kurse buchbar · Mekong-Ufer</span>
  </div>
  <div class="poi">
    <div class="poi-name">Ban Chan Pottery Village ⭐</div>
    <div class="poi-desc">Kleines Töpferdorf auf der anderen Mekong-Seite, per kleinem Fischerboot erreichbar (~5.000 KIP für die Überfahrt — das Boot und die Flussüberquerung sind Teil des Erlebnisses). Traditionelle handgetöpferte Keramik in typisch laotischen Formen: Krüge, Schalen, Vasen. Echter Handwerksbetrieb ohne touristische Inszenierung — die Töpfer arbeiten einfach weiter. Gratis Besuch, günstige Souvenirs direkt vom Hersteller.</div>
    <span class="poi-meta">Gratis · Fischerboot ~5.000 KIP · andere Mekong-Seite</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Or Lam ⭐⭐</div>
    <div class="poi-desc">DAS Gericht von Luang Prabang — nirgendwo sonst in Laos so zu finden und nicht einfach woanders nachzumachen. Dicker, komplexer Eintopf mit geräuchertem Büffelfleisch (oder Hühnchen), Auberginen, dem charakteristischen laotischen Pfeffer (sehr aromatisch, leicht betäubend auf der Zunge), frischen Kräutern und Chili. Einzigartig komplexe Aromen — eine Klasse für sich. In lokalen Restaurants bestellen, nicht in Touristenrestaurants.</div>
    <span class="poi-meta">~30.000–50.000 KIP · lokale Restaurants · Luang Prabang-Spezialität</span>
  </div>
  <div class="poi">
    <div class="poi-name">Khao Nom Kok</div>
    <div class="poi-desc">Mini-Kokosreis-Pancakes, direkt vom Grill — süß, leicht knusprig außen, weich innen. Morgens und nachmittags an Straßenständen frisch gemacht. Sehr günstig, sehr lecker, sehr lokal.</div>
    <span class="poi-meta">~5.000–10.000 KIP · Straßenstände · morgens</span>
  </div>
  <div class="poi">
    <div class="poi-name">Mok Pa ⭐</div>
    <div class="poi-desc">Fisch (meist Mekong-Fisch) in einem Bananenblatt gedämpft mit Dill, Lemongrass, Koriander und Chili. Das Bananenblatt gibt beim Dämpfen ein subtiles Aroma ab. Zartes, aromatisches Gericht — typisch laotisch und sehr anders als alles was man woanders essen kann.</div>
    <span class="poi-meta">~25.000–40.000 KIP · lokale Restaurants</span>
  </div>
  <div class="poi">
    <div class="poi-name">Kaipen</div>
    <div class="poi-desc">Getrocknete Mekong-Flusssalat-Algen (Kaipen), frittiert mit Sesam und Knoblauch. Klingt seltsam, schmeckt großartig — knusprig, salzig, nussig. Als Snack oder Vorspeise überall erhältlich. Sehr typisch für LP und die Mekong-Region.</div>
    <span class="poi-meta">~10.000 KIP · Snack · überall</span>
  </div>
  <div class="poi">
    <div class="poi-name">Tam Som</div>
    <div class="poi-desc">Luang Prabangs mildere Version des Papayasalats — mit getrockneten Tomaten statt fermentierter Krabbenpaste. Weniger scharf als die Vientiane-Version, milder und etwas süßlicher. Der Unterschied zwischen Vang Vieng, Vientiane und LP ist deutlich schmeckbar.</div>
    <span class="poi-meta">~10.000–15.000 KIP · Straßenstände</span>
  </div>
  <div class="poi">
    <div class="poi-name">Baguette morgens</div>
    <div class="poi-desc">Französisches Kolonialerbe, in LP besonders gut. Mit Paté, Schokolade oder Butter — ideal als schnelles Frühstück vor der Almosenzeremonie (5:30 Uhr) oder dem Morgenmarkt.</div>
    <span class="poi-meta">~5.000 KIP · morgens überall</span>
  </div>
</div>`,

      'Geheimtipps': `
<div class="poi-list">
  <div class="acc-lbl">🌊 Natur</div>
  <div class="poi">
    <div class="poi-name">Tad Sae Wasserfall ⭐</div>
    <div class="poi-desc">Weniger bekannte, aber wunderschöne Alternative zu Kuang Si. Nur per Longtail-Boot über den Nam Khan erreichbar (~15.000 KIP pro Richtung — die Bootsfahrt durch den engen Fluss ist Teil des Erlebnisses!). Jadegrüne Travertin-Pools, wenige Besucher. <strong>Im August tatsächlich Hochsaison für Tad Sae</strong> — da mehr Wasser aus dem Regen. Aber bei sehr starkem Regen kann er gesperrt sein (Wasserstand zu hoch). Vorab beim Hostel nachfragen.</div>
    <span class="poi-meta">Boot ~15.000 KIP · im Aug. viel Wasser · vorab Status prüfen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Pak Ou Höhlen</div>
    <div class="poi-desc">2-stündige Bootsfahrt mekongaufwärts durch das breite Mekong-Tal mit Dschungelufern — die Fahrt selbst ist schon das Erlebnis. Zwei Höhlen an einer Felswand: Tham Ting (unten, Tageslicht) und Tham Phum (oben, mit Taschenlampe). Über 6.000 Buddha-Figuren aller Größen und Materialien, die lokale Pilger über viele Jahrhunderte hingestellt haben. Spirituelle Stimmung, kaum erklärt, man muss selbst spüren.</div>
    <span class="poi-meta">~$10 gesamt (Boot + Eintritt) · 2h Bootsfahrt mekongaufwärts</span>
  </div>
  <div class="acc-lbl">🛍️ Märkte &amp; Abend</div>
  <div class="poi">
    <div class="poi-name">Nachtmarkt (Hauptstraße) ⭐</div>
    <div class="poi-desc">Jeden Abend verwandelt sich die Hauptstraße Sisavangvong in einen langen Kunsthandwerksmarkt: Hmong-Textilien mit komplexen Stickmustern, Batik, Silberschmuck, geflochtene Körbe, Laotenseiden. Qualität variiert stark — hochwertiges neben Massenware. Schlendern kostet nichts, Kaufentscheidungen nie unter Druck treffen. Direkt daneben die Streetfood-Gasse.</div>
    <span class="poi-meta">Täglich abends · Hauptstraße Sisavangvong · gratis schlendern</span>
  </div>
  <div class="poi">
    <div class="poi-name">Streetfood-Gasse im Nachtmarkt ⭐</div>
    <div class="poi-desc">Neben dem Handwerksmarkt: Eine eigene Gasse mit Büffet-Essensständen. Du nimmst dir einen Teller und belädst ihn selbst an verschiedenen Ständen — Reisnudeln, Curries, gegrilltes Gemüse, Larb, Suppen, Salate, Desserts. Preis nach Gewicht oder Pauschal ~15.000 KIP (~75 Cent). Die günstigste und vielfältigste Abendessen-Option in Luang Prabang.</div>
    <span class="poi-meta">~15.000 KIP · Büffet-System · neben Nachtmarkt</span>
  </div>
  <div class="poi">
    <div class="poi-name">Morgenmarkt (Phosi Market) ⭐</div>
    <div class="poi-desc">Früh morgens (6–8 Uhr) kaufen lokale Einheimische hier ein — kein Touristenmarkt. Frischer Mekong-Fisch (noch lebend), schwarze Hühner, Heuschrecken und Grillen, Palmblätter, getrocknete Kräuter, Pilze. Sehr lokal, sehr authentisch, manchmal herausfordernd für ungeübte Nasen. Gratis reinschauen — wichtig ist Zurückhaltung und Respekt.</div>
    <span class="poi-meta">6–8 Uhr morgens · lokal · gratis</span>
  </div>
  <div class="poi">
    <div class="poi-name">Bamboo Garden Restaurant ⭐</div>
    <div class="poi-desc">TripAdvisor "Travellers' Choice"-Award, gutes Lao/Thai-Essen (Reis, Larb, Suppe, gebratenes Gemüse), WiFi vorhanden. Solide, mehrfach bestätigte Empfehlung von Reisenden.</div>
    <span class="poi-meta">TripAdvisor Travellers' Choice</span>
  </div>
  <div class="poi">
    <div class="poi-name">Formula B ⭐</div>
    <div class="poi-desc">Vintage-Café in einem hübschen Kolonialgebäude, Milchshakes/Frappés, Deko mit alten Schallplatten und Buddha-Statuen. Besonderes Ambiente, gut für eine Pause in der Altstadt.</div>
    <span class="poi-meta">Vintage-Café · Shakes/Frappés</span>
  </div>
</div>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>Früh aufstehen zahlt sich aus:</strong> Almosenzeremonie 5:30h, Morgenmarkt 6–8h, Kuang Si früh morgens (8–9 Uhr) — drei Gründe früh aufzustehen. LP-Abende sind dafür entspannt.</li>
  <li><strong>Tuk-Tuk</strong> für kurze Strecken innerhalb LP: ~20.000–30.000 KIP. Nach Kuang Si: ~300.000 KIP Hin- und Rückfahrt alleine — besser mit anderen Reisenden teilen oder Minivan nehmen (~$4 geteilt). Morgens am Nachtmarkt Mitfahrer suchen.</li>
  <li><strong>Motorrad mieten</strong> (~80.000–150.000 KIP/Tag, viele Verleihstationen rund um den Nachtmarkt) für maximale Unabhängigkeit — besonders für Tad Sae und Erkundungen jenseits der Altstadt sinnvoll. ⚠️ Straßen können Schlaglöcher haben — ein Reisebericht erwähnt genau hier eine Reifenpanne, also lieber vorsichtig fahren und Zeitpuffer für Ausflüge einplanen.</li>
  <li><strong>Cash-Laos:</strong> Luang Prabang läuft auf Bargeld. ATMs in der Altstadt, Gebühr ~20.000–30.000 KIP pro Abhebung mit ausländischer Karte. Größere Beträge auf einmal abheben.</li>
  <li><strong>Weiter nach Da Nang:</strong> Flug von Luang Prabang International (LPQ). Meist via Bangkok (Air Asia, ~1,5h) oder via Hanoi. Auf Google Flights oder Skyscanner checken — frühzeitig buchen!</li>
  <li><strong>Kleidung:</strong> Für Tempel (Wat Xieng Thong, Royal Palace) Schultern und Knie bedecken. Leichter Schal oder Sarong immer im Rucksack ist praktisch.</li>
</ul>`,

      'Suchbegriffe': `"Luang Prabang hidden gems local tips 2026"
"Luang Prabang alms ceremony respectful tips"
"ທ່ອງທ່ຽວຫຼວງພະບາງ ສະຖານທີ່ດີ" (Luang Prabang auf Laotisch)
"Kuang Si falls tips early morning"
"Tad Sae waterfall Luang Prabang"`,
    },
  },

  'nong-khiaw': {
    image:    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Nam_ou_1.jpg/1280px-Nam_ou_1.jpg',
    imageAlt: 'Der Nam Ou Fluss bei Nong Khiaw, umgeben von Karstbergen, Laos',
    intro: `
      <p>🧭 <strong>Optionaler Zusatz-Stopp</strong> — aktuell nicht im festen Zeitplan. Nur sinnvoll, wenn ihr bewusst einen Tag aus Vientiane/Vang Vieng/Luang Prabang dafür abzwackt (siehe Hinweis im Laos-Überblick oben in der Übersicht).</p>
      <p>🏞️ Kleines Städtchen am Nam Ou Fluss, eingerahmt von dramatischen Karstnadeln — einer der fotogenischsten, ruhigsten Orte in Laos. Guter Kontrast, falls ihr nach den drei Kernstädten noch einen "Durchatmen"-Tag wollt.</p>
    `,
    pins: [
      { lat: 20.5667, lng: 102.9833, name: 'Nong Khiaw Zentrum', desc: 'Brücke über den Nam Ou · Karstpanorama' },
      { lat: 20.5721, lng: 102.9877, name: 'Kamphan Guesthouse',  desc: 'Unterkunftstipp · Flussblick · ~250.000 KIP/2 Pers.' },
      { lat: 20.5680, lng: 102.9880, name: 'Pha Daeng Peak ⭐⭐',   desc: '360°-Aussicht · Sonnenauf-/untergang · ~20.000 KIP' },
      { lat: 20.5715, lng: 102.9800, name: 'Pha Tok Höhlen',      desc: 'Kriegsgeschichte · ~20.000 KIP · Reisfeld-Zugang' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Nam Ou Fluss &amp; Karstberge ⭐⭐</div>
    <div class="poi-desc">Das eigentliche Erlebnis hier ist die Landschaft selbst: die Brücke über den Nam Ou mit den Karstnadeln im Hintergrund, besonders morgens im Nebel oder zum Sonnenuntergang. Kein Eintritt, einfach hinsetzen und schauen.</div>
    <span class="poi-meta">Gratis · morgens Nebel oder Sonnenuntergang am schönsten</span>
  </div>
  <div class="poi">
    <div class="poi-name">Pha Daeng Peak ⭐⭐</div>
    <div class="poi-desc">Der bekannteste Aussichtspunkt, 360°-Blick über die Stadt und die umliegenden Berge. Eingang gut ausgeschildert ca. 500 m östlich der Brücke. Aufstieg 1–1,5 Std., ~20.000 KIP Eintritt. Perfekter Sonnenaufgangs- oder Sonnenuntergangs-Spot.</div>
    <span class="poi-meta">~20.000 KIP · 1–1,5 Std. Aufstieg · Sonnenauf-/untergang</span>
  </div>
  <div class="poi">
    <div class="poi-name">Sleeping Woman Viewpoint</div>
    <div class="poi-desc">Zweiter Aussichtspunkt auf der Nordseite des Flusses, ca. 1 Std. Aufstieg. Weniger überlaufen als Pha Daeng.</div>
    <span class="poi-meta">~1 Std. Aufstieg · ruhiger als Pha Daeng</span>
  </div>
  <div class="poi">
    <div class="poi-name">Pha Tok Höhlen</div>
    <div class="poi-desc">Höhle hoch in einer Kalksteinklippe, diente Dorfbewohnern und Pathet-Lao-Kämpfern im Vietnamkrieg als Schutzraum, mit Infoschildern zu den ehemaligen Kommandoposten. Weg führt durch Reisfelder, ca. 2 km außerhalb. ~20.000 KIP Eintritt, Taschenlampe vor Ort leihbar. Rückweg oft mit kleinem Longtail-Boot möglich (~50.000 KIP für 2 Personen).</div>
    <span class="poi-meta">~20.000 KIP · ~2 km außerhalb · Kriegsgeschichte</span>
  </div>
  <div class="poi">
    <div class="poi-name">"100 Waterfalls"-Trek ⭐⭐</div>
    <div class="poi-desc">Gilt als einer der schönsten Treks in Laos, ein- bis mehrtägig organisiert (z.B. von Tiger Trail). Für alle mit etwas mehr Zeit/Kondition.</div>
    <span class="poi-meta">1–2 Tage · organisierte Tour nötig</span>
  </div>
  <div class="poi">
    <div class="poi-name">Weitere Aktivitäten</div>
    <div class="poi-desc">Kajak/Kanu auf dem Nam Ou, Klettern/Abseilen, Mountainbike mieten (z.B. bei Riverside Guest House ~50.000 KIP/Tag), Kräuter-Dampfbad/Massage bei "Sabai Sabai".</div>
    <span class="poi-meta">Kajak · Klettern · Fahrrad · Massage</span>
  </div>
  <div class="acc-lbl">🛏️ Unterkunftstipp</div>
  <div class="poi">
    <div class="poi-name">Kamphan Guesthouse ⭐</div>
    <div class="poi-desc">Mittleres Preissegment, Zimmer mit Flussblick &amp; Klimaanlage ~250.000 KIP für 2 Personen (Agoda/Booking). Eigenes Bad, guter Besitzer (betreibt nebenbei einen kleinen Laden), sehr gute Lage direkt am Fluss. Mit ~5 €/Person/Nacht schon nah an Hostel-Niveau, aber privates Zimmer statt Dorm.</div>
    <span class="poi-meta">~5 €/Person · Agoda/Booking · Flussblick</span>
  </div>
  <div class="poi">
    <div class="poi-name">Mandala Ou Resort</div>
    <div class="poi-desc">Falls ihr's etwas komfortabler wollt (echter Splurge, kein Budget-Tipp): einziges Hotel im Ort mit Pool, hoch über dem Fluss gelegen, Bungalows mit Öko-Keramikheizung, kostenloses Fahrrad für Gäste. Das Mehrfache eines Hostel-Betts.</div>
    <span class="poi-meta">~$58–68/Nacht (Splurge, kein Hostel) · einziger Pool im Ort</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Karstlandschaft &amp; Fluss als Naturkunst</div>
    <div class="poi-desc">Genau wie in Vang Vieng ist hier die Landschaft selbst der Hauptgrund zu kommen: senkrechte Karstnadeln über dem Nam Ou, oft im Morgennebel oder im warmen Abendlicht. Kein kuratiertes Museum, keine Galerie — dafür ist Nong Khiaw ein Ort zum Runterkommen und Fotografieren nach den dichteren Programmen in Vientiane/Vang Vieng/Luang Prabang.</div>
    <span class="poi-meta">Gratis · morgens Nebel oder Sonnenuntergang am schönsten</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">CT Restaurant</div>
    <div class="poi-desc">Direkt an der Brücke, schöner Flussblick von der Terrasse, guter Lao-Kaffee, kostenloses WLAN.</div>
    <span class="poi-meta">Flussblick · guter Kaffee · WLAN</span>
  </div>
  <div class="poi">
    <div class="poi-name">Vongmany Restaurant</div>
    <div class="poi-desc">Gutes Lao-Essen, probiert das lokale Gericht <strong>Jeow Mak Len</strong> (pfannengebratene Tomaten mit Kräutern, dazu gedünstetes Gemüse zum Dippen) — bei Einheimischen sehr beliebt.</div>
    <span class="poi-meta">~15.000 KIP · lokaler Klassiker</span>
  </div>
  <div class="poi">
    <div class="poi-name">Delilah's</div>
    <div class="poi-desc">Alles hausgemacht (Brot, Eis, Suppen, Salate), Lao-Western-Fusion mit kreativem Twist.</div>
    <span class="poi-meta">Hausgemacht · Fusion-Küche</span>
  </div>
  <div class="poi">
    <div class="poi-name">Chennai</div>
    <div class="poi-desc">Gutes indisches Restaurant, Thali für zwei Personen für ~30.000 KIP, gute Shakes.</div>
    <span class="poi-meta">~30.000 KIP Thali für 2 · gute Shakes</span>
  </div>
</div>`,

      'Geheimtipps': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">"100 Waterfalls"-Trek als Geheimtipp ⭐⭐</div>
    <div class="poi-desc">Wird oft nur am Rande erwähnt, gilt aber unter erfahrenen Laos-Reisenden als einer der schönsten Treks im Land — durch Dschungel, über und durch dutzende kleine Flussüberquerungen und Kaskaden. Ein- oder mehrtägig organisierbar (z. B. Tiger Trail in Luang Prabang), lohnt sich aber nur mit etwas Kondition und Zeit.</div>
    <span class="poi-meta">1–2 Tage · organisierte Tour · wenig bekannt</span>
  </div>
  <div class="poi">
    <div class="poi-name">Kräuter-Dampfbad &amp; Massage "Sabai Sabai"</div>
    <div class="poi-desc">Nach dem Pha-Daeng-Aufstieg oder einem Tag Kajak genau richtig: traditionelles laotisches Kräuter-Dampfbad, danach Öl- oder Fußmassage. Sehr günstig im Vergleich zu Thailand, entspannter Ausklang eines "Durchatmen"-Tages.</div>
    <span class="poi-meta">Günstig · guter Ausgleich nach Aktivität</span>
  </div>
  <div class="poi">
    <div class="poi-name">Sonnenuntergang von der Brücke statt vom Viewpoint</div>
    <div class="poi-desc">Während alle zum Sonnenuntergang auf Pha Daeng oder Sleeping Woman hochsteigen, bleiben viele Einheimische einfach auf der Brücke im Zentrum — kostenlos, kein Aufstieg, fast der gleiche Blick auf die Karstsilhouetten im Abendlicht. Guter Plan B an Tagen, an denen die Beine vom Trekking schon müde sind.</div>
    <span class="poi-meta">Gratis · kein Aufstieg nötig · Zentrum</span>
  </div>
</div>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>Hinkommen ab Luang Prabang:</strong> Tuk-Tuk zur "Sokprasert Bus Station" (~11 km, ~25 min, ~50.000 KIP/Person), dann Minivan LP → Nong Khiaw (3 tägliche Abfahrten: 9:00/11:00/13:00 Uhr, gleiche Zeiten für die Rückfahrt). Strecke 133 km, Fahrzeit 3,5–4 Std., ~120.000 KIP/Person. Unterwegs kurzer Tankstellen-Stopp (~10 min, WC vorhanden). Günstiger, aber langsamer/weniger planbar: öffentlicher Bus ab Busbahnhof LP für ~50.000–70.000 KIP.</li>
  <li><strong>Ankunft:</strong> Vom Ausstiegspunkt der Minivans gibt's einen lokalen Shuttle zur Unterkunft, ~5 min, ~20.000 KIP/Person (wer schnell ist, kann auch laufen).</li>
  <li><strong>Weiter nach Muang Ngoi Neua</strong> (falls angehängt): Boote fahren um 10:30 und 14:30 Uhr, gut 1 Std., ~25.000 KIP.</li>
  <li><strong>Fahrrad mieten</strong> vor Ort ~10.000–50.000 KIP/Tag (Stadtrad/Mountainbike) — gut um die zwei Straßen und die Umgebung zu erkunden.</li>
  <li><strong>Rückfahrt nach Luang Prabang:</strong> gleicher Minivan-Fahrplan (9/11/13 Uhr) in umgekehrter Richtung.</li>
</ul>`,

      'Suchbegriffe': `"Nong Khiaw hidden gems things to do"
"Nong Khiaw viewpoint hike guide"
"Nong Khiaw to Muang Ngoi boat schedule"`,
    },
  },

  'muang-ngoi': {
    image:    'https://commons.wikimedia.org/wiki/Special:FilePath/Nam_Ou_and_Muang_Ngoi_Neua.jpg?width=1280',
    imageAlt: 'Der Nam Ou Fluss bei Muang Ngoi Neua, Laos',
    intro: `
      <p>🧭 <strong>Optionaler Zusatz-Stopp</strong> — nur per Boot ab Nong Khiaw erreichbar (~1 Std., 2 tägliche Abfahrten). Keine Straße, kein Auto, kaum Strom — der ruhigste Ort auf der ganzen Reise.</p>
      <p>🏞️ Winziges Dorf am Nam Ou, umgeben von Karstbergen. Für dich interessant, wenn du neben Wandern und Fluss auch <strong>echte Dorfkultur</strong> statt Museum willst — Tageswanderungen zu ethnischen Minderheitendörfern sind hier der Clou, teils mit Übernachtung bei Familien.</p>
      <p>⚠️ <strong class="warn">Zeitkosten einrechnen:</strong> Die Bootsfahrt hin und zurück plus der ruhige Rhythmus vor Ort bedeuten praktisch mindestens 2 Nächte, damit sich die Anreise lohnt — eher etwas für "wenn's euch in Nong Khiaw richtig gut gefällt" als ein Tagesausflug.</p>
    `,
    pins: [
      { lat: 20.6167, lng: 102.9333, name: 'Muang Ngoi Zentrum',       desc: 'Nur per Boot erreichbar · eine Hauptstraße, keine Autos' },
      { lat: 20.6210, lng: 102.9410, name: 'Ban Na Dorf ⭐⭐',          desc: 'Tageswanderung · ethnische Minderheit · Übernachtung möglich' },
      { lat: 20.6155, lng: 102.9300, name: 'Tham Kang Höhle',           desc: 'Flusshöhle auf dem Weg nach Ban Na' },
      { lat: 20.6140, lng: 102.9285, name: 'Pha Noi Höhle',             desc: '10 Min. Waldweg · ~10.000 KIP · Taschenlampe nötig' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Nam Ou Fluss &amp; Dorfleben ⭐⭐⭐</div>
    <div class="poi-desc">Muang Ngoi ist autofrei und praktisch straßenlos — nur ein Fußweg zieht sich durchs Dorf, drumherum Karstnadeln und der Nam Ou. Kein Programm nötig: am Fluss sitzen, Fischerbooten zuschauen, Kinder beim Spielen beobachten. WLAN ist selten, Strom oft nur stundenweise per Generator — genau das macht den Ort so besonders ruhig.</div>
    <span class="poi-meta">Gratis · keine Autos · minimaler Strom/WLAN</span>
  </div>
  <div class="poi">
    <div class="poi-name">Tageswanderung nach Ban Na ⭐⭐</div>
    <div class="poi-desc">Der Klassiker: ca. 2 km zu Fuß, vorbei an der Flusshöhle Tham Kang, durch Reisfelder zum Dorf Ban Na und weiter zu den Nachbardörfern Ban Houaisene und Ban Huei Boe. Bewohnt von ethnischen Minderheiten mit eigenen Bräuchen und Sprache. Übernachtung im Dorf lässt sich meist über deine Unterkunft in Muang Ngoi vorab organisieren — für ein wirklich authentisches Kultur-Erlebnis statt Museum.</div>
    <span class="poi-meta">~2 km · zu Fuß · Übernachtung im Dorf organisierbar</span>
  </div>
  <div class="poi">
    <div class="poi-name">Pha Noi Höhle</div>
    <div class="poi-desc">Für alle mit einer Stunde übrig: Weg beginnt hinter dem Wat Okad Savaram, direkt beim Trailhead des Muang-Ngoi-Viewpoints. Rund 10 Minuten durch den Wald, 10.000 KIP Eintritt, mehrere Eingänge in den Hang hinein. Taschenlampe mitbringen — auch spontan ohne Guide machbar.</div>
    <span class="poi-meta">~10.000 KIP · ~10 Min. Waldweg · Taschenlampe!</span>
  </div>
  <div class="poi">
    <div class="poi-name">Tham Kang &amp; Thang Pha Kaew (geführt)</div>
    <div class="poi-desc">Größere Höhlensysteme in der Umgebung, für die sich ein lokaler Guide lohnt — sowohl wegen der Orientierung als auch wegen Hintergrundwissen zur geologischen und historischen Bedeutung (auch hier diente eine der Höhlen im Vietnamkrieg als Schutzraum). Buchbar direkt in Muang Ngoi.</div>
    <span class="poi-meta">Geführt · lokale Anbieter im Dorf</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Dorfarchitektur ohne Inszenierung</div>
    <div class="poi-desc">Anders als in Luang Prabang gibt es hier keine kuratierten Museen — dafür lebendige, traditionelle Holzbauweise auf Stelzen, wie sie in Nordlaos seit Generationen praktiziert wird, ganz ohne Tourismus-Fassade. Wer sich für Handwerk und Materialkultur interessiert, sieht hier die "unbearbeitete" Version dessen, was anderswo im Museum erklärt wird.</div>
    <span class="poi-meta">Gratis · einfach durchs Dorf laufen</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Riverside-Restaurants am Hauptweg</div>
    <div class="poi-desc">Die meisten Guesthouses haben ein angeschlossenes Restaurant mit Blick auf den Fluss — Standard-Laos-Küche (Larb, gebratener Reis, Nudelsuppen) plus einfache westliche Gerichte für Backpacker. Nichts Spektakuläres, aber die Aussicht macht's wett.</div>
    <span class="poi-meta">Günstig · meist an die Unterkunft angeschlossen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Frisch gefangener Flussfisch</div>
    <div class="poi-desc">Da hier noch aktiv gefischt wird, landet der Fisch oft direkt vom Nam Ou auf dem Teller — gegrillt oder in Bananenblatt gedämpft. Einfach am Guesthouse nachfragen, was der Tagesfang war.</div>
    <span class="poi-meta">Tagesfang · am Guesthouse nachfragen</span>
  </div>
</div>`,

      'Geheimtipps': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Kajak &amp; Schlauchboot auf dem Nam Ou</div>
    <div class="poi-desc">Ruhiger und weniger kommerziell als in Vang Vieng — einfach beim Guesthouse einen Kajak oder Schlauch leihen und selbst den Fluss erkunden, keine feste Route nötig. Ideal, um das "Fluss baden" mit Landschaft statt Partyatmosphäre zu verbinden.</div>
    <span class="poi-meta">Günstig · beim Guesthouse leihen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Muang Ngoi Viewpoint</div>
    <div class="poi-desc">Kurzer Aufstieg direkt vom Dorf aus (Trailhead bei Wat Okad Savaram) — deutlich weniger Aufwand als Pha Daeng in Nong Khiaw, aber ähnlich schöner Blick auf Fluss und Karst. Guter Plan, wenn die Beine vom Vortag noch müde sind.</div>
    <span class="poi-meta">Kurzer Aufstieg · Trailhead bei Wat Okad Savaram</span>
  </div>
</div>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>Hinkommen ab Nong Khiaw:</strong> Boote fahren 2× täglich, ca. 10:30 und 14:30 Uhr, Fahrzeit gut 1 Std., ~25.000 KIP. Kein Landweg vorhanden.</li>
  <li><strong>Kein Strom rund um die Uhr:</strong> Viele Guesthouses laufen nur stundenweise per Generator (oft abends) — Powerbank mitbringen.</li>
  <li><strong>WLAN so gut wie nicht vorhanden</strong> — bewusst als "Digital Detox"-Stopp einplanen, nicht als Arbeitsort.</li>
  <li><strong>Bargeld mitbringen</strong> — kein ATM im Ort, nächster in Nong Khiaw.</li>
  <li><strong>Zurück:</strong> gleicher Bootsfahrplan in umgekehrter Richtung, oder weiter Richtung Norden (Muang Khua) falls ihr noch mehr Zeit habt und tiefer nach Nordlaos wollt.</li>
</ul>`,

      'Suchbegriffe': `"Muang Ngoi Neua things to do 2026"
"Muang Ngoi Ban Na trekking guide"
"Muang Ngoi Nong Khiaw boat schedule price"`,
    },
  },

  thakhek: {
    image:    'https://commons.wikimedia.org/wiki/Special:FilePath/Kong_Lor_Caves_of_Laos_(5421509259).jpg?width=1280',
    imageAlt: 'Kong Lor Höhle bei Thakhek, Laos',
    intro: `
      <p>🧭 <strong>Alternative statt dem Norden</strong> — falls euch pures Adventure mehr reizt als Kultur/Wasserfälle. Liegt in Zentrallaos, geografisch <strong>entgegengesetzt</strong> zu Vang Vieng/Luang Prabang/Nong Khiaw.</p>
      <p>🏍️ <strong>4–5-tägiger Motorrad-Loop</strong> (~450–500 km) ab und bis Thakhek, durch spektakuläre Karstlandschaft, vorbei an Dutzenden Höhlen und Schwimmlöchern. Highlight: <strong>Kong Lor Cave</strong> — eine 7 km lange Flusshöhle, die man im Dunkeln mit dem Boot durchfährt.</p>
      <p>⚠️ <strong class="warn">Realistischer Zeitcheck:</strong> Der Loop allein braucht laut praktisch allen Reiseberichten mindestens 4 Tage. Mit An-/Abreise ab Vientiane (kein Zug, nur Bus, ~6h) frisst das euer ganzes 7-Tage-Fenster für Laos — würde heißen: Vang Vieng, Luang Prabang und Nong Khiaw komplett streichen. Nur eine Option, falls euch nach Ankunft klar wird, dass ihr lieber Vollgas-Adventure als Kulturprogramm wollt.</p>
    `,
    pins: [
      { lat: 17.4028, lng: 104.8016, name: 'Thakhek Zentrum',           desc: 'Start-/Endpunkt des Loops · Mekong-Städtchen' },
      { lat: 17.5389, lng: 104.9503, name: 'Tham Nang Aen ⭐',           desc: 'Beleuchtete Höhle · Ruderboot-Fahrt hindurch' },
      { lat: 17.7333, lng: 105.6667, name: 'Kong Lor Cave ⭐⭐⭐',        desc: '7 km Flusshöhle · Bootsfahrt im Dunkeln · 2–3 Std.' },
      { lat: 17.6000, lng: 105.2000, name: 'Tha Falang Schwimmloch',    desc: 'Kristallklares Wasser · Tag 1 der Schleife' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="acc-lbl">🗓️ Grobe Route (4 Tage)</div>
  <div class="poi">
    <div class="poi-name">Tag 1: Thakhek → Thalang</div>
    <div class="poi-desc">Route 12 Richtung Osten. Unterwegs: Tha Falang Schwimmloch (kristallklares Wasser, guter erster Stopp), Tham Nong Pa Fa ("Buddha-Höhle"), Tham Nang Aen (beleuchtete Schauhöhle mit Ruderboot-Fahrt durch den unterirdischen Fluss), Pha Katai Viewpoint ("Golden Rabbit").</div>
    <span class="poi-meta">Route 12 Richtung Osten · mehrere Höhlen &amp; Schwimmlöcher</span>
  </div>
  <div class="poi">
    <div class="poi-name">Tag 2: Thalang → Kong Lor Village</div>
    <div class="poi-desc">Weiter über Sandstein-Buddha-Felsskulpturen, die "Dragon Cave" (Mangkone-Höhle), eine kühle Quellenlagune zum Abkühlen, bis zum kleinen Dorf Kong Lor — Ausgangspunkt für die Höhle am nächsten Tag.</div>
    <span class="poi-meta">Weitere Höhlen &amp; eine Lagune zum Schwimmen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Tag 3: Kong Lor Cave ⭐⭐⭐</div>
    <div class="poi-desc">Das eigentliche Highlight des ganzen Loops — 7 km lange Flusshöhle durch einen Karstberg, komplett mit dem Longtail-Boot durchfahren, nur mit Stirnlampen beleuchtet. Kompletter Ausflug (Bootsfahrt + Erkunden) dauert 2–3 Stunden. Am Ausgang öffnet sich die Höhle in ein grünes Tal — ein Moment, den praktisch jeder Reisebericht als unvergesslich beschreibt.</div>
    <span class="poi-meta">2–3 Std. · Boot durch komplette Dunkelheit · Highlight des Loops</span>
  </div>
  <div class="poi">
    <div class="poi-name">Tag 4: Nahin → zurück nach Thakhek</div>
    <div class="poi-desc">Rückweg mit weiteren Karst-Aussichtspunkten unterwegs, bevor es zurück zum Ausgangspunkt geht. Wer 5 Tage Zeit hat, baut hier noch einen Zwischenstopp oder Seitenweg ein.</div>
    <span class="poi-meta">Rückweg · Aussichtspunkte unterwegs</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Karstlandschaft als Naturskulptur</div>
    <div class="poi-desc">Anders als in Vang Vieng ist die Karstlandschaft rund um Thakhek deutlich weniger erschlossen und touristisch inszeniert — schroffer, wilder, ursprünglicher. Die schiere Menge an Höhlen (mehr als irgendwo sonst in Laos) macht die gesamte Region zu einer Art unterirdischer Naturgalerie, die man nur mit Stirnlampe zu Gesicht bekommt. Kein kuratiertes Museum, aber für Fotografie und Naturästhetik einzigartig.</div>
    <span class="poi-meta">Gratis · über die ganze Route verteilt</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Kleine Garküchen entlang der Route</div>
    <div class="poi-desc">Der Loop führt durch abgelegene Dörfer mit sehr einfachen, aber authentischen Garküchen — meist Reis, Nudelsuppe oder gegrilltes Fleisch. Kein großes Angebot, aber echtes Landleben-Laos abseits der Touristenorte.</div>
    <span class="poi-meta">Sehr günstig · einfache Dorfküchen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Thakhek selbst: Mekong-Restaurants</div>
    <div class="poi-desc">Vor und nach dem Loop lohnt sich die Uferpromenade in Thakhek mit Blick auf Thailand auf der anderen Mekong-Seite — entspannter Ausklang nach den Motorradtagen.</div>
    <span class="poi-meta">Mekong-Uferpromenade · Thakhek Zentrum</span>
  </div>
</div>`,

      'Geheimtipps': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Nicht die schnellste Variante fahren</div>
    <div class="poi-desc">Reiseberichte sind sich einig: Wer sich Zeit für Seitenwege, Dörfer und spontane Stopps nimmt, hat deutlich mehr davon als wer den Loop in 3 Tagen durchzieht. Wenn ihr euch für diese Option entscheidet, lieber die vollen 4–5 Tage einplanen statt zu hetzen.</div>
    <span class="poi-meta">5 Tage &gt; 4 Tage &gt; 3 Tage — je mehr Zeit desto besser</span>
  </div>
</div>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>Anreise ab Vientiane:</strong> Kein Zug nach Thakhek — nur Bus, ca. 5–6 Std. ab dem Southern Bus Terminal.</li>
  <li><strong>Motorrad mieten</strong> in Thakhek direkt bei mehreren Anbietern im Zentrum, Automatik- oder Halbautomatik-Roller ausreichend für die meiste Strecke (Semi-Automatik empfohlen für ein paar unbefestigte Abschnitte).</li>
  <li><strong>Fahrerfahrung nötig</strong> — die Strecke hat teils schlechte Straßenabschnitte, Schotter und Regenzeit-Pfützen im August. Nur empfehlenswert, wenn mindestens eine Person im Team schon Motorrad-Erfahrung hat.</li>
  <li><strong>Helm, Regenjacke, wasserdichte Taschen</strong> — August ist Regenzeit, Schauer unterwegs sind wahrscheinlich.</li>
  <li><strong>Übernachtungen unterwegs:</strong> Einfache Guesthouses in Thalang, Kong Lor Village und Nahin — nichts muss vorgebucht werden, vor Ort spontan finden ist Standard.</li>
  <li><strong>Danach weiter nach Vietnam:</strong> Von Thakhek selbst keine guten Flugverbindungen — ihr müsstet zurück nach Vientiane (Bus) und von dort fliegen. Das ist der Hauptgrund, warum diese Option das Zeitfenster so stark beansprucht.</li>
</ul>`,

      'Suchbegriffe': `"Thakhek loop itinerary 2026"
"Kong Lor cave guide tips"
"Thakhek motorbike rental price"`,
    },
  },

  'si-phan-don': {
    image:    'https://commons.wikimedia.org/wiki/Special:FilePath/Khone_Phapheng_Falls,_Si_Phan_Don,_Laos,_widest_waterfall_in_the_world.jpg?width=1280',
    imageAlt: 'Khone Phapheng Wasserfall, Si Phan Don, Laos',
    intro: `
      <p>🧭 <strong>Alternative im Süden</strong> — Mekong-Inseln an der Grenze zu Kambodscha, DER Ort in Laos zum reinen Nichtstun. Geografisch das Gegenteil von Vang Vieng/Luang Prabang.</p>
      <p>🏝️ Hängematte, Mekong-Schwimmen, Fahrrad durch Dörfer, seltene Irrawaddy-Flussdelfine beobachten. Weniger Kultur/Sightseeing, dafür maximale Entspannung + Fluss.</p>
      <p>✈️ <strong>Überraschend gut angebunden:</strong> Von Vientiane fliegt Lao Airlines mehrmals täglich in ~1h nach Pakse (Tor zu Si Phan Don), und ab Pakse gibt's Direktflüge weiter nach Vietnam (u.a. Ho Chi Minh City in ~1h40) — das war lange nicht der Fall, hat sich aber 2026 mit neuen Routen verbessert. Macht diese Option logistisch machbarer als sie aussieht, kostet aber trotzdem 2 volle Reisetage allein für die Flüge/Busse hin und zurück in den Süden.</p>
      <p>⚠️ <strong class="warn">Fork, kein Kombi:</strong> Wegen der Entfernung ist das eine Entweder-oder-Entscheidung gegenüber dem Norden (Vang Vieng/Luang Prabang/Nong Khiaw) — beides zusammen passt nicht in 7 Tage.</p>
    `,
    pins: [
      { lat: 13.9088, lng: 105.9169, name: 'Don Det',                   desc: 'Haupt-Backpacker-Insel · günstige Guesthouses' },
      { lat: 13.8794, lng: 105.9294, name: 'Don Khon',                  desc: 'Ruhiger, französisches Kolonialerbe, Wasserfälle' },
      { lat: 13.8333, lng: 105.9500, name: 'Khone Phapheng Falls ⭐⭐',  desc: 'Breitester Wasserfall der Welt · 13 km Stromschnellen' },
      { lat: 13.8500, lng: 105.9400, name: 'Delfin-Beobachtungspunkt ⭐', desc: 'Irrawaddy-Flussdelfine · früh morgens/spät nachm.' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Don Det ⭐</div>
    <div class="poi-desc">Die Hauptinsel für Backpacker — günstige Guesthouses, Hängemattencafés, entspannte "Sonnenaufgangs-" und "Sonnenuntergangs-Seite" (je nach Tageszeit umziehen viele die Terrasse). Kein Auto, keine Hektik. Zentrum für alles Organisatorische (Fahrradverleih, Bootstouren).</div>
    <span class="poi-meta">Backpacker-Zentrum · Guesthouses ab ~10 $/Nacht</span>
  </div>
  <div class="poi">
    <div class="poi-name">Don Khon</div>
    <div class="poi-desc">Über eine alte französische Eisenbahnbrücke mit Don Det verbunden (zu Fuß oder Rad erreichbar). Ruhiger, etwas gehobener als Don Det, mit sichtbarem französischem Kolonialerbe (alte Lokschuppen, Villen) und den schönsten Wasserfällen der Region.</div>
    <span class="poi-meta">Fußweg/Rad ab Don Det · ruhiger, etwas teurer</span>
  </div>
  <div class="poi">
    <div class="poi-name">Khone Phapheng Falls ⭐⭐</div>
    <div class="poi-desc">Der breiteste Wasserfall der Welt — keine hohe Kaskade, sondern 13 km tosende Stromschnellen des gesamten Mekong. Beeindruckende Naturgewalt, gut zugänglich mit Aussichtsplattformen. Meist als Tagesausflug ab Don Det/Don Khon per Fahrrad oder Tuk-Tuk kombiniert.</div>
    <span class="poi-meta">Kleiner Eintritt · Tagesausflug ab Don Det/Khon</span>
  </div>
  <div class="poi">
    <div class="poi-name">Irrawaddy-Flussdelfine ⭐</div>
    <div class="poi-desc">Si Phan Don ist einer der letzten Orte weltweit, an denen man die seltenen, vom Aussterben bedrohten Irrawaddy-Flussdelfine beobachten kann. Geführte Bootstour Richtung kambodschanische Grenze, am besten früh morgens oder spätnachmittags wenn die Tiere aktiver sind. Keine Garantie, aber gute Chancen in der Regenzeit (mehr Wasser).</div>
    <span class="poi-meta">Geführte Bootstour · morgens/abends beste Chance</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Französisches Kolonialerbe auf Don Khon</div>
    <div class="poi-desc">Überreste der einzigen Eisenbahnlinie, die Frankreich je in Laos baute (Ende 19. Jhdt., um die Stromschnellen zu umgehen) — alte Lokomotive, Brückenpfeiler, Kolonialvillen. Ein ungewöhnliches, kaum bekanntes Stück Industriegeschichte mitten auf einer Mekong-Insel.</div>
    <span class="poi-meta">Gratis · Don Khon · alte Bahnbrücke &amp; Lokschuppen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Traditionelle Stelzenhäuser &amp; Fischerdörfer</div>
    <div class="poi-desc">Wie in Muang Ngoi gibt es hier keine Museen — dafür gelebte, traditionelle Bauweise auf Stelzen, angepasst an die jährlichen Mekong-Überschwemmungen. Radtour durch die Dörfer zeigt Fischernetze, Reisspeicher und Alltagsleben ganz ohne touristische Inszenierung.</div>
    <span class="poi-meta">Gratis · per Rad erkunden</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Riverside-Restaurants auf Stelzen</div>
    <div class="poi-desc">Praktisch jedes Guesthouse hat ein eigenes Restaurant direkt über dem Wasser — Standard-Lao-Küche (Larb, Fried Rice, Nudelsuppen), viele auch mit Fisch direkt aus dem Mekong. Preisniveau niedriger als in Vang Vieng oder Luang Prabang.</div>
    <span class="poi-meta">Günstig · Fisch aus dem Mekong · über dem Wasser</span>
  </div>
  <div class="poi">
    <div class="poi-name">Sunset-Bars auf der Westseite</div>
    <div class="poi-desc">Mehrere einfache Bars/Guesthouse-Terrassen auf Don Det sind speziell auf den Sonnenuntergang über dem Mekong ausgerichtet — Hängematten, Bier Lao, entspannte Live-Musik manchmal. Klassischer Abendabschluss auf den Inseln.</div>
    <span class="poi-meta">Abends · Westseite Don Det · Hängematten</span>
  </div>
</div>`,

      'Geheimtipps': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Fahrrad statt Tuk-Tuk</div>
    <div class="poi-desc">Beide Inseln sind flach und klein genug, um sie komplett per Fahrrad zu erkunden (Verleih überall, sehr günstig) — inklusive der Fahrt zur alten Eisenbahnbrücke, zu den Wasserfällen auf Don Khon und zu den Delfin-Aussichtspunkten. Deutlich atmosphärischer als organisierte Touren.</div>
    <span class="poi-meta">Fahrrad überall leihbar · sehr günstig</span>
  </div>
  <div class="poi">
    <div class="poi-name">Bewusst nichts planen</div>
    <div class="poi-desc">Der eigentliche Sinn von Si Phan Don ist, nach den dichteren Programmen im Norden (falls ihr die zuerst macht) oder direkt am Anfang mal komplett runterzufahren — viele Reisende berichten, dass "ein Tag komplett nichts tun" hier tatsächlich der Höhepunkt war, nicht eine bestimmte Attraktion.</div>
    <span class="poi-meta">Kein Programm · Hängematte · Fluss</span>
  </div>
</div>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>Anreise ab Vientiane:</strong> Lao Airlines fliegt mehrmals täglich (~13× wöchentlich) in ca. 1 Std. nach Pakse. Ab Pakse Tuk-Tuk/Minivan zu den Bootsanlegern Richtung Don Det/Don Khon (~1,5–2 Std.).</li>
  <li><strong>Alternative Bus ab Vientiane:</strong> deutlich günstiger, aber ~10–12 Std. — bei nur 7 Tagen Gesamtzeit eher nicht empfehlenswert.</li>
  <li><strong>Weiter nach Vietnam ab Pakse:</strong> Direktflüge Richtung Ho Chi Minh City existieren (~1h40 laut aktuellen Verbindungen) — deutlich schneller als über Vientiane zurückzufliegen. Nach Hanoi dauert es mit Umstieg länger (~4–7 Std. je nach Verbindung).</li>
  <li><strong>Bargeld mitbringen</strong> — kaum ATMs auf den Inseln, in Pakse vorher abheben.</li>
  <li><strong>Regenzeit im August:</strong> Mekong führt Hochwasser, manche Uferwege können überflutet sein — vor Ort erkundigen, welche Bereiche zugänglich sind.</li>
</ul>`,

      'Suchbegriffe': `"Si Phan Don 4000 islands guide 2026"
"Don Det Don Khon things to do"
"Irrawaddy dolphin tour Si Phan Don"
"Pakse to Vietnam flight options"`,
    },
  },

  'da-nang': {
    image:    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Dragon_Bridge%2C_Da_Nang_during_day_-_20230819_%28cropped%29.jpg/1280px-Dragon_Bridge%2C_Da_Nang_during_day_-_20230819_%28cropped%29.jpg',
    imageAlt: 'Dragon Bridge (Cầu Rồng), Da Nang, Vietnam',
    intro: `
      <p>📅 <strong>23.–25. August</strong> — 3 Tage.</p>
      <p>⚠️ <strong class="warn">Vietnam e-Visum vorab beantragen!</strong> evisa.gov.vn — ~25€, online in Minuten. Unbedingt vor Abflug erledigen — nicht am Flughafen möglich. Das Visum gilt für den ganzen Vietnam-Aufenthalt (Da Nang + Hội An + Saigon).</p>
      <p>🌧️ August = Regenzeit: Kurze Regengüsse, danach meist wieder sonnig. Kein Grund nicht hinzugehen.</p>
    `,
    pins: [
      { lat: 15.9740, lng: 108.2521, name: 'Marble Mountains ⭐⭐',      desc: 'Tempel + Höhlen in Kalksteinhügeln · ~40.000 VND' },
      { lat: 16.0610, lng: 108.2275, name: 'Dragon Bridge ⭐',           desc: 'Fr/Sa/So 21 Uhr: Feuer &amp; Wasser-Show · gratis' },
      { lat: 16.1000, lng: 108.2775, name: 'Lady Buddha Son Trà ⭐',     desc: '67m Statue · Motorradfahrt durch Dschungel' },
      { lat: 16.0676, lng: 108.2232, name: 'Museum of Cham Sculpture ⭐⭐', desc: 'Weltgrößte Cham-Sammlung · ~60.000 VND' },
      { lat: 16.0672, lng: 108.2239, name: 'Han Market',                 desc: 'Lokaler Markt · Meeresfrüchte · Textilien' },
      { lat: 16.0583, lng: 108.2472, name: 'Mỹ Khê Beach',              desc: '10 km weißer Sandstrand · ideal im August' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Ngũ Hành Sơn (Marble Mountains) ⭐⭐</div>
    <div class="poi-desc">Fünf Kalksteinhügel 9 km südlich der Stadt, benannt nach den 5 Elementen (Wasser, Feuer, Erde, Holz, Metall). In den Felsen versteckt: buddhistische Tempel, Pagoden, Höhlen mit natürlichem Lichteinfall durch Deckenöffnungen, und Granaten-Einschlagslöcher aus dem Vietnamkrieg — Geschichte sichtbar in den Felsen. Der Aufstieg ist kurz, oben hat man Blick aufs Meer. Atemberaubend fotografierbar. Mit Motorrad oder Grab hinfahren (9 km).</div>
    <span class="poi-meta">~40.000 VND Eintritt · 9 km vom Zentrum · Motorrad oder Grab</span>
  </div>
  <div class="poi">
    <div class="poi-name">Dragon Bridge (Cầu Rồng) ⭐</div>
    <div class="poi-desc">Ikonische Brücke über den Han Fluss in Form eines riesigen, sich windenden Drachen — nachts bunt beleuchtet. <strong>Freitag, Samstag und Sonntag um 21 Uhr:</strong> Der Drache spuckt Feuer und Wasser — spektakuläre Gratis-Show von der Uferpromenade aus. Wenn du am Wochenende in Da Nang bist: absolut nicht verpassen. Tagsüber trotzdem imposant.</div>
    <span class="poi-meta">Gratis · Fr/Sa/So 21 Uhr: Feuer &amp; Wasser-Show</span>
  </div>
  <div class="poi">
    <div class="poi-name">Lady Buddha, Son Trà Peninsula ⭐</div>
    <div class="poi-desc">67 m hohe weiße Buddha-Statue auf dem Hügel der Son Trà Halbinsel — von praktisch überall in Da Nang sichtbar. Die <strong>Motorradfahrt dorthin durch den Dschungel</strong> ist mindestens genauso gut wie das Ziel: kurvige Straße, Affenherden (Macaques am Straßenrand), spektakuläre Meeresblicke. Der Weg ist das Erlebnis. Gratis.</div>
    <span class="poi-meta">Gratis · Motorrad empfohlen · Affen &amp; Meerblick unterwegs</span>
  </div>
  <div class="poi">
    <div class="poi-name">Museum of Cham Sculpture ⭐⭐</div>
    <div class="poi-desc">Für Kunstinteressierte sehr empfehlenswert — die weltgrößte Sammlung von Cham-Artefakten. Die Cham-Zivilisation herrschte in Zentralvietnam vom 4.–13. Jahrhundert und baute eine hochentwickelte hinduistische Kultur mit exquisiter Steinbildhauerei. Über 300 Skulpturen, Reliefs und Altäre, darunter tanzende Shiva-Figuren und Apsaras. Fast keine Touristen — du hast das Museum oft für dich allein. Einzigartig in der Welt.</div>
    <span class="poi-meta">~60.000 VND · täglich 7–17 Uhr · fast keine Touristen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Han Market (Chợ Hàn)</div>
    <div class="poi-desc">Lokaler Markt im Stadtzentrum, keine Touristeninszenierung. Erdgeschoss: frische Produkte, Meeresfrüchte, Fisch direkt aus dem Meer. Obergeschoss: Textilien, Souvenirs, Kleidung. Typisch authentische vietnamesische Markt-Atmosphäre. Früh morgens am lebhaftesten.</div>
    <span class="poi-meta">Gratis · früh morgens am besten · Zentrum</span>
  </div>
  <div class="poi">
    <div class="poi-name">Han River Promenade</div>
    <div class="poi-desc">Abends entlang des Han Flusses spazieren — viele Bars und Restaurants, Blick auf die beleuchtete Dragon Bridge. Locals machen früh morgens Tai Chi und Aerobics am Flussufer — schönes lokales Bild wenn du früh aufstehst.</div>
    <span class="poi-meta">Gratis · abends Bars &amp; Restaurants · morgens Tai Chi</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Museum of Cham Sculpture (Kunstperspektive)</div>
    <div class="poi-desc">Die Cham-Skulpturen sind aus Designperspektive faszinierend: hochkomplexe Kompositionen mit Göttern, Dämonen und Kosmologie in Sandstein. Die Qualität der Ausführung — besonders bei den tanzenden Shiva-Figuren und den Kala-Köpfen über Eingangstoren — ist verblüffend raffiniert. Der hinduistische Einfluss auf die Ästhetik (via Indien) unterscheidet sich deutlich von der buddhistischen Ikonographie aus Thailand/Laos.</div>
    <span class="poi-meta">~60.000 VND · Museum of Cham Sculpture</span>
  </div>
  <div class="poi">
    <div class="poi-name">Mỹ Sơn Sanctuary als Architektur</div>
    <div class="poi-desc">Die Cham-Tempel in Mỹ Sơn sind aus rotem Backstein gebaut mit einer Technik die bis heute nicht vollständig verstanden ist — kein sichtbarer Mörtel, dennoch hochstabil über Jahrhunderte. Die Ornamentik kombiniert hinduistischen Symbolismus mit lokalen Motiven. Für Architektur-Interessierte ein spannendes Rätsel.</div>
    <span class="poi-meta">~200.000 VND + Transport · 70 km westlich</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Mì Quảng ⭐⭐</div>
    <div class="poi-desc">Das lokale Gericht schlechthin — die Da Nang-Spezialität die man unbedingt probieren muss. Gelbe Reisnudeln mit sehr wenig Brühe (kein Suppengericht, sondern eher trocken), Riesengarnelen, Schweinefleisch, Wachtelei, geröstete Erdnüsse und ein riesiger Reiscracker zum Draufbrechen. Die umgekehrte Suppenerfahrung — man bricht den Cracker in Stücke und rührt alles zusammen. <strong>Ba Mua</strong> auf Tran Binh Trong Straße gilt als bestes in der Stadt; alternativ einfach wo Locals sitzen und gelbe Schüsseln vor ihnen stehen.</div>
    <span class="poi-meta">~40.000–50.000 VND (~2€) · Ba Mua oder Garküchen mit Locals</span>
  </div>
  <div class="poi">
    <div class="poi-name">Bún Chả Cá ⭐</div>
    <div class="poi-desc">Da Nangs charakteristische Nudelsuppe mit Fischkuchen (Chả Cá) — frisch gemacht, leicht und würzig. Klare Brühe, Reisnudeln, Fischbällchen in verschiedenen Varianten. Das typische Frühstück der Einheimischen. Überall an Garküchen, morgens am besten.</div>
    <span class="poi-meta">~35.000–50.000 VND · Frühstück · Garküchen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Bánh Xèo</div>
    <div class="poi-desc">Knuspriger goldgelber Reismehl-Pfannkuchen mit Garnelen, Schweinefleisch und Sojasprossen, gefaltet wie ein Omelette. Zusammen mit frischen Salatblättern und Kräutern einrollen und in Fischsauce tunken. Knusprig, frisch, aromatisch.</div>
    <span class="poi-meta">~40.000–60.000 VND · überall</span>
  </div>
  <div class="poi">
    <div class="poi-name">Cà Phê Trứng (Egg Coffee) ⭐</div>
    <div class="poi-desc">Vietnamesischer Ei-Kaffee: starker Robusta-Kaffee mit einem frisch geschlagenen Eigelb-Sahne-Schaum obendrauf. Cremig-süß und intensiv — wie ein flüssiges Dessert mit Koffein. Kult überall in Vietnam, aber in Da Nang besonders gut in den kleinen Ca-Phê-Läden auf Nebenstraßen.</div>
    <span class="poi-meta">~25.000–40.000 VND · Ca-Phê-Läden · überall</span>
  </div>
  <div class="poi">
    <div class="poi-name">Cà Phê Sữa Đá</div>
    <div class="poi-desc">Vietnamesischer Eiskaffee mit Kondensmilch — der Klassiker schlechthin. Dunkel gerösteter Robusta-Kaffee tropft durch einen Phin-Filter über ein Glas mit Kondensmilch und Eis. Süß, stark, erfrischend. An jedem Straßencafé.</div>
    <span class="poi-meta">~20.000–35.000 VND · überall · Vietnam-Klassiker</span>
  </div>
  <div class="poi">
    <div class="poi-name">Lokale Meeresfrüchte</div>
    <div class="poi-desc">Da Nang liegt direkt am Meer — Meeresfrüchte sind deutlich frischer und günstiger als woanders in Vietnam. Abends an den Restaurants entlang der Mỹ Khê Beach: Tintenfisch, Garnelen, Muscheln, Hummer. Zum Gewicht kaufen und zubereiten lassen.</div>
    <span class="poi-meta">Abends · Mỹ Khê Beach-Restaurants · nach Gewicht</span>
  </div>
</div>`,

      'Geheimtipps': `
<div class="poi-list">
  <div class="acc-lbl">🚗 Tagesausflüge</div>
  <div class="poi">
    <div class="poi-name">Mỹ Sơn Sanctuary ⭐⭐</div>
    <div class="poi-desc">Hindu-Tempelkomplex der Cham-Zivilisation im Dschungel, 70 km westlich von Da Nang. UNESCO-Weltkulturerbe, oft "Vietnams kleines Angkor Wat" genannt. Über 70 Turmbauten aus dem 4.–13. Jahrhundert, einige noch erstaunlich gut erhalten, andere bewusst von Vegetation überwachsen. Die Kulisse — Tempel in einem Talkessel umgeben von Dschungelhügeln — ist einzigartig. Als Gruppenausflug buchbar oder mit Motorrad selbst hinfahren.</div>
    <span class="poi-meta">~200.000 VND Eintritt + Transport · 70 km westlich · Halbtagsausflug</span>
  </div>
  <div class="poi">
    <div class="poi-name">Hai Van Pass ⭐</div>
    <div class="poi-desc">Vietnams berühmteste Bergstraße — bekannt aus der Top Gear Vietnam Special Folge (Jeremy Clarkson, Richard Hammond, James May fuhren sie mit Motorrädern). Kurvenreiche Passstraße mit dramatischen Küstenblicken, Wolkenschwaden im Gebirge, Blick auf Hue im Norden und Da Nang im Süden. Am besten mit Motorrad (~2h Richtung Hue und zurück oder als Durchfahrt nach Hue). Eine der schönsten Fahrten Vietnams.</div>
    <span class="poi-meta">Gratis · Motorrad empfohlen · ~2h Richtung Hue &amp; zurück</span>
  </div>
  <div class="acc-lbl">💡 Lokale Tipps</div>
  <div class="poi">
    <div class="poi-name">Cờ Tướng (Vietnamesisches Schach) beobachten</div>
    <div class="poi-desc">An Straßenecken und in Parks spielen Männer stundenlang Cờ Tướng (chinesisches Schach mit vietnamesischen Figuren). Zuschauer bilden sich, Diskussionen entstehen, Ratschläge fliegen. Magische lokale Stimmung, kein Eintritt, keine Touristenstruktur — einfach stehenbleiben und beobachten.</div>
    <span class="poi-meta">Gratis · Parks und Straßenecken · nachmittags</span>
  </div>
  <div class="poi">
    <div class="poi-name">Motorrad ist Pflicht</div>
    <div class="poi-desc">Da Nang erschließt sich erst richtig wenn du selbst auf dem Motorrad bist. Lady Buddha, Son Trà Peninsula, Marble Mountains, Mỹ Khê Beach, Han River — alles in 15–30 Minuten erreichbar und viel erlebbarer als im Grab oder Bus. Mieten beim Hostel oder an Verleihstationen: ~150.000 VND/Tag.</div>
    <span class="poi-meta">~150.000 VND/Tag · Hostel oder Verleihstation</span>
  </div>
</div>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>e-Visum Vietnam</strong> — evisa.gov.vn, ~25€, online beantragen. Gilt für gesamten Vietnamaufenthalt (Da Nang, Hội An, Saigon). Mindestens 3 Tage vor Einreise beantragen!</li>
  <li><strong>Grab App</strong> — Für Taxis immer Grab nutzen (wie Uber). Preise sind festgelegt, kein Feilschen, keine Abzocke. App vorab installieren.</li>
  <li><strong>Motorrad mieten</strong> — ~150.000 VND/Tag (~6€). Absolut empfohlen für Lady Buddha, Marble Mountains, Hai Van Pass. Führerschein wird kaum kontrolliert, Helm immer tragen.</li>
  <li><strong>Wetter August</strong> — Regenzeit, aber meist kurze Schauer nachmittags. Nicht ganztägig. Morgens ist es oft schön.</li>
  <li><strong>Weiter nach Hội An:</strong> ~30 km südlich, ~45 min mit Grab (~150.000–200.000 VND) oder Bus (sehr günstig). Motorrad selbst hinfahren ist das schönste.</li>
</ul>`,

      'Suchbegriffe': `"đà nẵng địa điểm hay người địa phương 2026" (lokale Da Nang Tipps)
"Da Nang hidden gems local food budget 2026"
"Marble Mountains Da Nang caves guide"
"My Son Sanctuary Da Nang day trip"`,
    },
  },

  'hoi-an': {
    image:    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Hoi_An_lanterns_at_night.jpg/1280px-Hoi_An_lanterns_at_night.jpg',
    imageAlt: 'Hội An Altstadt mit bunten Laternen bei Nacht',
    intro: `
      <p>📅 <strong>25.–27. August</strong> — 2 Tage, 30 km südlich von Da Nang.</p>
      <p>🏛️ <strong>UNESCO-Weltkulturerbe</strong> — charmanteste Stadt Vietnams. Die Altstadt (Phố Cổ) mit Häusern aus dem 15.–19. Jahrhundert ist kompakt und zu Fuß erlebbar.</p>
      <p>💡 <strong>Eintrittsticket Altstadt:</strong> ~120.000 VND für Zugang zu 3 von 21 historischen Stätten. Gassen und Außenansichten sind gratis.</p>
    `,
    pins: [
      { lat: 15.8773, lng: 108.3263, name: 'Japanische Brücke ⭐',      desc: 'Symbol Hội Ans · 17. Jhdt. · im Eintrittsticket' },
      { lat: 15.8768, lng: 108.3268, name: 'Phúc Kiến Halle ⭐⭐',      desc: 'Chines. Versammlungshalle · Rot &amp; Gold · 17. Jhdt.' },
      { lat: 15.8776, lng: 108.3271, name: 'Tấn Ký Altes Haus',        desc: '200 Jahre altes Handelshaus · Originalfamilie wohnt noch drin' },
      { lat: 15.8880, lng: 108.3394, name: 'An Bang Beach ⭐',          desc: '3 km vom Zentrum · ruhiger &amp; lokaler als Mỹ Khê' },
      { lat: 15.8800, lng: 108.3226, name: 'Bánh Mì Phượng ⭐',         desc: 'Bourdain-Empfehlung · "bestes Bánh Mì der Welt"' },
      { lat: 15.8791, lng: 108.3282, name: 'Reaching Out ⭐',           desc: 'Social Enterprise · Taube Mitarbeiter · Handwerk' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Die Altstadt (Phố Cổ) ⭐⭐⭐</div>
    <div class="poi-desc">Kompaktes UNESCO-Viertel mit Häusern aus dem 15.–19. Jahrhundert, aus der Zeit als Hội An einer der wichtigsten Handelshäfen Südostasiens war. Japanische, chinesische, vietnamesische und europäische Architekturelemente auf engstem Raum — das Ergebnis jahrhundertelangen Handels mit der ganzen Welt. <strong>Früh morgens vor 7 Uhr</strong> oder <strong>abends nach 18 Uhr</strong> gehen — tagsüber Touristenmassen. Die Altstadt gehört erst bei Dämmerung wirklich sich selbst.</div>
    <span class="poi-meta">Gassen gratis · Ticket ~120.000 VND für 3 Stätten · morgens &amp; abends!</span>
  </div>
  <div class="poi">
    <div class="poi-name">Japanische Überdachte Brücke (Chùa Cầu) ⭐</div>
    <div class="poi-desc">Das Symbol von Hội An. Von japanischen Händlern im 17. Jahrhundert erbaut um die japanische und chinesische Handelssiedlung zu verbinden. Kleine überdachte Holzbrücke über einen Kanal mit einem Tempel in der Mitte. Klein aber wunderschön restauriert — die Holzschnitzereien und der Miniatur-Schrein im Inneren sind bemerkenswert. Im Eintrittsticket inbegriffen.</div>
    <span class="poi-meta">Im Eintrittsticket · 17. Jhdt. · Altstadt-Symbol</span>
  </div>
  <div class="poi">
    <div class="poi-name">Phúc Kiến Versammlungshalle ⭐⭐</div>
    <div class="poi-desc">Chinesische Versammlungshalle aus dem 17. Jahrhundert, gebaut von Händlern aus der Provinz Fujian. Intensiv rot und gold, komplexe vergoldete Drachen und Phönixe, dicker Räucherweihrauch, aufwendig bemalte Deckenkonstruktionen. Einer der eindrucksvollsten Räume im ganzen Viertel — viel opulenter als die anderen Versammlungshallen. Im Eintrittsticket inbegriffen.</div>
    <span class="poi-meta">Im Eintrittsticket · Fujian-Händler · 17. Jhdt.</span>
  </div>
  <div class="poi">
    <div class="poi-name">Tấn Ký Altes Haus</div>
    <div class="poi-desc">200 Jahre altes Handelshaus mit Architektur, die japanische, chinesische und vietnamesische Einflüsse kombiniert — Spiegelbild der Handelsnatur der Stadt. Holzkonstruktion mit typischen Querträgern, offener Innenhof für Lüftung, Fenster mit chinesischen Schriftzeichen. Noch von der siebten Generation der Originalfamilie bewohnt — echte Geschichte, nicht Museum. Im Eintrittsticket inbegriffen.</div>
    <span class="poi-meta">Im Eintrittsticket · Originalfamilie bewohnt · 7. Generation</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Schneider &amp; Maßanfertigungen ⭐⭐</div>
    <div class="poi-desc">Hội An ist weltberühmt für seine Schneiderei — in 24–48 Stunden werden maßgefertigte Kleidungsstücke nach Wunsch hergestellt. Preise im Vergleich zu Europa unglaublich günstig. <strong>Lokale Schneider auf Nebenstraßen suchen</strong>, nicht die großen Touristenshops an der Hauptstraße (Trần Phú). Eigene Fotos oder Skizzen mitbringen hilft bei der Kommunikation.</div>
    <span class="poi-meta">24–48h Lieferzeit · lokale Nebenstraßen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Laternen-Werkstätten</div>
    <div class="poi-desc">Hội An ist die Stadt der bunten Seidenlaternen — überall hängen sie an Schnüren über den Gassen. Viele kleine Werkstätten bieten Kurse an wo du selbst eine Laterne nach eigenen Farben und Mustern machst. Die fertigen Laternen können zusammengefaltet als Souvenir mitgenommen werden.</div>
    <span class="poi-meta">~100.000–200.000 VND · viele Werkstätten · Kurs ~1–2h</span>
  </div>
  <div class="poi">
    <div class="poi-name">Reaching Out Arts &amp; Crafts ⭐</div>
    <div class="poi-desc">Sehr empfehlenswert. Social Enterprise das Menschen mit Hör- und anderen Behinderungen beschäftigt. Hochwertige, handgefertigte Produkte — feines Teegeschirr, Textilien, Lackwaren — in einer ruhigen, aufgeräumten Atmosphäre. Die Mitarbeiter sind hörbehindert und kommunizieren via Schreibtafeln. Das Café dabei ist angenehm ruhig. Ein Einkauf hier bedeutet direkte lokale Wertschöpfung.</div>
    <span class="poi-meta">Altstadt · Social Enterprise · Café dabei</span>
  </div>
  <div class="poi">
    <div class="poi-name">Mắm Nhĩ (Fischsauce) als Souvenir</div>
    <div class="poi-desc">Hội An produziert eine der besten Fischsaucen der Welt — intensiver, komplexer als die industriellen Varianten. Als Souvenir kaufen: in kleinen Geschäften in der Altstadt, gut verpackt für den Transport. Ein Geschenk das Foodie-Freunde begeistert.</div>
    <span class="poi-meta">Lokale Shops Altstadt · gutes Souvenir</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Cao Lầu ⭐⭐⭐</div>
    <div class="poi-desc">Das Gericht das du <strong>nirgendwo sonst auf der Welt essen kannst</strong>. Dicke, leicht gelbliche Reisnudeln (dicker als Pho, dünner als Udon), Schweinefleisch, lokale Kräuter aus Hội An, knusprige Croutons — und sehr wenig Brühe. Das Besondere: Die Nudeln werden traditionell nur mit Wasser aus einem bestimmten alten Brunnen in Hội An hergestellt — die spezifische Mineralzusammensetzung des Wassers gibt ihnen ihre einzigartige Textur. Echte Cao Lầu gibt es nur hier. Überall in der Stadt erhältlich.</div>
    <span class="poi-meta">~50.000–70.000 VND · NUR in Hội An · Brunnen-Wasser-Geheimnis</span>
  </div>
  <div class="poi">
    <div class="poi-name">Bánh Mì Phượng ⭐</div>
    <div class="poi-desc">Anthony Bourdain nannte dieses Bánh Mì 2005 "das beste der Welt" in seiner TV-Sendung No Reservations. Bis heute immer Schlange, Preis etwas touristisch. Trotzdem gut: frisches Baguette, Paté, gegrilltes Schweinefleisch, Gemüse, Koriander, Chili. Alternative für mehr Authentizität: <strong>Madam Khánh — The Queen of Bánh Mì</strong> in der Neareby Gasse — mehr Volumen, ehrlichere Preise, genauso gut.</div>
    <span class="poi-meta">~30.000 VND · Bánh Mì Phượng oder Madam Khánh · Altstadt-Nähe</span>
  </div>
  <div class="poi">
    <div class="poi-name">White Rose Dumplings (Bánh Bao Vạc) ⭐</div>
    <div class="poi-desc">Zarte, weiße, fast durchscheinende Reismehl-Teigtaschen mit Garnelen-Füllung, geformt wie weiße Rosen — optisch außergewöhnlich schön. Nur in Hội An zu finden, und das Rezept wird streng gehütet. Besuche das <strong>White Rose Restaurant</strong> (die Familie hat das Originalrezept und gibt es nicht weiter — alle anderen White Rose Dumplings in der Stadt kommen von ihnen). Mit knusprigen Schalotten darüber.</div>
    <span class="poi-meta">~50.000 VND · White Rose Restaurant · Hội An-Exklusivität</span>
  </div>
  <div class="poi">
    <div class="poi-name">Cơm Gà Hội An</div>
    <div class="poi-desc">Hội Ans Version des Hühnerreises — gedämpftes Hühnchen auf Hühnerbrühe-Reis, mit lokalen Kräutern, Ingwer und einer besonderen Sauce. Sehr günstig, überall erhältlich. Das tägliche Mittagessen der Einheimischen.</div>
    <span class="poi-meta">~35.000–50.000 VND · überall · Mittagessen der Einheimischen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Bánh Đập</div>
    <div class="poi-desc">Hội An-Snack: gegrilltes Reiscracker-Papier, mit geriebenen weißen Reisnudeln draufgelegt und dann in Fischsauce getunkt. Knusprig und weich gleichzeitig, sehr günstig. Straßenfood das man nur hier so findet.</div>
    <span class="poi-meta">~10.000–20.000 VND · Straßenfood</span>
  </div>
  <div class="poi">
    <div class="poi-name">Chè (Süße Dessert-Suppe)</div>
    <div class="poi-desc">Vietnamesische süße Dessert-Suppen in vielen Variationen: Mungbohnen mit Kokosmilch, Taro, schwarzer Sesam, bunte Gelee-Stücke. Nach dem Abendessen in der Altstadt. Günstig und erfrischend.</div>
    <span class="poi-meta">~15.000–25.000 VND · nach Abendessen · Altstadt</span>
  </div>
</div>`,

      'Geheimtipps': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Abends nach 18 Uhr in der Altstadt</div>
    <div class="poi-desc">Das ist der Zeitpunkt für Hội An. Wenn die Busse mit Tagestouristen abgefahren sind, zünden die Geschäfte und Restaurants die Hunderte von Seidenlaternen an — die Gassen tauchen in warmes buntes Licht, Touristen werden weniger, Locals kommen raus. Die gesamte Altstadt sieht dann aus wie ein Gemälde. Warte damit, bis es dunkel ist.</div>
    <span class="poi-meta">Ab 18 Uhr · nach Tagestouristen · Laternen an</span>
  </div>
  <div class="poi">
    <div class="poi-name">Fahrrad durch die Reisfelder ⭐⭐</div>
    <div class="poi-desc">Das schönste Erlebnis in Hội An, das kein Reiseführer als Hauptpunkt listet. Ein Fahrrad mieten (~50.000 VND/Tag) und einfach in die Felder um die Stadt fahren. Im August leuchtend grüne Reisfelder, Büffel auf Feldern, alte Bauernhöfe, Brücken über Kanäle. Eine völlig andere Welt 10 Minuten vom touristischen Zentrum. Kein Plan, kein Ziel — einfach abbiegen.</div>
    <span class="poi-meta">~50.000 VND Fahrrad/Tag · im August grüne Felder · kein Plan nötig</span>
  </div>
  <div class="poi">
    <div class="poi-name">Bootfahrt auf dem Thu Bồn Fluss</div>
    <div class="poi-desc">Lokale Fischer nehmen Touristen für ~50.000 VND mit auf den Fluss. Abends besonders schön wenn Papierlaternen auf dem Wasser treiben — eine Hội An-Tradition. Entspannte Atmosphäre, Blick auf die beleuchtete Altstadt vom Wasser aus.</div>
    <span class="poi-meta">~50.000 VND · abends · Laternen auf dem Wasser</span>
  </div>
  <div class="poi">
    <div class="poi-name">An Bang Beach ⭐</div>
    <div class="poi-desc">3 km vom Altstadtzentrum (Fahrrad oder Motorrad), ruhiger und weniger touristisch als die Strände bei Da Nang. Lokal geprägte Strandcafés mit Liegestühlen, günstiger Kaffee, Kokoswasser direkt aus der Nuss. Breiterer Strand mit weniger Hochhaus-Kulisse. Auch hier im August warmes Wasser zum Schwimmen.</div>
    <span class="poi-meta">3 km vom Zentrum · ruhiger · Strandcafés</span>
  </div>
  <div class="poi">
    <div class="poi-name">Frühmorgens einkaufen am Hội An Markt</div>
    <div class="poi-desc">Der Hội An Central Market öffnet früh morgens (ab 6 Uhr) — bevor die ersten Touristen ankommen, kaufen Einheimische hier frischen Fisch, Gemüse, Kräuter. Sehr lebendige Atmosphäre, echte lokale Versorgung. Gratis reinschauen, am besten zwischen 6 und 8 Uhr.</div>
    <span class="poi-meta">6–8 Uhr morgens · vor Touristen · gratis</span>
  </div>
</div>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>Von Da Nang nach Hội An:</strong> ~30 km südlich, ~45 min. Optionen: Grab (~150.000–200.000 VND), öffentlicher Bus sehr günstig, oder Motorrad selbst (schönste Option — Küstenstraße).</li>
  <li><strong>Eintrittsticket Altstadt:</strong> ~120.000 VND an Ticketschaltern am Rand der Altstadt. Gibt Zugang zu 3 von 21 historischen Stätten. Die Gassen selbst sind immer frei.</li>
  <li><strong>Mietfahrrad</strong> — ~50.000 VND/Tag an fast jeder Unterkunft. Die Stadt ist flach, perfekt für Fahrräder. Für weitere Strände ein Motorrad mieten (~100.000 VND/Tag).</li>
  <li><strong>Tagestouristen meiden:</strong> Zwischen 10 und 17 Uhr kommen Busse aus Da Nang und Cruise-Ships. Morgens (vor 8 Uhr) und abends (nach 18 Uhr) ist die Altstadt eine andere Welt.</li>
  <li><strong>Schneider-Timing:</strong> Wenn du etwas schneidern lässt, Maße am ersten Tag nehmen und 24–48h Lieferzeit einplanen. Abholung und letzte Anprobe kurz vor Abreise.</li>
</ul>`,

      'Suchbegriffe': `"Hội An địa điểm hay ít người biết 2026" (Hidden gems Hội An)
"Hoi An local food guide Cao Lau White Rose"
"Hoi An hidden gems tailors local"
"hiddenhoian.com" (beste lokale Website für Hội An)`,
    },
  },

  'bangkok-geburtstag': {
    image:    'https://upload.wikimedia.org/wikipedia/commons/b/bd/Wat_Arun_from_Chao_Phraya_River.jpg',
    imageAlt: 'Wat Arun am Chao Phraya Fluss, Bangkok',
    intro: `
      <p>📅 <strong>28. August–3. September</strong> — zurück in Bangkok.</p>
      <p>🎂 <strong>30. August: Geburtstag!</strong></p>
    `,
    pins: [],
    panels: {
      'Sehenswürdigkeiten': ``,
      'Kunst & Design': ``,
      'Essen & Streetfood': ``,
      'Geheimtipps': ``,
      'Praktisches': ``,
      'Suchbegriffe': ``,
    },
  },

  hcmc: {
    image:    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Ho_Chi_Minh_City_panorama_2019_%28cropped2%29.jpg/1280px-Ho_Chi_Minh_City_panorama_2019_%28cropped2%29.jpg',
    imageAlt: 'Ho Chi Minh City (Saigon) Skyline Panorama',
    intro: `
      <p>📅 <strong>3.–7. September</strong> — 4 Tage in Saigon. Offiziell "HCMC", alle Locals sagen "Saigon". Riesige, chaotische, energiegeladene Metropole.</p>
      <p>🛍️ <strong>Schwerpunkt: Shopping</strong> — lokale Designermode, kuratierte Concept Stores, Märkte. Detaillierte Shopping-Sektion im Accordion.</p>
      <p>⚠️ Vietnam e-Visum (evisa.gov.vn) — bereits für Da Nang beantragt, gilt für gesamten Vietnam-Aufenthalt.</p>
    `,
    pins: [
      { lat: 10.7794, lng: 106.6922, name: 'War Remnants Museum ⭐⭐⭐', desc: 'Vietnamkrieg aus VN-Perspektive · Muss-Besuch · $1,50' },
      { lat: 10.7793, lng: 106.6952, name: 'Reunification Palace ⭐⭐', desc: '1960er-Architektur · Kriegsende 1975 · ~40.000 VND' },
      { lat: 10.7808, lng: 106.6984, name: 'Jade Emperor Pagoda ⭐',   desc: 'Taoistischer Tempel 1909 · Weihrauch · gratis' },
      { lat: 10.7724, lng: 106.6980, name: 'Ben Thành Market ⭐',      desc: 'Wahrzeichen · Kaffee · Gewürze · Lacquarewaren' },
      { lat: 10.7729, lng: 106.6993, name: 'Saigon Square',            desc: 'Mode &amp; Accessoires · Feilschen! · klimatisiert' },
      { lat: 10.7539, lng: 106.6626, name: 'Cholon Chinatown',         desc: 'Bình Tây Market · Großhandel · Atmosphäre' },
      { lat: 10.7803, lng: 106.7036, name: 'Saigon Riverfront Park ⭐⭐', desc: 'Skyline-Blick für Locals · fast keine Touristen' },
      { lat: 10.7784, lng: 106.6988, name: '42 Nguyễn Huệ ⭐⭐',        desc: 'Altes Apartmenthaus → Galerien &amp; Concept Stores' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">War Remnants Museum ⭐⭐⭐</div>
    <div class="poi-desc">Das wichtigste Museum in Saigon und eines der eindrücklichsten in ganz Vietnam. Dokumentiert den Vietnamkrieg (1955–1975) aus konsequent vietnamesischer Perspektive. Fotografien von renommierten US-Kriegsfotographen (darunter Nick Ut, dessen "Napalm Girl" Foto hier hängt), die Folgen von Agent Orange (bis in die dritte Generation sichtbar), US-Militärfahrzeuge und -geräte im Außenbereich, Karten mit Bombardierungsmustern. Sehr bewegend und teils schockierend — wichtige Perspektive auf einen Krieg der meistens nur aus westlicher Sicht erzählt wird. 2024/25 stark modernisiert mit neuen interaktiven Ausstellungen.</div>
    <span class="poi-meta">~$1,50 Eintritt · täglich 7:30–17:30 Uhr · 2–3h einplanen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Reunification Palace (Dinh Thống Nhất) ⭐⭐</div>
    <div class="poi-desc">Ehemaliger Präsidentenpalast Südvietnams, faszinierend aus zwei Gründen: Erstens ist die <strong>Architektur aus den 1960ern</strong> fabelhaft — futuristischer Modernismus mit offenen Terrassen, Hubschrauberlandeplatz auf dem Dach, Bunker im Untergeschoss. Zweitens endete hier symbolisch der Vietnamkrieg: Am <strong>30. April 1975</strong> fuhren nordvietnamesische Panzer durch das Tor, ein Soldat hisste die Fahne auf dem Dach, und das Regime Südvietnams kapitulierte. Der Palast steht seitdem unverändert wie eine Zeitkapsel.</div>
    <span class="poi-meta">~40.000 VND · täglich 8–17 Uhr · 1–2h</span>
  </div>
  <div class="poi">
    <div class="poi-name">Jade Emperor Pagoda (Chùa Ngọc Hoàng) ⭐</div>
    <div class="poi-desc">Atmosphärischer taoistisch-buddhistischer Tempel aus dem Jahr 1909. Dichter Weihrauchrauch, komplex geschnitzte Holzfiguren, religiöse Devotion von echten Gläubigen. Sehr authentisch — kein Museum, sondern aktive Religionsstätte. Barack Obama besuchte ihn 2016. Im Innenhof ein kleiner Teich mit Schildkröten (Symbol der Langlebigkeit). Gratis.</div>
    <span class="poi-meta">Gratis · täglich 7–18 Uhr · nicht zu touristisch</span>
  </div>
  <div class="poi">
    <div class="poi-name">Saigon Central Post Office ⭐</div>
    <div class="poi-desc">Prachtbau aus der französischen Kolonialzeit (1886–1891), entworfen von Gustave Eiffel (desselbe wie der Eiffelturm). Riesige Bogenhalle, Vintage-Glasfenster an den Seiten, Wandkarten aus der Kolonialzeit. Drinnen noch als Postamt in Betrieb. Gratis reinschauen. Direkt neben der Notre Dame Kathedrale.</div>
    <span class="poi-meta">Gratis · täglich 7–19 Uhr · Gustave Eiffel Architektur</span>
  </div>
  <div class="poi">
    <div class="poi-name">Notre Dame Cathedral</div>
    <div class="poi-desc">Neugotische Kirche aus dem Jahr 1880, aus roten Backsteinen (direkt aus Frankreich importiert). Außen imposant, innen nüchtern. Steht gegenüber der Zentralpost — zusammen ein schönes Ensemble aus Kolonialarchitektur. Restaurierungsarbeiten laufen seit Jahren, Gerüste evtl. noch sichtbar.</div>
    <span class="poi-meta">Gratis · außen besser als innen · Kolonialzentrum</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">42 Nguyễn Huệ (Apartment Building) ⭐⭐</div>
    <div class="poi-desc">Einzigartiges Konzept: Ein jahrzehntealtes kommunistisches Apartmenthaus mit offenem Treppenhaus-Atrium wurde von unten bis oben in ein kuratiertes Shopping-Erlebnis verwandelt. Jede Etage: kleine Galerien, Concept-Stores, Independent Labels, Vintage-Shops, Cafés. Das Atrium selbst ist fotografisch außergewöhnlich — spiralförmig, mit Wäscheleinen und Pflanzen der verbliebenen Bewohner dazwischen. Sehr kreativ und atmosphärisch.</div>
    <span class="poi-meta">Gratis reinschauen · District 1 · Nguyễn Huệ Straße</span>
  </div>
  <div class="poi">
    <div class="poi-name">22 Lý Tự Trọng (Apartment Building)</div>
    <div class="poi-desc">Ähnliches Konzept wie 42 Nguyễn Huệ — altes Wohnhaus umfunktioniert zu Shops und Cafés. Zwei dieser Gebäude in der Nähe zu kombinieren lohnt sich für eine Runde durch Saigons Independent-Kreativszene.</div>
    <span class="poi-meta">Gratis · District 1 · in der Nähe von 42 Nguyễn Huệ</span>
  </div>
  <div class="poi">
    <div class="poi-name">Craft Beer-Szene</div>
    <div class="poi-desc">Saigon hat eine der besten Craft Beer-Szenen Asiens. <strong>Pasteur Street Brewing</strong> ist die bekannteste Brauerei (Passion Fruit Wheat Beer gilt als ihr bestes). <strong>Heart of Darkness Brewery</strong> als Alternative. Beide in District 1. Abends für Bier und Design-Atmosphäre.</div>
    <span class="poi-meta">Pasteur Street + Heart of Darkness · District 1</span>
  </div>
  <div class="poi">
    <div class="poi-name">Pham Viet Chanh Street</div>
    <div class="poi-desc">Schicke Ausgehstraße in Binh Thanh District, weit weg von den touristischen Gebieten rund um Ben Thành. Upscale Bars mit gutem Design, internationales Essen, Expats und Locals. Interessant für Design und Stadtästhetik — zeigt, wie das wohlhabendere Saigon aussieht und ausgeht.</div>
    <span class="poi-meta">Binh Thanh District · abends · Design &amp; Ästhetik</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Cơm Tấm (Broken Rice) ⭐</div>
    <div class="poi-desc">Das typischste Saigoner Gericht, Seele der Stadt. Gebrochener Reis (Trümmerreis — früher günstiger, wurde Tradition) mit gegrilltem Schweinekotelett (Sườn Nướng), Spiegelei, Garnelenpaste (Chả) und eingelegtem weißem Gemüse (Đồ Chua). Überall erhältlich, sehr günstig, sehr sättigend.</div>
    <span class="poi-meta">~50.000–70.000 VND · überall · Saigon-Klassiker</span>
  </div>
  <div class="poi">
    <div class="poi-name">Bánh Mì Huỳnh Hoa ⭐⭐</div>
    <div class="poi-desc">Gilt als legendärstes Bánh Mì in ganz Saigon. Überladenes Sandwich mit fünf verschiedenen Fleischsorten — Paté, Schweinefleisch, Mortadella, geräuchertes Fleisch, Leberwurst — plus Gemüse und Saucen. Immer eine Warteschlange, aber es geht schnell. Das Brot ist besonders knusprig und frisch gebacken.</div>
    <span class="poi-meta">~35.000 VND · Bánh Mì Huỳnh Hoa · immer Schlange</span>
  </div>
  <div class="poi">
    <div class="poi-name">Phở Lê (District 11) ⭐</div>
    <div class="poi-desc">Weithin bekanntes, sehr günstiges Pho-Restaurant. Sehr intensive, klare Rinderbrühe die stundenlang gekocht wird. Weit außerhalb der Touristenzentren in District 11 — ein Grab ist nötig aber der Unterschied zur Touristenpho ist enorm.</div>
    <span class="poi-meta">Günstig · District 11 · intense Brühe</span>
  </div>
  <div class="poi">
    <div class="poi-name">Bún Bò Huế</div>
    <div class="poi-desc">Würzige Nudelsuppe ursprünglich aus der Stadt Huế — dicke Reisnudeln, Rinderhaxe, Zitronengras, Garnelenmark-Paste. Viel komplexer und schärfer als Pho. In Saigon weniger allgegenwärtig als Pho, aber überall bei Spezialitäten-Garküchen erhältlich.</div>
    <span class="poi-meta">~50.000–80.000 VND · Huế-Spezialität</span>
  </div>
  <div class="poi">
    <div class="poi-name">Bánh Xèo ⭐</div>
    <div class="poi-desc">Knuspriger goldgelber Crêpe aus Reismehl mit Kurkuma (daher die gelbe Farbe), Garnelen, Schweinefleisch und Sojasprossen. Mit Salatblättern und Kräutern einrollen, in Fischsauce oder süß-saure Sauce tunken. In Saigon besonders gut.</div>
    <span class="poi-meta">~60.000–80.000 VND · überall</span>
  </div>
  <div class="poi">
    <div class="poi-name">Egg Coffee (Cà Phê Trứng)</div>
    <div class="poi-desc">Kult-Kaffee auch in Saigon immer präsenter. <strong>Storii Coffee</strong> gilt als gute Adresse für Egg Coffee in angenehmer Atmosphäre. Auch viele andere Ca-Phê-Läden bieten es an.</div>
    <span class="poi-meta">~35.000–50.000 VND · Storii Coffee</span>
  </div>
</div>`,

      'Geheimtipps': `
<div class="poi-list">
  <div class="acc-lbl">🛍️ Shopping — Dein Hauptziel</div>
  <div class="poi">
    <div class="poi-name">Vietnamese Local Brands ⭐⭐⭐</div>
    <div class="poi-desc">Das interessantere Shopping in Saigon. Lokale Designermode in District 1 und 3 — günstig, hochwertig, eigener Stil. Empfehlungen: <strong>Waa Studios</strong> (Đặng Thị Nhu Straße) — handwerkliche Qualität, sehr sorgfältig gemacht, natürliche Materialien. <strong>Cocosin</strong> — Romantic/Casual Styles, Maxi-Dresses, feminine Ästhetik. Einfach durch District 3 schlendern: viele kleine Boutiquen auf Nebenstraßen, 10–30€ pro Stück.</div>
    <span class="poi-meta">District 1 &amp; 3 · Waa Studios &amp; Cocosin · 10–30€/Stück</span>
  </div>
  <div class="poi">
    <div class="poi-name">Saigon Square &amp; Taka Plaza ⭐</div>
    <div class="poi-desc">Air-conditionierte Einkaufszentren mit riesiger Auswahl an Mode, Taschen, Accessoires, Schuhen. Preise verhandelbar — bei 50–70% des Anfangspreises einsteigen, auf 30–40% drücken. Gute Mischung aus legaler lokaler Ware und Markenimitaten — eigenes Urteil nötig. Im Zentrum, District 1, leicht erreichbar.</div>
    <span class="poi-meta">District 1 · klimatisiert · Feilschen! · 30–40% anpeilen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Ben Thành Market (Bến Thành) ⭐</div>
    <div class="poi-desc">Das Wahrzeichen des Stadtzentrums, riesig und labyrinthisch. Beste Käufe hier: <strong>vietnamesischer Kaffee</strong> (gemahlener Robusta in Blechdosen — Souvenirs und Eigenverbrauch), Gewürze, handgefertigte Lackwarenschalen (Lacquerware), Seidenschals. Hartes Feilschen überall nötig. Abends außen herum gibt's Streetfood-Stände.</div>
    <span class="poi-meta">Zentrum District 1 · Kaffee + Lacquerware · Feilschen!</span>
  </div>
  <div class="poi">
    <div class="poi-name">Ho Thi Ky Market (Quận 10) ⭐</div>
    <div class="poi-desc">Geheimtipp! Blumenmarkt und Streetfood-Markt in einem — kaum Touristen, fast nur Locals. Früh morgens am buntesten wenn die frischen Blumen ankommen und die Foodstände aufmachen. Faszinierende Farben und Atmosphäre. Grab dorthin (~10 min von D1).</div>
    <span class="poi-meta">Früh morgens · District 10 · Blumen + Streetfood</span>
  </div>
  <div class="acc-lbl">💡 Versteckte Spots</div>
  <div class="poi">
    <div class="poi-name">Saigon Riverfront Park ⭐⭐</div>
    <div class="poi-desc">Der beste versteckte Ort um die Saigon-Skyline zu sehen. Thu Thiem Halbinsel auf der anderen Flussseite — Plastikstühle am Flussufer, Locals trinken Kokoswasser und schauen auf die beleuchtete Skyline und die Landmark 81 (Vietnams höchstes Gebäude). Fast keine Touristen, Getränke 25.000–50.000 VND. Am besten nach Sonnenuntergang wenn alles beleuchtet ist. Ein absolut lokales Erlebnis.</div>
    <span class="poi-meta">Nach Sonnenuntergang · Thu Thiem Tunnel · fast keine Touristen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Metro Linie 1 (Neu!) ⭐</div>
    <div class="poi-desc">Eröffnet Dezember 2024 — die erste Metro Saigons überhaupt, nach Jahrzehnten Bauverzögerung. Verbindet District 1 mit Binh Thanh und Thu Duc. Sehr günstig, klimatisiert. Eine Chance die Stadt neu zu entdecken und gleichzeitig Geschichte zu erleben — diese Linie ist eine der meistdiskutierten Infrastrukturen der Stadtgeschichte.</div>
    <span class="poi-meta">Günstig · December 2024 eröffnet · District 1 → Thu Duc</span>
  </div>
  <div class="poi">
    <div class="poi-name">Alley Bars &amp; Speakeasies</div>
    <div class="poi-desc">Saigon hat eine lebendige Underground-Cocktailbar-Szene: Durch schmale Gassen zu finden, oft hinter unscheinbaren Türen oder in alten Gebäuden. <strong>The ATM Bar</strong>, <strong>Layla</strong>, <strong>Snuffbox</strong> sind Namen die zirkulieren — aktuelle Adressen bei lokalen Expats erfragen (Szene ändert sich schnell). Abends nach 21 Uhr.</div>
    <span class="poi-meta">Abends nach 21 Uhr · Adressen lokal erfragen · ändert sich</span>
  </div>
</div>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>Grab App</strong> — Absolut notwendig. Niemals Taxis ohne Taxameter nehmen (Abzocke besonders in Touristengebieten). Grab zeigt den Preis vorher an. Alternativ: <strong>BE App</strong> (lokale Alternative, manchmal günstiger).</li>
  <li><strong>Straßen überqueren</strong> — Langsam und stetig gehen, NICHT rennen und NICHT stehenbleiben. Die Motorräder weichen dir aus wenn du konsistente Geschwindigkeit hältst. Klingt verrückt, funktioniert.</li>
  <li><strong>Vietnam Kaffee</strong> — Robusta-Bohnen, sehr stark und dunkel geröstet. Mit Kondensmilch über Eis (Cà Phê Sữa Đá) der Klassiker. Säcke mit gemahlenen Bohnen als Souvenir in Ben Thành kaufen.</li>
  <li><strong>Bargeld</strong> — Kleinscheine (100.000 VND) für Streetfood und Märkte. ATMs überall in District 1. Feilschen auf Märkten nur mit Cash.</li>
  <li><strong>Chinatown (Cholon / Quận 5)</strong> — Großhandelsmarkt Bình Tây und das gesamte Chinatown-Viertel sind interessant zum Durchstreifen — mehr für die Atmosphäre als zum Kaufen.</li>
  <li><strong>Weiter nach Siem Reap:</strong> Flug HCMC → Siem Reap direkt (Angkor Air, Cambodia Airways) oder via Bangkok. Google Flights checken. Alternative: Bus oder Boot über Mekong-Grenze (~6–8h, günstiger aber lang).</li>
</ul>`,

      'Suchbegriffe': `"Saigon hidden gems local expat tips 2026"
"HCMC shopping local brands budget 2026"
"Ho Chi Minh City Saigon địa điểm hay người địa phương"
"Saigon underground cocktail bars speakeasy"
"indietraveller.co Ho Chi Minh City hidden gems"`,
    },
  },

  'siem-reap': {
    image:    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Angkor_Wat.jpg/1280px-Angkor_Wat.jpg',
    imageAlt: 'Angkor Wat bei Sonnenaufgang, Siem Reap, Kambodscha',
    intro: `
      <p>📅 <strong>7.–9. September</strong> — 2 Tage. Siem Reap ist der einzige Grund hierher zu kommen: die Angkor-Tempel.</p>
      <p>🎫 <strong>Angkor Pass:</strong> 1-Tages-Pass <strong>$37</strong> · 3-Tages-Pass <strong>$62</strong> (nicht aufeinanderfolgend nutzbar). Nur am offiziellen Ticketschalter kaufen — nicht von Händlern!</p>
      <p>🛂 <strong>Visa on Arrival ~$30</strong> an der Grenze. Oder E-Visum vorher: evisa.gov.kh. <strong>USD!</strong> Kambodscha nutzt den US-Dollar als De-facto-Währung.</p>
    `,
    pins: [
      { lat: 13.4125, lng: 103.8670, name: 'Angkor Wat ⭐⭐⭐',       desc: 'Größtes religiöses Bauwerk der Welt · Sonnenaufgang 5h' },
      { lat: 13.4414, lng: 103.8593, name: 'Bayon Temple ⭐⭐⭐',      desc: '200+ Steingesichter auf 54 Türmen · surreal' },
      { lat: 13.4348, lng: 103.8891, name: 'Ta Prohm ⭐⭐',           desc: 'Tomb-Raider-Tempel · von Bäumen überwachsen' },
      { lat: 13.4429, lng: 103.8575, name: 'Angkor Thom',             desc: 'Alte Hauptstadt · Südtor mit Naga-Brücke' },
      { lat: 13.5997, lng: 103.9651, name: 'Banteay Srei ⭐⭐',        desc: '25 km nördlich · feinste Schnitzereien · roter Sandstein' },
      { lat: 13.4297, lng: 103.8896, name: 'Banteay Kdei ⭐',         desc: 'Ruhige Ruine · wenig Touristen · ursprünglich' },
      { lat: 13.3611, lng: 103.8552, name: 'Old Market (Psar Chas)', desc: 'Seide · Holzschnitzerei · Feilschen ab 40%' },
      { lat: 13.3617, lng: 103.8556, name: 'Pub Street',              desc: 'Backpacker-Straße · Bier $0,50 · Essen günstig' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Angkor Wat ⭐⭐⭐</div>
    <div class="poi-desc">Das größte religiöse Bauwerk der Welt. Gebaut 1113–1150 von König Suryavarman II., ursprünglich als hinduistischer Tempel (Vishnu), heute buddhistisch. Ein 1,5 km breiter Wassergraben umgibt die gesamte Anlage. Die Bas-Reliefs entlang der Innenwände erzählen Szenen aus dem Hindu-Epos Mahabharata auf über 800 Metern Länge — die weltweit längste kontinuierliche Bas-Relief-Galerie. Die fünf Türme symbolisieren den kosmischen Berg Meru.</div>
    <span class="poi-meta">Im Angkor Pass · täglich 5–17:30 Uhr · 2–3h einplanen</span>
  </div>
  <div class="city-intro" style="margin: 0 0 8px">
    <strong>⏰ Angkor Wat — wann hingehen:</strong>
    <p>• <strong>Sonnenaufgang (5:00–6:30 Uhr):</strong> Tempel im Morgenrot — sehr schön, aber auch voll. Spiegelbecken westlich des Eingangs für perfekte Reflexionen.</p>
    <p>• <strong>Nachmittag ab 15:30 Uhr:</strong> Weniger Busgruppen, schöneres warmes Licht, etwas kühler. Lokale Empfehlung.</p>
    <p>• <strong>Mittags (11–14 Uhr):</strong> Am vollsten, heiß — in dieser Zeit Mittagspause im Schatten.</p>
  </div>
  <div class="poi">
    <div class="poi-name">Bayon Temple ⭐⭐⭐</div>
    <div class="poi-desc">Im Zentrum von Angkor Thom (der alten Hauptstadt), nördlich von Angkor Wat. Über 200 riesige steinerne Gesichter auf 54 Türmen, jedes ausgedrückt mit einem rätselhaften, leicht lächelnden Ausdruck. Faszinierend surreal — von bestimmten Winkeln siehst du dutzende Gesichter gleichzeitig, die dich aus verschiedene Richtungen anschauen. Einer der einprägsamsten Orte in ganz Südostasien.</div>
    <span class="poi-meta">Im Angkor Pass · Angkor Thom Komplex · 1–2h</span>
  </div>
  <div class="poi">
    <div class="poi-name">Ta Prohm ⭐⭐</div>
    <div class="poi-desc">Der "Tomb Raider Tempel" (hier wurden Szenen des Films gedreht). Die Khmer-Ruinen wurden bewusst nicht vollständig restauriert — riesige Feigenbäume (Strangler Figs) zwängen sich durch Mauern, heben Steine an, umklammern Türme mit ihren Wurzeln. Die Spannung zwischen Natur und Architektur ist einzigartig. <strong>Am besten früh morgens</strong> vor 8 Uhr besuchen, bevor die Busgruppen ankommen.</div>
    <span class="poi-meta">Im Angkor Pass · früh morgens! · 45–60 min</span>
  </div>
  <div class="poi">
    <div class="poi-name">Angkor Thom</div>
    <div class="poi-desc">Die ehemalige Hauptstadt des Khmer-Reichs, nördlich von Angkor Wat. Enthält Bayon sowie mehrere andere Monumente (Baphuon, Phimeanakas, Terrasse des Elefantenkönigs). Die fünf Eingangstore sind imposant: breite Brücken mit riesigen Naga-Schlangen als Geländer, überwacht von einem riesigen Gesicht. Der Weg durch das Südtor ist bereits ein Erlebnis.</div>
    <span class="poi-meta">Im Angkor Pass · Südtor mit Naga-Brücke beeindruckend</span>
  </div>
  <div class="poi">
    <div class="poi-name">Banteay Srei ⭐⭐</div>
    <div class="poi-desc">25 km nördlich von Siem Reap, ~45 min Fahrt (extra, nicht im Standard-Tuk-Tuk-Tagesrundgang inbegriffen — separat verhandeln). "Stadt der Frauen", gebaut aus rosafarbenem Sandstein, mit den feinsten und detailliertesten Schnitzereien des gesamten Angkor-Komplexes: Götter, mythische Szenen, Lotusblüten in exquisitem Relief. Kleiner als Angkor Wat, aber handwerklich beeindruckender. Lohnt die extra Fahrt absolut.</div>
    <span class="poi-meta">Im Angkor Pass · 25 km extra · extra Tuk-Tuk vereinbaren</span>
  </div>
  <div class="poi">
    <div class="poi-name">Banteay Kdei ⭐</div>
    <div class="poi-desc">Ruhige, weniger besuchte Tempelruine direkt neben Ta Prohm. Keine vollständige Restaurierung, ursprünglichere Atmosphäre — viele Steine liegen noch ungeordnet. Gut für Fotografie ohne Menschengedränge. Oft auf dem Weg zu/von Ta Prohm mit einschließen.</div>
    <span class="poi-meta">Im Angkor Pass · wenig Touristen · kombinierbar mit Ta Prohm</span>
  </div>
  <div class="poi">
    <div class="poi-name">Pre Rup</div>
    <div class="poi-desc">Tempel auf einem Hügel aus dem 10. Jahrhundert. Gut für Sonnenuntergang als Alternative zu Angkor Wat — weniger voll, ähnlich schönes Licht über den Tempelfeldern. Brick-and-Laterite Konstruktion.</div>
    <span class="poi-meta">Im Angkor Pass · Sonnenuntergang-Alternative</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Angkor als Architektur und Ingenieursleistung</div>
    <div class="poi-desc">Angkor Wat ist nicht nur ein Tempel — es ist eine kosmologische Karte in Stein. Die Anlage ist exakt nach Himmelsrichtungen ausgerichtet, der Wassergraben symbolisiert den kosmischen Ozean, die fünf Türme den Berg Meru (Weltachse). Die Bas-Reliefs sind nach einer klaren Narrations-Logik angeordnet, die man wie einen Comic lesen kann. Die Bautechnik ohne Mörtel (nur geschliffene Steinblöcke) unter tropischen Bedingungen über Jahrhunderte stabil zu halten ist bis heute bewundernswert. Für Design-Interessierte: die räumliche Hierarchie (Wasser → Mauer → Gänge → Türme) ist perfekt durchdacht.</div>
    <span class="poi-meta">Angkor Wat · Bas-Reliefs im 1. Umgang · 800m Länge</span>
  </div>
  <div class="poi">
    <div class="poi-name">Bayon als surreales Kunstwerk</div>
    <div class="poi-desc">Der Bayon ist vielleicht das faszinierendste einzelne Bauwerk in Angkor aus Kunstperspektive. Die 200+ Gesichter stammen möglicherweise alle vom König Jayavarman VII — es ist das einzige Mal in der Angkor-Geschichte dass ein Herrscher sich direkt in die Architektur einschrieb. Die Gesichter sind alle leicht unterschiedlich, aber alle mit demselben ruhigen Lächeln. Aus verschiedenen Winkeln ergeben sich immer neue Kompositionen von überlagernden Gesichtern.</div>
    <span class="poi-meta">Bayon Temple · Angkor Thom · Jayavarman VII</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Fish Amok ⭐⭐</div>
    <div class="poi-desc">Das Nationalgericht Kambodschas. Fisch (meist Süßwasserfisch) in einer cremigen Kokosmilch-Curry-Paste (Kroeung) mit Kaffir-Lime-Blättern, Lemongrass und Galgant, gedämpft in einem Bananenblatt oder einer Kokosnussschale. Mild, aromatisch, süßlich-würzig — einzigartig in dieser Form. Die Textur ist fast soufflé-artig durch das Dämpfen. Überall in Siem Reap erhältlich.</div>
    <span class="poi-meta">~$4–8 · überall · Nationalgericht Kambodschas</span>
  </div>
  <div class="poi">
    <div class="poi-name">Lok Lak ⭐</div>
    <div class="poi-desc">Gebratenes Rindfleisch oder Hühnchen in Soja- und Austernsauce angebraten, auf einem Bett aus frischem Salat und Tomaten serviert — mit einem Limette-Kampot-Pfeffer-Dip der alles zusammenbringt. Kampot-Pfeffer aus Kambodscha gilt als einer der besten Pfeffer der Welt. Meist mit gebrochenem Jasminreis. Sehr günstig und sehr befriedigend.</div>
    <span class="poi-meta">~$3–5 · lokale Restaurants · Kampot-Pfeffer ist besonders</span>
  </div>
  <div class="poi">
    <div class="poi-name">Bai Sach Chrouk</div>
    <div class="poi-desc">Das traditionelle Frühstück: gegrilltes Schweinefleisch über Kokosnuss-Holzkohle auf Jasminreis. Einfach, günstig, sättigend. Überall in den Morgenmarkt-Straßen, ~$2–3. Nur morgens erhältlich — mittags ist es weg.</div>
    <span class="poi-meta">~$2–3 · morgens · Frühstück der Kambodschaner</span>
  </div>
  <div class="poi">
    <div class="poi-name">Num Banh Chok (Khmer Noodles)</div>
    <div class="poi-desc">Frische Reisnudeln mit grüner Fisch-Curry-Sauce (aus frischen Kräutern, Galangal, Lemongrass) und rohem Gemüse. Das älteste kambodschanische Gericht, heute noch überall zu Frühstück und Mittagessen. Nur morgens an Straßenständen in Wohnvierteln — etwas suchen aber lohnt sich.</div>
    <span class="poi-meta">~$1–2 · morgens · Straßenstände in Wohnvierteln</span>
  </div>
  <div class="poi">
    <div class="poi-name">Fried Crickets / Tarantulas</div>
    <div class="poi-desc">Kambodschanische Spezialität falls du mutig bist — frittierte Grillen mit Knoblauch und Salz, oder gebratene Taranteln (Skuon ist 80 km entfernt, aber in Siem Reap auch erhältlich). Schmeckt nach Pommes mit Protein. Am Old Market angeboten.</div>
    <span class="poi-meta">Old Market · optional · knuspriger als erwartet</span>
  </div>
</div>`,

      'Geheimtipps': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Tonle Sap Lake ⭐</div>
    <div class="poi-desc">Südostasiens größter Süßwassersee, 20 km von Siem Reap. Einzigartiges Phänomen: Im Regenzeit-Monsun (Juni–November) steigt der Mekong so stark an dass der Fluss die Richtung umkehrt und Wasser in den Tonle Sap drückt — der See vervierfacht seine Fläche. Schwimmende Dörfer mit Häusern, Schulen, Kirchen komplett auf dem Wasser. Halbtagsausflug: Tuk-Tuk (~$15 hin und zurück) + Bootstour ($10–15).</div>
    <span class="poi-meta">20 km · Tuk-Tuk $15 + Boot $10–15 · Halbtagsausflug</span>
  </div>
  <div class="poi">
    <div class="poi-name">Landmine Museum ⭐</div>
    <div class="poi-desc">Kleines privates Museum über Landminen-Geschichte in Kambodscha. Gegründet vom ehemaligen Kindersoldat Aki Ra der heute Minen entschärft. Kambodscha ist eines der am stärksten mit Landminen verseuchten Länder der Welt — durch den Khmer Rouge und anschließende Konflikte. Sehr bewegend und wichtig für das Verständnis Kambodschas. ~$5 Eintritt, Geld geht direkt an die Organisation.</div>
    <span class="poi-meta">~$5 · außerhalb der Stadt · wichtiger Kontext</span>
  </div>
  <div class="poi">
    <div class="poi-name">Old Market (Psar Chas)</div>
    <div class="poi-desc">Lokaler Markt mit Seiden-Produkten, Holzschnitzereien, Lacquerware, Gewürzen und Kampot-Pfeffer. Besser als die Tourist-spezifischen Stände rund um Pub Street. Feilschen: bei 40% des Anfangspreises einsteigen, auf 50–60% einigen.</div>
    <span class="poi-meta">Feilschen ab 40% · Seide &amp; Gewürze · Psar Chas</span>
  </div>
  <div class="poi">
    <div class="poi-name">Pub Street (zur Orientierung)</div>
    <div class="poi-desc">Die Backpacker-Hauptstraße — touristisch, aber das gesellschaftliche Zentrum der Reisenden. Biere für $0,50 (!), Essen günstig, Musik, Massageangebote. Einmal durchlaufen schadet nicht. Die wirklich guten lokalen Restaurants liegen in den Seitenstraßen abseits der Pub Street.</div>
    <span class="poi-meta">Bier $0,50 · touristisch aber günstig · einmal anschauen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Asana Old Wooden House ⭐</div>
    <div class="poi-desc">Verstecktes Lokal hinter Pub Street, untergebracht im letzten erhaltenen traditionellen Holzhaus des Stadtzentrums. Einzigartige Kräuter-Cocktails aus lokalen Kräutern und Früchten, sehr coole atmosphärische Einrichtung auf mehreren Holzetagen. Nicht günstig für Siem Reap-Standard, aber besonders. Abends hingehen.</div>
    <span class="poi-meta">Abends · hinter Pub Street · traditionelles Holzhaus</span>
  </div>
</div>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>Angkor Pass:</strong> Am offiziellen Ticketschalter kaufen (Foto wird vor Ort gemacht). Nicht von Händlern kaufen. 1-Tages-Pass $37, 3-Tages-Pass $62. Öffnung Ticketschalter: 5:00 Uhr für Sonnenaufgang.</li>
  <li><strong>Tuk-Tuk (ganzer Tag):</strong> $15–25 verhandelbar. Der Fahrer bringt dich zu mehreren Tempeln, wartet zwischen den Stops. Bequemste Option, verhandeln am Abend vorher.</li>
  <li><strong>Fahrrad (~$5/Tag):</strong> Die Haupttempel (Angkor Wat, Bayon, Ta Prohm) liegen alle unter 10 km vom Zentrum. Heiß im August, aber machbar morgens.</li>
  <li><strong>Motorrad (~$10–12/Tag):</strong> Für Erfahrene — gibt maximale Freiheit. Banteay Srei und Tonle Sap dann eigenständig möglich.</li>
  <li><strong>Timings:</strong> Angkor Wat Sonnenaufgang 5:00 Uhr. Heißeste Zeit 11–14 Uhr → Mittagspause. Banteay Srei früh am Tag besuchen (vor dem Nachmittagsregen).</li>
  <li><strong>Kleidung:</strong> Schultern und Knie bedeckt in allen Tempeln — leichter Schal reicht. Strenge Kontrolle besonders bei Angkor Wat.</li>
  <li><strong>Wasser:</strong> Immer Wasser dabei — Siem Reap im August ist heiß und feucht. 2L/Tag mindestens. An Ständen an den Tempeln erhältlich.</li>
  <li><strong>USD:</strong> Alles läuft auf US-Dollar. Kleine Beträge kommen in Cambodian Riel als Wechselgeld zurück. Keine Scheine über $50 benutzen.</li>
</ul>`,

      'Suchbegriffe': `"Siem Reap hidden gems beyond Angkor Wat 2026"
"Angkor Wat tips avoid crowds 2026"
"Siem Reap local food Khmer restaurant budget"
"followthecoconuts.com Siem Reap guide"`,
    },
  },

  korat: {
    image:    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Entrance-phimai.jpg/1280px-Entrance-phimai.jpg',
    imageAlt: 'Phimai Historical Park – Khmer-Tempel in Nakhon Ratchasima (Korat), Thailand',
    intro: `
      <p>📅 <strong>Irgendwann mit Freundin</strong> — sie kennt die Stadt gut und navigiert. Bus ab Mo Chit Northern Bus Terminal, ~3 Stunden, ~150 Baht.</p>
      <p>🏛️ <strong>Phimai Historical Park</strong> ist das Highlight — ein Khmer-Tempel aus dem 11. Jahrhundert der möglicherweise das Vorbild für Angkor Wat war.</p>
    `,
    pins: [
      { lat: 15.2207, lng: 102.4976, name: 'Phimai Historical Park ⭐⭐⭐', desc: '11. Jhdt. · älter als Angkor · ~200 Baht · 60 km nördl.' },
      { lat: 14.9739, lng: 102.1006, name: 'Thao Suranari Monument ⭐',    desc: 'Stadtheldin "Mutter Mo" · Zentrum Altstadt · gratis' },
      { lat: 14.9744, lng: 102.1028, name: 'Wat Sala Loi ⭐',              desc: 'Tempel in Bootform auf Teich · ungewöhnlich · gratis' },
      { lat: 14.9648, lng: 102.1178, name: 'Save One Night Market ⭐⭐',   desc: 'Riesiger Nachtmarkt · sehr lokal · abends' },
      { lat: 14.9759, lng: 102.1000, name: 'Terminal 21 Korat',            desc: 'Lokales Shopping · günstiger Food Court' },
    ],
    panels: {
      'Sehenswürdigkeiten': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Phimai Historical Park ⭐⭐⭐</div>
    <div class="poi-desc">Die Hauptattraktion von Korat und einer der beeindruckendsten Orte Nordost-Thailands. 60 km nördlich von Korat (1h Bus ab Korat Bus Terminal 2, ~40 Baht). Khmer-Tempelkomplex aus dem <strong>11. Jahrhundert</strong> — ein Jahrhundert älter als Angkor Wat und möglicherweise das Vorbild oder ein Vorgängertyp für Angkor! Über eine antike Königsstraße direkt mit Angkor Thom in Kambodscha verbunden. Sandstein-Prangs mit fein ausgearbeiteten Türstürzen und hinduistischen Reliefs. Sehr ruhig — kaum Touristen verglichen mit Angkor. Schöner grüner Park drumherum ideal für ein Picknick.</div>
    <span class="poi-meta">~200 Baht · tägl. 9–17 Uhr · 60 km nördl. · Bus ab Terminal 2 ~40 Baht</span>
  </div>
  <div class="poi">
    <div class="poi-name">Thao Suranari Monument (Ya Mo) ⭐</div>
    <div class="poi-desc">Das wichtigste Stadtdenkmal. Helden-Statue der Stadtheldin "Mutter Mo" (Thao Suranari), die 1826 lokale Frauen und Einwohner zu einem überraschenden Sieg gegen ein laotisches Heer führte das die Stadt besetzte. Sehr bedeutend für das lokale Identitätsgefühl — Einheimische bringen täglich Blumenopfer und Räucherwerk. Manchmal spielen Musikgruppen traditionelle Lieder davor. Im Zentrum der Altstadt.</div>
    <span class="poi-meta">Gratis · Zentrum Altstadt · täglich besucht von Einheimischen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Wat Sala Loi ⭐</div>
    <div class="poi-desc">Einzigartiger moderner buddhistischer Tempel in Form eines Schiffs oder Bootes, scheinbar auf einem Teich schwimmend. Sehr ungewöhnliche Architektur für einen buddhistischen Tempel — das Schiff symbolisiert die Führung der Gläubigen durch das Leben. Die Innengestaltung mit Wandmalereien ist farbenfroh und aufwendig.</div>
    <span class="poi-meta">Gratis · Boot-/Schiffsform · moderner Tempel</span>
  </div>
  <div class="poi">
    <div class="poi-name">Wat Ban Rai *(30–40 km außerhalb)*</div>
    <div class="poi-desc">Riesiger moderner Tempel mit einer 27 Meter hohen Elefantenstatue, die von innen begehbar ist. Im Inneren des Elefanten: mehrstöckige Räume mit spektakulären, farbenfrohen Wandmalereien die buddhistische Kosmologie darstellen. Sehr bekannt bei Thai-Pilgern aus ganz Thailand. Lohnt sich wenn ihr einen Tagesausflug machen wollt.</div>
    <span class="poi-meta">30–40 km außerhalb · Elefant begehbar · Wandmalereien</span>
  </div>
</div>`,

      'Kunst & Design': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Phimai als Architektur</div>
    <div class="poi-desc">Phimai ist aus architektonischer Sicht faszinierend: Die Anlage ist von einer Stadtmauer umgeben, mit einem Tempelbezirk der an der gleichen kosmologischen Logik wie Angkor Wat aufgebaut ist (Wassergraben = Weltozean, Prang = Berg Meru). Die Türstürze über den Eingängen zeigen exquisite Schnitzereien von tanzenden Devatas, Hindu-Gottheiten und Kampfszenen — eine "Bildersprache" die direkt aus Indien über Java nach Südostasien kam. Als Design-Interessierter ist der Vergleich mit Angkor Wat nach diesem Besuch erhellend.</div>
    <span class="poi-meta">Phimai Historical Park · Türstürze besonders ansehen</span>
  </div>
  <div class="poi">
    <div class="poi-name">Dan Kwian Pottery Village</div>
    <div class="poi-desc">15 km von Korat auf dem Weg nach Phimai — guter Stopp auf der Hinfahrt. Traditionelles Töpferdorf, berühmt für seinen rostfarbenen Ton (hoher Eisengehalt) der beim Brennen diese charakteristische Terrakotta-Farbe bekommt. Große Vasen, dekorative Stücke, Gartenobjekte. Echter Handwerksbetrieb, gratis reinschauen, Stücke direkt vom Hersteller kaufen.</div>
    <span class="poi-meta">15 km · gratis · auf dem Weg nach Phimai</span>
  </div>
</div>`,

      'Essen & Streetfood': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Gai Yang (Gegrilltes Hähnchen) ⭐</div>
    <div class="poi-desc">Das Isan-Gericht schlechthin. Hähnchen in einer Marinade aus Knoblauch, Korianderwurzel, Fischsauce und Pfeffer über Holzkohle langsam gegrillt bis außen karamellisiert, innen saftig. Mit Klebreis und frischem Som Tam serviert. Überall in Korat für 50–80 Baht — die günstigste und befriedigendste Mahlzeit.</div>
    <span class="poi-meta">~50–80 Baht · überall · das Isan-Gericht</span>
  </div>
  <div class="poi">
    <div class="poi-name">Som Tam ⭐</div>
    <div class="poi-desc">Isan-Papayasalat — schärfer als die Bangkok-Version und mit fermentierten Zutaten (Pu Pla Ra) die intensiver sind. Vorsicht mit dem Schärfegrad beim Bestellen ("nit noi phet" = wenig scharf). Mit Klebreis und gegrilltem Hühnchen die klassische Isan-Kombination.</div>
    <span class="poi-meta">~30–50 Baht · schärfer als Bangkok · "nit noi phet" für mild</span>
  </div>
  <div class="poi">
    <div class="poi-name">Larb</div>
    <div class="poi-desc">Auch in Korat überall verbreitet — Hackfleischsalat mit Kräutern und geröstetem Reispulver. In Isan-Restaurants, sehr günstig. Die Isan-Version ist authentischer als die in Bangkok oder touristischen Restaurants.</div>
    <span class="poi-meta">~50–70 Baht · Isan-Restaurants</span>
  </div>
  <div class="poi">
    <div class="poi-name">Khao Tom ⭐</div>
    <div class="poi-desc">Reissuppe (Congee/Reisbrei), das typische Isan-Frühstück. Mit weichem Jasminreis in Brühe, eingelegtem Gemüse, Wachteleiern, gebratenen Teigstreifen und verschiedenen Beilagen. Sehr sättigend und mild. Morgens in kleinen Garküchen.</div>
    <span class="poi-meta">~40–60 Baht · Frühstück · Garküchen morgens</span>
  </div>
  <div class="poi">
    <div class="poi-name">Food Court Terminal 21</div>
    <div class="poi-desc">Der Food Court im Untergeschoss von Terminal 21 Korat ist bekannt für sehr gutes, günstiges Essen in einer sauberen Umgebung. Klimatisiert, viele Optionen. Beliebter Mittagstreff der Einheimischen. Für eine günstige Mahlzeit zwischendurch ideal.</div>
    <span class="poi-meta">~40–80 Baht · Terminal 21 Untergeschoss · klimatisiert</span>
  </div>
</div>`,

      'Geheimtipps': `
<div class="poi-list">
  <div class="poi">
    <div class="poi-name">Khao Yai National Park ⭐⭐</div>
    <div class="poi-desc">UNESCO-Welterbe, ~1,5h von Korat. Einer der besten Nationalparks in Thailand: tropischer Monsunwald, wilde Elefanten (Begegnungen auf der Straße!), Gibbons, über 300 Vogelarten, begehbare Wasserfälle (Haew Narok, Haew Suwat — aus dem Film "The Beach" bekannt). Früh morgens für Elefantensichtung auf der Hauptstraße durch den Park. Eintritt ~400 Baht. Guter Tagesausflug wenn ihr mehr Zeit habt.</div>
    <span class="poi-meta">~400 Baht · 1,5h von Korat · Elefanten früh morgens</span>
  </div>
  <div class="poi">
    <div class="poi-name">Save One Night Market ⭐⭐</div>
    <div class="poi-desc">Riesiger lokaler Nachtmarkt — das gesellschaftliche Zentrum von Korat abends. Essen, Trinken, Kleidung, Accessoires, Nagelstudios, Massage, alles was Thais im täglichen Alltag kaufen und brauchen. Null Touristen — echtes Korat. Preise sehr günstig. Abends hingehen für Atmosphäre und günstiges Abendessen.</div>
    <span class="poi-meta">Abends · Nordost-Teil der Stadt · keine Touristen</span>
  </div>
  <div class="poi">
    <div class="poi-name">100 Pee Muang Ya Market</div>
    <div class="poi-desc">Lokaler Abendmarkt nahe dem Bahnhof mit Street-Food aus der Isan-Küche. Kleiner als Save One Night Market, aber authentischer und näher am Zentrum. Gegrilltes Hühnchen, Som Tam, Klebreis, verschiedene Curries.</div>
    <span class="poi-meta">Abends · nah am Bahnhof · Isan Street-Food</span>
  </div>
</div>`,

      'Praktisches': `
<ul class="tip-list">
  <li><strong>Von Bangkok nach Korat:</strong> Bus ab Mo Chit Northern Bus Terminal, ~3h, ~150 Baht. Mehrere Abfahrten pro Stunde. Oder Zug ab Hua Lamphong (~2,5–4h). Grab für Verbindung zum Terminal.</li>
  <li><strong>In Korat:</strong> Grab oder Tuk-Tuk für Stadtverkehr — ohne Motorrad oder Auto sonst schwierig zu navigieren. Die Freundin kennt die Stadt — ihr folgen!</li>
  <li><strong>Nach Phimai:</strong> Bus ab Korat Bus Terminal 2 (nicht Terminal 1!) ~40 Baht, ~1h. Fahrplan: ungefähr stündlich. Vor Ort zu Fuß oder Tuk-Tuk.</li>
  <li><strong>Khao Yai Nationalpark:</strong> Eigener Transport notwendig (Grab fährt dort nicht hin). Tagesausflug mit Mietauto oder organisierter Tour ab Korat.</li>
  <li><strong>Deine Freundin navigiert</strong> — sie kennt die Stadt, die Großmutter, die lokalen Spots. Alles hier ist Backup-Info!</li>
</ul>`,

      'Suchbegriffe': `"โคราช เที่ยวไหนดี 2026" (Korat Tipps auf Thai)
"Phimai Historical Park guide 2026"
"Nakhon Ratchasima local food Isan"
"Khao Yai National Park day trip from Korat"`,
    },
  },
};

const PANELS = [
  { icon: '🏛️', title: 'Sehenswürdigkeiten', code: false },
  { icon: '🎨', title: 'Kunst & Design',      code: false },
  { icon: '🍜', title: 'Essen & Streetfood',  code: false },
  { icon: '💡', title: 'Geheimtipps',         code: false },
  { icon: '🗺️', title: 'Praktisches',         code: false },
  { icon: '🤖', title: 'Suchbegriffe',          code: true  },
];

const TIMELINE = [
  ['1. Aug',           '🚌 München → Zürich',         'Flixbus 7:30–11:20 Uhr'],
  ['1.–4. Aug',        '🇨🇭 Zürich',                  'Sa+So mit Clement, Mo+Di offen'],
  ['5. Aug',           '✈️ Zürich → Istanbul',         '7:40–11:40 Uhr'],
  ['5.–6. Aug',        '🇹🇷 Istanbul',                 'Archeo Hostel, Tophane/Karaköy'],
  ['7. Aug',           '✈️ Istanbul → Bangkok',        '2:00–15:25 Uhr'],
  ['7.–14. Aug',       '🇹🇭 Bangkok',                  'Ankommen, 1 Woche mit Freundin'],
  ['15. Aug',          '🚂 Bangkok → Nong Khai',       'Übernachtzug'],
  ['16. Aug morgens',  '🇹🇭 Nong Khai',                'Kurzstopp ~2–3h, dann Grenze'],
  ['16.–22. Aug',      '🇱🇦 Laos (flexibel)',          'Nichts gebucht — Vientiane Einstieg, Luang Prabang wahrscheinlichster Ausstieg, Rest offen'],
  ['23. Aug',          '✈️ Luang Prabang → Da Nang',   ''],
  ['23.–25. Aug',      '🇻🇳 Da Nang',                  '3 Tage'],
  ['25.–27. Aug',      '🇻🇳 Hội An',                   '2 Tage'],
  ['27. Aug',          '✈️ Da Nang → Bangkok',         ''],
  ['28. Aug–3. Sept',  '🇹🇭 Bangkok',                  'Inkl. 🎂 30. Aug Geburtstag'],
  ['3. Sept',          '✈️ Bangkok → HCMC',            ''],
  ['3.–7. Sept',       '🇻🇳 Ho Chi Minh City',         '4 Tage Shopping'],
  ['7. Sept',          '✈️ HCMC → Siem Reap',         ''],
  ['7.–9. Sept',       '🇰🇭 Angkor Wat / Siem Reap',   '2 Tage'],
  ['9. Sept',          '✈️ Siem Reap → Bangkok',       ''],
  ['9. Sept–1. Okt',   '🇹🇭 Bangkok',                  '~3 Wochen mit Freundin'],
  ['irgendwann',       '🇹🇭 Korat',                    'Oma + Phimai Tempel'],
  ['1. Okt',           '✈️ Bangkok → München',         '21:45 → 09:05 (via Istanbul)'],
];

const VISA = [
  { country: '🇹🇷 Türkei',     type: 'E-Visum',           cost: '~35 €',   how: 'Vorab: evisa.gov.tr' },
  { country: '🇹🇭 Thailand',    type: 'Visumfrei 60 Tage', cost: 'gratis',  how: '—' },
  { country: '🇱🇦 Laos',       type: 'Visa on Arrival',   cost: '~35 USD', how: 'An Grenze — 1 Passfoto mitbringen!' },
  { country: '🇻🇳 Vietnam',     type: 'E-Visum',           cost: '~25 €',   how: 'Vorab: evisa.gov.vn' },
  { country: '🇰🇭 Kambodscha',  type: 'Visa on Arrival',   cost: '~30 USD', how: 'An Grenze oder evisa.gov.kh' },
];
