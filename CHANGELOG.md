# Changelog

## [1.2.0] - 2026-06-01

### Added

#### Extension UI Theme System
- 8 preset warna tema: BNI Blue, Indigo, Violet, Teal, Green, Red, Orange, Slate
- Custom color picker bebas untuk warna kustom
- Semua elemen UI ikut berubah warna: popup, toolbar editor, panel, modal, ribbon button
- Tema tersimpan di `chrome.storage.sync` dan berlaku ke semua tab Sitecore

#### Media Library Usage Checker
- Deteksi otomatis saat user berada di Media Library browser
- Teks usage count (contoh: "2 usages") di setiap media card menjadi clickable
- Popup menampilkan daftar item yang menggunakan media tersebut
- Klik item referensi → membuka Content Editor di tab baru langsung ke item tersebut
- Menggunakan Sitecore `Gallery.Links` API (Link Database, 100% akurat)
- Floating panel juga muncul di Content Editor saat media item dipilih di tree

#### Experience Editor Toggle Ribbon
- Tombol burger (☰) fixed di pojok kanan atas Experience Editor
- Toggle sembunyikan/tampilkan ribbon dengan satu klik
- State tersimpan di cookie — persist antar reload
- Support Sitecore 10+ (`[data-sc-id=PageEditBar]`) dan legacy (`#scWebEditRibbon`)

#### Content Editor State Preservation
- Toggle di popup: "Preserve Editor State"
- Setelah refresh/reload browser, tetap di item yang sama di Content Tree
- Tree dan content panel kanan keduanya navigate ke item yang benar
- Menggunakan Sitecore JS API (`scForm.postEvent` dengan `tree:click`)
- State tersimpan di `localStorage` — persist antar reload tab

### Changed
- CSS arsitektur beralih ke CSS Custom Properties (`var(--sgkh-c-*)`)
- Semua warna UI extension dapat dikonfigurasi via tema
- Toolbar Scriban editor menggunakan warna tema extension
- Versi manifest diperbarui ke 1.2.0

### Fixed
- Tombol `{ }` dan `⊞ Modal` tidak lagi memicu form submission Sitecore
  (ditambahkan `type="button"` pada semua tombol injected)
- Save Scriban — perubahan kini tersimpan dengan benar saat klik Save di Sitecore
  (menggunakan native DOM setter agar form serialization membaca nilai baru)
- Theme extension tidak berubah saat dipilih dari popup
  (perbaikan TDZ dan storage.onChanged call tanpa argumen)

---

## [1.1.0] - 2026-05-31

### Added

#### Scriban Editor Enhancements
- **11 Tema Editor**: Monokai (default), One Dark, Dracula, GitHub Light/Dark,
  Material Light/Dark, Nord, Solarized Light/Dark, Default Light
- **HTML Highlighting**: Tag, class, id HTML dalam template Scriban
- **Autocomplete Sitecore SXA**: 100+ suggestion (`i_item`, `sc_field`, `sc_link`,
  `string.upcase`, `array.size`, dll.) dengan tooltip dokumentasi
- **Indent Guide**: Garis panduan indentasi solid/dashed, custom color picker
- **Modal Editor**: Buka editor Scriban dalam popup modal yang bisa di-resize
- Toggle on/off per fitur di popup extension

#### Popup Settings
- Dropdown tema editor CodeMirror (11 pilihan)
- Feature toggles: HTML Highlighting, Autocomplete, Error Detection, Indent Guide
- Toggle "Preserve Editor State" (Content Editor)

### Fixed
- Build: tambah `@babel/runtime` dependency untuk `@uiw` theme packages
- Regex deteksi Content Editor URL (`Content%20Editor`) diperbaiki

---

## [1.0.0] - 2026-05-31

### Added

#### Scriban Editor (Core)
- Deteksi otomatis textarea Scriban di Content Editor & SXA Variant Editor
- CodeMirror 6 editor menggantikan textarea default Sitecore
- Syntax highlighting Scriban: keyword, string, number, operator
- Line numbers di gutter kiri
- Error detection: `{{` tidak ditutup, block `if/for` tanpa `end`
- Light/Dark theme toggle
- Bracket matching, auto-close, search panel
- Toolbar dengan toggle source textarea
- `type="button"` pada semua tombol (mencegah WebForms postback)
- Native DOM setter untuk sync nilai ke Sitecore form serialization
- `all_frames: true` — bekerja di semua iframe Sitecore Content Editor

#### Extension Infrastructure
- Manifest V3 (Chrome Extension)
- Content scripts match: `*://*/sitecore/*`, `*://*.local/*`, `localhost`, `127.0.0.1`
- Popup UI dengan dark theme
- Settings tersimpan di `chrome.storage.sync`
- Build system: esbuild bundler, `npm run pack` menghasilkan ZIP siap install
