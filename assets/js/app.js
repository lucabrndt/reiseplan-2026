/* Reiseplan 2026 — Seitenaufbau & Interaktion.
   Benötigt die Daten aus data.js (davor eingebunden). */

/* ═══════════════════════════════════════════════
   BUILD DOM
═══════════════════════════════════════════════ */

// Timeline — vertical dots
(function buildTimeline() {
  const list = document.getElementById('timeline-body');
  TIMELINE.forEach(([date, place, detail]) => {
    const dotClass = place.includes('✈️') ? 'flight' : place.includes('🚌') ? 'bus' : place.includes('🚂') ? 'train' : '';
    const item = document.createElement('div');
    item.className = 'tl-item';
    item.innerHTML = `
      <div class="tl-dot ${dotClass}"></div>
      <div class="tl-card">
        <span class="tl-date">${date}</span>
        <span class="tl-place">${place}</span>
        ${detail ? `<span class="tl-detail">${detail}</span>` : ''}
      </div>`;
    list.appendChild(item);
  });
})();

// City sections
(function buildCities() {
  const container = document.getElementById('cities-container');

  CITIES.forEach((city, ci) => {
    const cc = CC[city.id];

    const accordionHTML = PANELS.map(p => {
      let body;
      if (p.code) {
        const kiText = cc?.panels?.['Suchbegriffe']
          || `<!-- Suchbegriffe für ${city.name} kommen hier -->`;
        body = `<div class="code-wrap">
          <button class="copy-btn" type="button">Kopieren</button>
          <pre class="ki-code"><code>${kiText}</code></pre>
        </div>`;
      } else if (cc?.panels?.[p.title]) {
        body = cc.panels[p.title];
      } else {
        body = `<p class="placeholder-note">Inhalt folgt …</p>`;
      }

      return `
        <div class="accordion-item" data-panel-idx="${PANELS.indexOf(p)}">
          <button class="accordion-header" aria-expanded="false">
            <span class="acc-icon">${p.icon}</span>
            <span class="acc-title">${p.title}</span>
            <span class="acc-arrow">›</span>
          </button>
          <div class="accordion-body" role="region">
            <div class="accordion-body-inner">
              <div class="accordion-content">${body}</div>
            </div>
          </div>
        </div>`;
    }).join('');

    const heroImg = cc?.image
      ? `<img src="${cc.image}" alt="${cc.imageAlt || ''}" class="city-hero-img" loading="lazy" />`
      : '';

    const introHTML = cc?.intro
      ? `<div class="city-intro">${cc.intro}</div>`
      : '';

    const section = document.createElement('section');
    section.id = city.id;
    section.className = 'city-section';
    section.innerHTML = `
      <div class="city-hero" style="background:${city.gradient}">
        ${heroImg}
        <span class="city-stop">Stopp ${ci + 1} von ${CITIES.length}</span>
        <div class="city-hero-inner">
          <span class="city-flag">${city.flag}</span>
          <h2 class="city-name">${city.name}</h2>
          <p class="city-dates">${city.dates}</p>
        </div>
      </div>
      <div class="city-body">
        <div class="container">
          <div class="city-layout">
            <div class="city-layout-content">${introHTML}</div>
            <div class="city-layout-map">
              <div class="city-map-embed mymaps-frame">
                <iframe src="https://www.google.com/maps/d/embed?mid=${MYMAPS_MID}&ehbc=${MYMAPS_EHBC}&ll=${city.lat},${city.lng}&z=${city.zoom}" loading="lazy"></iframe>
                <div class="mymaps-frame-overlay"><span>Zum Interagieren tippen</span></div>
              </div>
            </div>
          </div>
          <div class="accordion">${accordionHTML}</div>
        </div>
      </div>`;

    container.appendChild(section);
  });
})();

// Visa cards
(function buildVisa() {
  const grid = document.getElementById('visa-grid');
  VISA.forEach(v => {
    const card = document.createElement('div');
    card.className = 'visa-card';
    card.innerHTML = `
      <div class="vc-country">${v.country}</div>
      <div class="vc-type">${v.type}</div>
      <div class="vc-how">${v.how}</div>
      <span class="vc-cost">${v.cost}</span>`;
    grid.appendChild(card);
  });

  // Apps grid
  const APPS = [
    { name: '🚕 Grab',          desc: 'Taxi & Motorrad in ganz Südostasien. Vorab herunterladen + Kreditkarte verknüpfen!', url: 'grab.com' },
    { name: '🚂 12go.asia',     desc: 'Busse, Züge, Fähren buchen in Laos, Vietnam, Thailand. Laos-Bahn hier buchen!', url: '12go.asia' },
    { name: '🌐 Google Translate', desc: 'Offline-Pakete herunterladen: Laotisch, Thai, Vietnamesisch, Khmer (Kamera-Übersetzung!)', url: '' },
    { name: '🗺️ Maps.me',       desc: 'Offline-Karten die ohne Internet funktionieren. Für Gebiete ohne SIM-Empfang.', url: '' },
    { name: '💱 XE Currency',   desc: 'Wechselkurse in Echtzeit. Baht, KIP, VND, Riel, USD immer parat.', url: '' },
    { name: '🏨 Hostelworld',   desc: 'Hostel-Buchungen. Kurzfristig in Südostasien meist noch Plätze verfügbar.', url: '' },
  ];
  const appsGrid = document.getElementById('apps-grid');
  if (appsGrid) {
    APPS.forEach(a => {
      const card = document.createElement('div');
      card.className = 'visa-card';
      card.innerHTML = `
        <div class="vc-country">${a.name}</div>
        <div class="vc-type">${a.desc}</div>
        ${a.url ? `<span class="vc-cost">${a.url}</span>` : ''}`;
      appsGrid.appendChild(card);
    });
  }

  // Master prompts
  const masterEl = document.getElementById('master-prompts');
  if (masterEl) {
    masterEl.textContent = `ALLGEMEIN (für jede Stadt einsetzen):
"[Stadt] hidden gems local tips budget backpacker 2026"
"[Stadt] was [lokale Sprache]-sprechende Locals empfehlen"
"[Stadt] free things to do 2026"

LOKAL-SPRACHIGE SUCHEN (Google & TikTok):
Thai:         "[Stadt] เที่ยวไหนดี ซ่อนเร้น 2026"
Vietnamesisch: "[Stadt] địa điểm hay người địa phương 2026"
Laotisch:     "[Stadt] ສະຖານທີ່ດີ ທ່ອງທ່ຽວ"
Türkisch:     "[Stadt] gizli güzellikler yerel ipuçları 2026"

NÜTZLICHE WEBSITES:
Bangkok:    wongnai.com (auf Thai)
Hội An:     hiddenhoian.com
Istanbul:   enuygun.com, miskets.com (auf Türkisch)
Laos:       travelfish.org
Vietnam:    vietadvisor.travel
Kambodscha: followthecoconuts.com`;
  }
})();

/* ═══════════════════════════════════════════════
   ACCORDION LOGIC
═══════════════════════════════════════════════ */

document.addEventListener('click', e => {
  const btn = e.target.closest('.accordion-header');
  if (!btn) return;
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  btn.closest('.accordion-item')
     .querySelector('.accordion-body')
     .classList.toggle('open', !expanded);
});

/* ═══════════════════════════════════════════════
   COPY BUTTON
═══════════════════════════════════════════════ */

document.addEventListener('click', e => {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;
  const code = btn.closest('.code-wrap').querySelector('code');
  navigator.clipboard.writeText(code.textContent.trim()).then(() => {
    btn.textContent = '✓ Kopiert!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Kopieren';
      btn.classList.remove('copied');
    }, 2000);
  });
});

/* ═══════════════════════════════════════════════
   MAPS
═══════════════════════════════════════════════ */

// Google-My-Maps-Karten: erst nach Klick/Tipp bedienbar, damit Scrollen
// (Maus wie Finger) nicht versehentlich in der Karte landet.
document.addEventListener('click', e => {
  const frame = e.target.closest('.mymaps-frame');
  // Karte, die nicht angetippt wurde, wieder sperren — auf dem Handy ist das
  // der einzige Weg zurück, da es dort kein mouseleave gibt.
  document.querySelectorAll('.mymaps-frame.is-active').forEach(f => {
    if (f !== frame) f.classList.remove('is-active');
  });
  if (frame) frame.classList.add('is-active');
});

// Desktop: sobald die Maus die Karte verlässt, ist sie wieder gesperrt.
document.addEventListener('mouseout', e => {
  const frame = e.target.closest('.mymaps-frame');
  if (frame && !frame.contains(e.relatedTarget)) frame.classList.remove('is-active');
});

/* ═══════════════════════════════════════════════
   ACTIVE NAV LINK ON SCROLL
═══════════════════════════════════════════════ */

function updateNav() {
  const y = window.scrollY + 80;
  let current = 'uebersicht';
  document.querySelectorAll('section[id]').forEach(s => {
    if (s.offsetTop <= y) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ═══════════════════════════════════════════════
   HAMBURGER MENU
═══════════════════════════════════════════════ */

(function initHamburger() {
  const btn   = document.getElementById('nav-hamburger');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close when a nav link is clicked
  links.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();
