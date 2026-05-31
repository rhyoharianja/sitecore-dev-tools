<div align="center">

# Sitecore Dev Tools

### Chrome Extension untuk Developer Sitecore XM

[![Version](https://img.shields.io/badge/Version-1.2.0-1F4C8C?style=for-the-badge)](https://github.com/rhyoharianja/sitecore-dev-tools/releases/latest)
[![Chrome](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://github.com/rhyoharianja/sitecore-dev-tools/releases/latest)
[![Manifest](https://img.shields.io/badge/Manifest-V3-34A853?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/mv3/)
[![Sitecore](https://img.shields.io/badge/Sitecore-10.4-EB1F1F?style=for-the-badge)](https://www.sitecore.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CodeMirror](https://img.shields.io/badge/CodeMirror-6-lightgrey?style=flat-square)](https://codemirror.net/)
[![esbuild](https://img.shields.io/badge/esbuild-bundler-FFCF00?style=flat-square)](https://esbuild.github.io/)
[![CSS](https://img.shields.io/badge/CSS-3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![HTML](https://img.shields.io/badge/HTML-5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)

<br/>

**[Download Latest Release](https://github.com/rhyoharianja/sitecore-dev-tools/releases/latest)**
&nbsp;&nbsp;|&nbsp;&nbsp;
**[Changelog](https://github.com/rhyoharianja/sitecore-dev-tools/blob/main/CHANGELOG.md)**

<br/>

---

### Support This Project

<a href="https://paypal.me/sgkharianja" target="_blank">
  <img src="https://img.shields.io/badge/Donate-PayPal-0070BA?style=for-the-badge&logo=paypal&logoColor=white" alt="Donate with PayPal" height="40"/>
</a>
&nbsp;&nbsp;
<a href="https://saweria.co/rhioharianja" target="_blank">
  <img src="https://img.shields.io/badge/Saweria-Donate-F97316?style=for-the-badge&logo=ko-fi&logoColor=white" alt="Donate via Saweria" height="40"/>
</a>

*Jika extension ini membantu pekerjaan kamu, belikan saya secangkir kopi*

---

</div>

## Fitur

### Scriban Editor
Editor Scriban ditingkatkan dengan **CodeMirror 6** — menggantikan textarea default Sitecore di Content Editor & SXA Variant Editor.

| Fitur | Detail |
|---|---|
| **Syntax Highlighting** | Keyword, string, number, operator, HTML tag/class/id |
| **11 Tema Editor** | Monokai (default), One Dark, Dracula, GitHub Light/Dark, Material, Nord, Solarized |
| **Line Numbers** | Gutter kiri dengan nomor baris |
| **Autocomplete** | 100+ suggestion: `i_item`, `sc_field`, `string.upcase`, `array.size`, dll |
| **Error Detection** | Linter: tag `{{` tidak ditutup, block `if/for` tanpa `end` |
| **Indent Guide** | Garis panduan indentasi (solid/dashed, custom color picker) |
| **Modal Editor** | Buka editor dalam popup modal yang bisa di-resize |
| **Tema Switch** | Toggle tema langsung dari toolbar editor |

#### Cara Penggunaan Scriban Editor
1. Buka Sitecore Content Editor atau SXA Variant Editor
2. Editor Scriban muncul otomatis menggantikan textarea
3. Klik ikon **tema** di toolbar untuk ganti warna editor
4. Klik **⊞ Modal** untuk buka editor dalam popup besar
5. Klik **{ }** untuk tampilkan/sembunyikan textarea original
6. Gunakan **Ctrl+Space** untuk autocomplete manual

---

### Content Editor — Preserve State
Setelah refresh/reload browser, **tetap di item yang sama** di Content Tree.

| | |
|---|---|
| **Aktifkan** | Popup → toggle **Preserve Editor State** ON |
| **Cara kerja** | Menyimpan item terakhir di `localStorage`, restore via `scForm.postEvent` |
| **Kedua panel** | Tree (kiri) dan Content panel (kanan) keduanya navigate ke item yang benar |

#### Cara Penggunaan
1. Buka popup extension → aktifkan **"Preserve Editor State"**
2. Navigasi ke item di Content Editor
3. Refresh browser (F5) → otomatis kembali ke item yang sama

---

### Media Library — Usage Checker
Cek di mana sebuah media item digunakan di seluruh konten Sitecore.

| | |
|---|---|
| **Trigger** | Klik teks usage (contoh: "2 usages") di setiap media card |
| **Data** | Menggunakan Sitecore Link Database (`Gallery.Links` API) — 100% akurat |
| **Navigasi** | Klik item dalam popup → buka Content Editor di tab baru langsung ke item |
| **Dialog** | Tombol "Buka Dialog Sitecore" untuk list lengkap dengan navigasi |

#### Cara Penggunaan
1. Buka **Media Library** di Sitecore Content Editor
2. Teks usage di setiap media card berubah menjadi link biru (underline)
3. Klik teks usage → popup muncul dengan daftar item yang menggunakan media
4. Klik nama item → tab baru terbuka langsung ke halaman item tersebut

---

### Experience Editor — Toggle Ribbon
Sembunyikan/tampilkan ribbon Experience Editor untuk ruang kerja yang lebih luas.

| | |
|---|---|
| **Tombol** | Burger icon (☰) fixed di pojok kanan atas |
| **Toggle** | Klik sekali → ribbon hilang; klik lagi → ribbon muncul |
| **Persist** | State tersimpan di cookie, tidak hilang saat reload |

#### Cara Penggunaan
1. Buka halaman mana saja di **Experience Editor**
2. Tombol burger ☰ muncul otomatis di pojok kanan atas
3. Klik untuk sembunyikan ribbon dan mendapat ruang lebih luas

---

### Extension UI Theme
Ubah warna tema seluruh elemen extension sesuai preferensi.

| | |
|---|---|
| **Preset** | 8 pilihan: BNI Blue, Indigo, Violet, Teal, Green, Red, Orange, Slate |
| **Custom** | Color picker bebas untuk warna kustom |
| **Cakupan** | Popup, toolbar editor, panel media usage, ribbon button |

#### Cara Penggunaan
1. Buka popup extension
2. Section **"Warna Tema Extension"** → pilih salah satu warna swatch
3. Pilih **Custom** untuk membuka color picker warna bebas
4. Perubahan langsung berlaku ke semua elemen extension di semua tab

---

## Install

### Download & Install Manual

1. Download **[sitecore-dev-tools-v1.2.0.zip](https://github.com/rhyoharianja/sitecore-dev-tools/releases/latest)**
2. Buka Chrome lalu akses `chrome://extensions/`
3. Aktifkan **Developer mode** (toggle kanan atas)
4. **Drag & drop** file `.zip` ke halaman extensions
5. Extension siap digunakan

---

## Popup Settings

| Setting | Default | Keterangan |
|---|---|---|
| Auto-detect Scriban | ON | Deteksi textarea Scriban otomatis |
| **Preserve Editor State** | OFF | Stay di item yang sama setelah reload |
| Tema Editor | Monokai | 11 pilihan tema CodeMirror |
| HTML Highlighting | ON | Warnai HTML tag/class/id di Scriban |
| Autocomplete | ON | Saran kode Scriban otomatis |
| Error Detection | ON | Linter untuk tag yang tidak ditutup |
| Indent Guide | OFF | Garis panduan indentasi (custom color) |
| **Warna Tema Extension** | BNI Blue | 8 preset + custom color picker |

---

## Kompatibilitas

| Platform | Status |
|---|---|
| Sitecore XM 10.4.1 | Tested |
| Chrome 110+ | Required |
| Content Editor | Supported |
| Experience Editor | Supported |
| SXA Variant Editor | Supported |
| Media Library | Supported |

---

## URL yang Didukung

```
*://*/sitecore/*
*://*.local/*
*://localhost/*
*://127.0.0.1/*
```

---

## Build dari Source

Source code tersedia di private repository.

```bash
npm install
npm run pack      # build + ZIP
npm run dev       # watch mode
```

---

## License

Didistribusikan di bawah lisensi **MIT**. Lihat [LICENSE](LICENSE) untuk detail.

---

<div align="center">

**By : SGKH** &nbsp;|&nbsp; Sitecore Dev Tools v1.2.0

<br/>

<a href="https://paypal.me/sgkharianja" target="_blank">
  <img src="https://img.shields.io/badge/PayPal-Donate-0070BA?style=for-the-badge&logo=paypal&logoColor=white" alt="Donate via PayPal" height="36"/>
</a>
&nbsp;&nbsp;
<a href="https://saweria.co/rhioharianja" target="_blank">
  <img src="https://img.shields.io/badge/Saweria-Donate-F97316?style=for-the-badge&logo=ko-fi&logoColor=white" alt="Donate via Saweria" height="36"/>
</a>

</div>