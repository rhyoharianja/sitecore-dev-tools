<div align="center">

# Sitecore Dev Tools

### Chrome Extension for Sitecore XM Developers

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

**[⬇ Download Latest Release](https://github.com/rhyoharianja/sitecore-dev-tools/releases/latest)**
&nbsp;&nbsp;|&nbsp;&nbsp;
**[📋 Changelog](https://github.com/rhyoharianja/sitecore-dev-tools/blob/main/CHANGELOG.md)**

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

*If this extension helps your workflow, consider buying me a coffee ☕*

---

</div>

## Overview

**Sitecore Dev Tools** is a Chrome extension designed to enhance the developer experience within the Sitecore XM administration interface. It provides an improved Scriban template editor, Content Editor state persistence, a Media Library usage checker, an Experience Editor ribbon toggle, and a fully customizable UI theme system.

---

## Features

### Scriban Template Editor

Replaces the default Sitecore textarea with a fully-featured **CodeMirror 6** editor in the Content Editor and SXA Variant Editor.

| Feature | Description |
|---|---|
| **Syntax Highlighting** | Keywords, strings, numbers, operators, HTML tags, class/id attributes |
| **11 Editor Themes** | Monokai (default), One Dark, Dracula, GitHub Light/Dark, Material Light/Dark, Nord, Solarized Light/Dark |
| **Line Numbers** | Displayed in the left gutter |
| **Autocomplete** | 100+ suggestions including `i_item`, `sc_field`, `string.upcase`, `array.size`, and more |
| **Error Detection** | Linter for unclosed `{{ }}` tags and unmatched `if/for/while` blocks |
| **Indent Guide** | Configurable indentation markers (solid or dashed, custom color) |
| **Modal Editor** | Open the editor in a resizable popup modal |
| **Theme Toggle** | Switch between light and dark themes directly from the editor toolbar |

#### Usage
1. Navigate to the Sitecore Content Editor or SXA Variant Editor
2. The enhanced editor loads automatically in place of the default textarea
3. Use the **theme button** in the toolbar to change the editor color scheme
4. Click **⊞ Modal** to open the editor in a full-screen modal popup
5. Click **{ }** to toggle the original textarea visibility
6. Press **Ctrl+Space** to trigger autocomplete manually

---

### Content Editor — State Preservation

Automatically returns to the previously selected item after a browser refresh or reload, maintaining both the tree navigation and the content panel state.

| | |
|---|---|
| **Enable** | Extension popup → toggle **Preserve Editor State** ON |
| **Mechanism** | Stores the last selected item in `localStorage`; restores via `scForm.postEvent` with `tree:click` |
| **Scope** | Both the tree panel (left) and content panel (right) navigate to the correct item |

#### Usage
1. Open the extension popup and enable **"Preserve Editor State"**
2. Navigate to any item in the Content Editor
3. Press **F5** or reload the browser — the extension automatically returns to the same item

---

### Media Library — Usage Checker

Identifies which content items reference a given media asset, directly within the Media Library browser.

| | |
|---|---|
| **Trigger** | Click the usage count text (e.g., "2 usages") on any media card |
| **Data source** | Sitecore Link Database via `Gallery.Links` API — 100% accurate |
| **Navigation** | Click a referenced item to open the Content Editor in a new tab, focused on that item |
| **Fallback** | "Open Sitecore Dialog" button for the full native reference list |

#### Usage
1. Open the **Media Library** in the Sitecore Content Editor
2. Each media card displays a usage count; when in use, it appears as a clickable underlined link
3. Click the usage count — a popup appears listing all items that reference this media asset
4. Click any item in the list to open a new browser tab navigating directly to that content item

---

### Experience Editor — Ribbon Toggle

Provides a persistent toggle button to show or hide the Experience Editor ribbon, maximising the available editing area.

| | |
|---|---|
| **Button** | Hamburger icon (☰) fixed at the top-right corner of the page |
| **Behaviour** | Single click toggles the ribbon visibility |
| **Persistence** | State is stored in a browser cookie and survives page reloads |
| **Compatibility** | Sitecore 10+ (`[data-sc-id=PageEditBar]`) and legacy (`#scWebEditRibbon`) |

#### Usage
1. Open any page in the **Experience Editor**
2. The ☰ button appears automatically at the top-right corner
3. Click to hide the ribbon and gain additional workspace
4. Click again to restore the ribbon

---

### Extension UI Theme

Allows customisation of the extension's colour scheme across all UI elements, including the popup, editor toolbar, media usage panels, and the ribbon toggle button.

| | |
|---|---|
| **Presets** | 8 options: BNI Blue, Indigo, Violet, Teal, Green, Red, Orange, Slate |
| **Custom** | Free colour picker for any custom accent colour |
| **Scope** | Popup interface, Scriban editor toolbar, media panels, modal, ribbon button |
| **Persistence** | Saved to `chrome.storage.sync`; applies across all Sitecore tabs |

#### Usage
1. Open the extension popup
2. Under **"Extension UI Theme"**, select a colour swatch
3. Select **Custom** to open a free colour picker
4. Changes apply immediately across all open Sitecore tabs

---

## Installation

### Manual Installation (Developer Mode)

1. Download **[sitecore-dev-tools-v1.2.0.zip](https://github.com/rhyoharianja/sitecore-dev-tools/releases/latest)**
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top-right corner)
4. **Drag and drop** the `.zip` file onto the extensions page
5. The extension is ready to use

---

## Popup Settings Reference

| Setting | Default | Description |
|---|---|---|
| Auto-detect Scriban | ON | Automatically detect and enhance Scriban textareas |
| **Preserve Editor State** | OFF | Return to the same item after browser reload |
| Editor Theme | Monokai | CodeMirror editor colour theme (11 options) |
| HTML Highlighting | ON | Highlight HTML tags, class, and id attributes in Scriban templates |
| Autocomplete | ON | Display Sitecore SXA Scriban suggestions automatically |
| Error Detection | ON | Lint for unclosed tags and unmatched block statements |
| Indent Guide | OFF | Display indentation markers (solid/dashed, custom colour) |
| **Extension UI Theme** | BNI Blue | Extension interface colour (8 presets + custom picker) |

---

## Compatibility

| Platform | Status |
|---|---|
| Sitecore XM 10.4.1 | ✅ Tested |
| Chrome 110+ | ✅ Required |
| Content Editor | ✅ Supported |
| Experience Editor | ✅ Supported |
| SXA Variant Editor | ✅ Supported |
| Media Library | ✅ Supported |

---

## Supported URL Patterns

The extension activates on pages matching the following URL patterns:

```
*://*/sitecore/*
*://*.local/*
*://localhost/*
*://127.0.0.1/*
```

---

## Building from Source

Source code is available in the private repository. Contributors with access may build as follows:

```bash
# Install dependencies
npm install

# Build and package (outputs sitecore-dev-tools-v*.zip)
npm run pack

# Development mode with file watching
npm run dev

# Regenerate extension icons
node generate-icons.mjs
```

---

## License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for details.

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