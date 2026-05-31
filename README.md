# Sitecore Dev Tools â€” Chrome Extension

Chrome Extension untuk mempermudah developer yang bekerja dengan **Sitecore XM** â€” khususnya editor Scriban template, Content Editor state preservation, dan Experience Editor ribbon toggle.

---

## Download & Install

**[â¬‡ Download Latest Release](https://github.com/rhyoharianja/sitecore-dev-tools-chrome-extension/releases/latest)**

### Cara Install (Manual / Developer Mode)

1. Download file **`sitecore-dev-tools-v*.zip`** dari link di atas
2. Buka Chrome â†’ `chrome://extensions/`
3. Aktifkan **Developer mode** (toggle kanan atas)
4. Drag & drop file `.zip` ke halaman extensions
5. Extension siap digunakan âœ“

---

## Fitur

### Scriban Editor (Content Editor & Variant Editor)
Editor Scriban yang ditingkatkan dengan CodeMirror 6 â€” menggantikan textarea default Sitecore.

| Fitur | Detail |
|---|---|
| **Syntax Highlighting** | Keyword, string, number, operator, HTML tag/class/id |
| **11 Tema** | Monokai (default), One Dark, Dracula, GitHub Light/Dark, Material, Nord, Solarized, dll |
| **Line Numbers** | Ditampilkan di gutter kiri |
| **Autocomplete** | 100+ suggestion: `i_item`, `sc_field`, `string.upcase`, `array.size`, dll |
| **Error Detection** | Linter: `{{` tidak ditutup, block `if/for` tanpa `end` |
| **Indent Guide** | Garis panduan indentasi (solid/dashed, warna custom) |
| **Modal Editor** | Buka editor dalam modal popup yang bisa di-resize |
| **Dark / Light Theme** | Switch tema langsung dari toolbar editor |

### Content Editor â€” Preserve State
Setelah refresh/reload browser, tetap di item yang sama di Content Tree â€” tree tidak collapse ke home.

- Toggle ON/OFF dari popup extension
- Menyimpan last-selected item via `localStorage`
- Restore otomatis menggunakan Sitecore JS API (`scForm.postRequest`)

### Experience Editor â€” Toggle Ribbon
Tombol burger (â˜°) di pojok kanan atas untuk menyembunyikan/menampilkan ribbon Experience Editor.

- Posisi: **fixed top-right** â€” selalu terlihat
- State tersimpan di cookie â€” persist antar reload

---

## Screenshots

> Popup extension settings

![Popup](https://raw.githubusercontent.com/rhyoharianya/sitecore-dev-tools/main/docs/popup.png)

> Scriban Editor dengan tema Monokai

![Editor](https://raw.githubusercontent.com/rhyoharianya/sitecore-dev-tools/main/docs/editor.png)

---

## Popup Settings

| Setting | Default | Keterangan |
|---|---|---|
| Auto-detect Scriban | ON | Deteksi textarea Scriban otomatis |
| Preserve Editor State | OFF | Stay di item yang sama setelah reload |
| Tema Editor | Monokai | 11 pilihan tema |
| HTML Highlighting | ON | Warnai tag/class/id HTML |
| Autocomplete | ON | Saran kode Scriban otomatis |
| Error Detection | ON | Linter untuk tag tidak ditutup |
| Indent Guide | OFF | Garis panduan indentasi |

---

## Kompatibilitas

| Platform | Status |
|---|---|
| Sitecore XM 10.4.1 | âœ… Tested |
| Chrome 110+ | âœ… Required |
| Content Editor | âœ… |
| Experience Editor | âœ… |
| SXA Variant Editor | âœ… |

---

## URL yang Didukung

Extension aktif di halaman dengan URL pattern:
- `*://*/sitecore/*`
- `*://*.local/*`
- `*://localhost/*`
- `*://127.0.0.1/*`

---

## Build dari Source

```bash
# Clone repo
git clone https://github.com/rhyoharianya/sitecore-dev-tools.git
cd sitecore-dev-tools-chrome-extension

# Install dependencies
npm install

# Build + pack ZIP
npm run pack

# Development (watch mode)
npm run dev
```

Output: `dist/` folder + `sitecore-dev-tools-v*.zip`

---

## Tech Stack

- **CodeMirror 6** â€” editor engine
- **esbuild** â€” bundler
- **@uiw/codemirror-theme-*** â€” tema-tema editor
- Manifest V3 (Chrome Extension)

---

## Credits

Terinspirasi dari [sc_ext](https://github.com/alan-null/sc_ext) oleh Alan Null.

---

**By : SGKH** | Sitecore Dev Tools v1.1.0
