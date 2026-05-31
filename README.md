<div align="center">

# Sitecore Dev Tools

### Chrome Extension untuk Developer Sitecore XM

[![Version](https://img.shields.io/badge/Version-1.1.0-1F4C8C?style=for-the-badge)](https://github.com/rhyoharianja/sitecore-dev-tools/releases/latest)
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
**[Changelog](https://github.com/rhyoharianja/sitecore-dev-tools/releases)**

<br/>

---

### Support This Project

<a href="https://paypal.me/sgkharianja" target="_blank">
  <img src="https://img.shields.io/badge/Donate-PayPal-0070BA?style=for-the-badge&logo=paypal&logoColor=white" alt="Donate with PayPal" height="40"/>
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
| **11 Tema** | Monokai (default), One Dark, Dracula, GitHub Light/Dark, Material, Nord, Solarized |
| **Line Numbers** | Gutter kiri dengan nomor baris |
| **Autocomplete** | 100+ suggestion: `i_item`, `sc_field`, `string.upcase`, `array.size`, dll |
| **Error Detection** | Linter: tag `{{` tidak ditutup, block `if/for` tanpa `end` |
| **Indent Guide** | Garis panduan indentasi (solid/dashed, custom color picker) |
| **Modal Editor** | Buka editor dalam popup modal yang bisa di-resize |
| **Tema Switch** | Toggle Dark/Light langsung dari toolbar editor |

### Content Editor — Preserve State
Setelah refresh/reload browser, **tetap di item yang sama** di Content Tree.

- Toggle ON/OFF dari popup extension
- Menyimpan last-selected item via `localStorage`
- Restore otomatis menggunakan Sitecore JS API (`scForm.postRequest`)

### Experience Editor — Toggle Ribbon
Tombol burger di pojok kanan atas untuk sembunyikan/tampilkan ribbon Experience Editor.

- Posisi fixed top-right — selalu terlihat
- State tersimpan di cookie — persist antar reload

---

## Install

### Download & Install Manual

1. Download **[sitecore-dev-tools-v1.1.0.zip](https://github.com/rhyoharianja/sitecore-dev-tools/releases/latest)**
2. Buka Chrome lalu akses `chrome://extensions/`
3. Aktifkan **Developer mode** (toggle kanan atas)
4. **Drag & drop** file `.zip` ke halaman extensions
5. Extension siap digunakan

---

## Popup Settings

| Setting | Default | Keterangan |
|---|---|---|
| Auto-detect Scriban | ON | Deteksi textarea Scriban otomatis |
| Preserve Editor State | OFF | Stay di item yang sama setelah reload |
| Tema Editor | Monokai | 11 pilihan tema |
| HTML Highlighting | ON | Warnai HTML tag/class/id di Scriban |
| Autocomplete | ON | Saran kode Scriban otomatis |
| Error Detection | ON | Linter untuk tag yang tidak ditutup |
| Indent Guide | OFF | Garis panduan indentasi (custom color) |

---

## Kompatibilitas

| Platform | Status |
|---|---|
| Sitecore XM 10.4.1 | Tested |
| Chrome 110+ | Required |
| Content Editor | Supported |
| Experience Editor | Supported |
| SXA Variant Editor | Supported |

---

## URL yang Didukung

Extension aktif di halaman dengan pola URL berikut:

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
npm run pack
npm run dev
```

---

## License

Didistribusikan di bawah lisensi **MIT**. Lihat [LICENSE](LICENSE) untuk detail.

---

<div align="center">

**By : SGKH** &nbsp;|&nbsp; Sitecore Dev Tools v1.1.0

<br/>

<a href="https://paypal.me/sgkharianja" target="_blank">
  <img src="https://img.shields.io/badge/Buy_Me_a_Coffee-Donate_via_PayPal-0070BA?style=for-the-badge&logo=paypal&logoColor=white" alt="Donate via PayPal" height="36"/>
</a>

</div>
