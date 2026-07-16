#!/usr/bin/env python3
"""Verifiziert die mit "⚠️ Koordinaten" markierten Placemarks in data/reiseplan-2026.kml
über den Google-Maps-MCP-Worker (geocode_address, Fallback search_places).

Ausführen sobald das API-Tagesquota zurückgesetzt ist (Mitternacht Pacific Time,
d.h. ~9:00 Uhr MESZ):    python3 scripts/verify-koordinaten.py

Bricht bei erneutem Quota-Fehler sauber ab; bereits verifizierte Placemarks
bleiben unangetastet — das Skript kann beliebig oft erneut laufen.
"""
import json, re, subprocess, time, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
KML = os.path.join(HERE, '..', 'data', 'reiseplan-2026.kml')
URL = "https://luca-maps-mcp-server.lucabrndt.workers.dev/mcp/702fe3ed2d988960b8c41a69dbae565f06f9b167"
MARKER = re.compile(r'⚠️ Koordinaten [^|]*')

# Placemark-Name -> Geocoding-Query (Stadt/Land enthalten für bessere Treffer)
QUERIES = {'"100 Waterfalls"-Trek ⭐⭐': '100 Waterfalls Trek, Nong Khiaw, Laos',
 '100 Pee Muang Ya Market': '100 Pi Mueang Ya Market, Nakhon Ratchasima, Thailand',
 '22 Lý Tự Trọng (Apartment Building)': '22 Lý Tự Trọng, District 1, Ho Chi Minh City, Vietnam',
 'Acapulco Bar': 'Acapulco Bar, Zürich, Switzerland',
 'Altstadt / Niederdorf': 'Niederdorf, Zürich, Switzerland',
 'Asana Old Wooden House ⭐': 'Asana Old Wooden House, Siem Reap, Cambodia',
 'Balık Dürüm / Balık Ekmek ⭐': 'Balık Dürüm Mehmet Usta, Karaköy, Istanbul',
 'Bamboo Garden Restaurant ⭐': 'Bamboo Garden Restaurant, Luang Prabang, Laos',
 'Ban Chan Pottery Village ⭐': 'Ban Chan Pottery Village, Luang Prabang, Laos',
 'Botanischer Garten': 'Botanischer Garten der Universität Zürich',
 'Bratwurst vom Sternen Grill ⭐': 'Sternen Grill, Bellevueplatz, Zürich',
 'Bánh Mì Huỳnh Hoa ⭐⭐': 'Bánh Mì Huỳnh Hoa, Ho Chi Minh City, Vietnam',
 'Börek': 'Balat Börekçisi, Balat, Istanbul',
 'CT Restaurant': 'CT Restaurant and Bakery, Nong Khiaw, Laos',
 'Chao Phraya Sky Park': 'Chao Phraya Sky Park, Bangkok',
 'Chennai': 'Chennai Restaurant, Nong Khiaw, Laos',
 'Cihangir': 'Cihangir, Beyoğlu, Istanbul',
 'Craft Beer-Szene': 'Pasteur Street Brewing Company, District 1, Ho Chi Minh City, Vietnam',
 'Dan Kwian Pottery Village': 'Dan Kwian Pottery Village, Nakhon Ratchasima, Thailand',
 "Delilah's": "Delilah's Cafe, Nong Khiaw, Laos",
 'Die Altstadt (Phố Cổ) ⭐⭐⭐': 'Hoi An Ancient Town, Hoi An, Vietnam',
 'Egg Coffee (Cà Phê Trứng)': 'Storii Coffee, Ho Chi Minh City, Vietnam',
 'Formula B ⭐': 'Formula B Cafe, Luang Prabang, Laos',
 'Frühmorgens einkaufen am Hội An Markt': 'Hoi An Central Market, Hoi An, Vietnam',
 'Großer Basar (Kapalı Çarşı)': 'Grand Bazaar Kapalı Çarşı, Istanbul',
 'Hai Van Pass ⭐': 'Hai Van Pass, Vietnam',
 'Han River Promenade': 'Bạch Đằng Street, Hải Châu, Da Nang, Vietnam',
 'Ho Thi Ky Market (Quận 10) ⭐': 'Hồ Thị Kỷ Flower Market, District 10, Ho Chi Minh City, Vietnam',
 'Islak Burger ⭐': 'Kızılkayalar Hamburger, Taksim, Istanbul',
 'Jay Fai ⭐': 'Jay Fai Restaurant, Bangkok',
 'Kajak ab der Namsong Blue Bridge ⭐': 'Namsong Blue Bridge, Vang Vieng, Laos',
 'Karaköy Güllüoğlu Baklava ⭐⭐': 'Karaköy Güllüoğlu, Istanbul',
 'Karaköy — dein Hostel-Viertel!': 'Karaköy, Beyoğlu, Istanbul',
 'Khao Yai National Park ⭐⭐': 'Khao Yai National Park, Thailand',
 'Klong Lat Mayom Floating Market': 'Khlong Lat Mayom Floating Market, Bangkok',
 'Kreis 4 & 5 / Langstrasse': 'Langstrasse, Zürich, Switzerland',
 'Kräuter-Dampfbad & Massage "Sabai Sabai"': 'Sabai Sabai Massage, Nong Khiaw, Laos',
 'La Tanza': 'La Tanza, Zürich, Switzerland',
 'Landmine Museum ⭐': 'Cambodia Landmine Museum, Siem Reap, Cambodia',
 'Lisha (The Grand) Riverside Hotel': 'Lisha The Grand Riverside Hotel, Vang Vieng, Laos',
 'Luxemburgerli bei Sprüngli (Bahnhofstrasse)': 'Confiserie Sprüngli, Paradeplatz, Zürich',
 'Mandala Ou Resort': 'Mandala Ou Resort, Nong Khiaw, Laos',
 'Markthalle im Viadukt (Kreis 5)': 'Markthalle Im Viadukt, Zürich',
 'Midye Dolma ⭐⭐': 'Tarihi Karaköy Midyecisi, Karaköy, Istanbul',
 'Mr. Mo Restaurant ⭐⭐': 'Mr Mo Restaurant, Vang Vieng, Laos',
 'Muang Ngoi Viewpoint': 'Phanoi Viewpoint, Muang Ngoy, Laos',
 'Mönch-Chats am Sangha College': 'Sangha College, Vientiane, Laos',
 'Mỹ Sơn Sanctuary als Architektur': 'My Son Sanctuary, Quang Nam, Vietnam',
 'Naem Nuang ⭐': 'Daeng Namnuang, Nong Khai, Thailand',
 'Notre Dame Cathedral': 'Notre Dame Cathedral of Saigon, Ho Chi Minh City, Vietnam',
 'Ock Pop Tok Living Crafts Centre': 'Ock Pop Tok Living Crafts Centre, Luang Prabang, Laos',
 'Pham Viet Chanh Street': 'Phạm Viết Chánh, Bình Thạnh, Ho Chi Minh City, Vietnam',
 'Phra That Nong Khai ("Versunkene Pagode")': 'Phra That Nong Khai, Nong Khai, Thailand',
 'Phu Mai Café': 'Phu Mai Cafe, Vang Vieng, Laos',
 'Phở Lê (District 11) ⭐': 'Phở Lê, Nguyễn Trãi, Ho Chi Minh City, Vietnam',
 'Pre Rup': 'Pre Rup Temple, Siem Reap, Cambodia',
 'Sa-Ard 100 Pi Market (Wochenendmarkt)': 'Sa-Ard 100 Year Market, Nong Khai, Thailand',
 'Saigon Central Post Office ⭐': 'Saigon Central Post Office, Ho Chi Minh City, Vietnam',
 'Sleeping Woman Viewpoint': 'Sleeping Woman Viewpoint, Nong Khiaw, Laos',
 'Sokview Residence ⭐⭐': 'Sokview Residence, Luang Prabang, Laos',
 'Sonnenuntergang von der Brücke statt vom Viewpoint': 'Nong Khiaw Bridge, Nong Khiaw, Laos',
 'Sukkulenten-Sammlung': 'Sukkulenten-Sammlung Zürich, Mythenquai, Zürich',
 'Tad Sae Wasserfall ⭐': 'Tad Sae Waterfall, Luang Prabang, Laos',
 'Tag 1: Thakhek → Thalang': 'Thalang Village, Khammouane, Laos',
 'Tag 2: Thalang → Kong Lor Village': 'Ban Kong Lor, Khammouane, Laos',
 'Tag 4: Nahin → zurück nach Thakhek': 'Ban Nahin, Khammouane, Laos',
 'Tham Nam (Wasserhöhle)': 'Tham Nam Water Cave, Vang Vieng, Laos',
 'Tham Sang Dreieck (4 Höhlen)': 'Tham Xang Cave, Vang Vieng, Laos',
 'Tonle Sap Lake ⭐': 'Chong Khneas, Siem Reap, Cambodia',
 'Vietnamese Local Brands ⭐⭐⭐': 'Đặng Thị Nhu Street, District 1, Ho Chi Minh City, Vietnam',
 'Vongmany Restaurant': 'Vongmany Restaurant, Nong Khiaw, Laos',
 'Wat Ban Rai *(30–40 km außerhalb)*': 'Wat Ban Rai, Nakhon Ratchasima, Thailand',
 'White Rose Dumplings (Bánh Bao Vạc) ⭐': 'White Rose Restaurant, Hoi An, Vietnam',
 'Zürichsee': 'Zürichsee, Switzerland',
 'sBier Brauerei (Kilchberg)': 'sBier Brauerei, Kilchberg, Switzerland',
 'İstanbul Modern': 'Istanbul Modern, Karaköy, Istanbul'}

def rpc(payload, session=None):
    cmd = ['curl','-sS','-i','-X','POST',URL,'-H','Content-Type: application/json',
           '-H','Accept: application/json, text/event-stream']
    if session: cmd += ['-H', f'mcp-session-id: {session}']
    cmd += ['-d', json.dumps(payload)]
    out = subprocess.run(cmd, capture_output=True, text=True, timeout=40).stdout
    m = re.search(r'^mcp-session-id: (\S+)', out, re.M|re.I)
    sid = m.group(1) if m else session
    dm = re.findall(r'^data: (.*)$', out, re.M)
    return (json.loads(dm[-1]) if dm else {}), sid

def lookup(tool, args, sid):
    data,_ = rpc({"jsonrpc":"2.0","id":1,"method":"tools/call",
                  "params":{"name":tool,"arguments":args}}, sid)
    content = data.get('result',{}).get('content',[])
    txt = content[0]['text'] if content else ''
    if 'Quota exceeded' in txt: return 'quota', None
    try: parsed = json.loads(txt)
    except Exception: return 'fail', None
    if isinstance(parsed, list) and parsed:
        r0 = parsed[0]; loc = r0.get('location', {})
        lat = loc.get('latitude'); lng = loc.get('longitude')
        addr = r0.get('formatted_address') or r0.get('address') or ''
        if lat is not None: return 'ok', (lat, lng, addr)
    return 'fail', None

def esc(s): return s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')

kml = open(KML, encoding='utf8').read()
pm_re = re.compile(r'<Placemark>\s*<name>(.*?)</name>\s*<description>(.*?)</description>(.*?)</Placemark>', re.S)

todo = [(m.group(1)) for m in pm_re.finditer(kml) if MARKER.search(m.group(2))]
print(f"{len(todo)} Placemarks zu verifizieren")
if not todo: sys.exit(0)

_, SID = rpc({"jsonrpc":"2.0","id":0,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"verify","version":"1"}}})
rpc({"jsonrpc":"2.0","method":"notifications/initialized"}, SID)

fixed = 0
for name in todo:
    query = QUERIES.get(name.replace('&amp;','&'))
    if not query:
        print(f"  ??  keine Query für: {name}"); continue
    st, hit = lookup('geocode_address', {'address': query}, SID)
    if st == 'quota':
        st, hit = lookup('search_places', {'query': query}, SID)
    if st == 'quota':
        print("  Quota erneut erreicht — später nochmal laufen lassen."); break
    if st != 'ok':
        print(f"  kein Treffer: {name}  ({query})"); continue
    lat, lng, addr = hit
    # Placemark-Block dieses Namens patchen
    block_re = re.compile(r'(<Placemark>\s*<name>' + re.escape(name) + r'</name>\s*<description>)(.*?)(</description>.*?<coordinates>)[^<]*(</coordinates>)', re.S)
    def repl(m):
        desc = MARKER.sub(esc(addr) if addr else 'via Google Maps verifiziert', m.group(2), count=1)
        return m.group(1) + desc + m.group(3) + f"{round(lng,6)},{round(lat,6)},0" + m.group(4)
    kml, n = block_re.subn(repl, kml, count=1)
    if n: fixed += 1; print(f"  ok  {name} -> {round(lat,5)},{round(lng,5)}")
    open(KML, 'w', encoding='utf8').write(kml)
    time.sleep(0.4)

print(f"\n{fixed} Placemarks aktualisiert, {len(todo)-fixed} verbleiben.")
