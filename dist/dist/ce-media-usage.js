(()=>{(function(){"use strict";let x="master",L="sgkh-mu-styles",s="sgkh-mu-popup",a="sgkh-mu-panel";function v(){if(document.getElementById(L))return;let e=document.createElement("style");e.id=L,e.textContent=`
      @keyframes sgkh-mu-spin { to { transform: rotate(360deg); } }
      @keyframes sgkh-mu-fade { from { opacity:0; transform:translateY(4px); } to { opacity:1; transform:translateY(0); } }

      /* \u2500\u2500 .scMediaUsages enhanced \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      .sgkh-usage-link {
        cursor: pointer !important;
        text-decoration: underline dotted !important;
        color: var(--sgkh-c-accent) !important;
        font-weight: 600 !important;
      }
      .sgkh-usage-link:hover { color: var(--sgkh-c-hover) !important; }
      .sgkh-usage-none { color: #999 !important; font-style: italic; }

      /* \u2500\u2500 Inline popup (Media Browser) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      #${s} {
        position: fixed; z-index: 2147483647;
        width: 300px; background: var(--sgkh-c-bg2);
        border: 1px solid var(--sgkh-c-accent); border-radius: 8px;
        box-shadow: 0 6px 28px rgba(0,0,0,.6);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        font-size: 12px; color: #d0d8e8; overflow: hidden;
        animation: sgkh-mu-fade .15s ease;
      }
      #${s} .mu-head {
        display: flex; align-items: center; justify-content: space-between;
        padding: 7px 11px; background: linear-gradient(90deg,var(--sgkh-c-accent),var(--sgkh-c-dark));
        user-select: none;
      }
      #${s} .mu-title {
        font-weight: 700; font-size: 11px; letter-spacing: .4px;
        display: flex; align-items: center; gap: 5px; color: #fff;
      }
      #${s} .mu-close {
        background: none; border: none; color: rgba(255,255,255,.6);
        cursor: pointer; font-size: 15px; line-height: 1; padding: 0;
      }
      #${s} .mu-close:hover { color: #fff; }
      #${s} .mu-medianame {
        padding: 5px 11px; background: var(--sgkh-c-bg); font-size: 10px;
        color: var(--sgkh-c-text); border-bottom: 1px solid var(--sgkh-c-border);
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      #${s} .mu-body { padding: 9px 11px; }
      #${s} .mu-loading {
        display: flex; align-items: center; gap: 6px;
        color: #5a6a80; font-size: 10px; padding: 4px 0;
      }
      #${s} .mu-loading svg { animation: sgkh-mu-spin .7s linear infinite; }
      #${s} .mu-badge {
        display: inline-flex; align-items: center; gap: 4px;
        padding: 3px 9px; border-radius: 12px;
        font-size: 10px; font-weight: 700; margin-bottom: 7px;
      }
      .mu-used   { background:rgba(74,222,128,.1); color:#4ade80; border:1px solid rgba(74,222,128,.25); }
      .mu-unused { background:rgba(248,113,113,.1); color:#f87171; border:1px solid rgba(248,113,113,.25); }
      .mu-warn   { background:rgba(251,191,36,.1);  color:#fbbf24; border:1px solid rgba(251,191,36,.25); }
      #${s} .mu-list {
        list-style: none; padding: 0; margin: 0;
        display: flex; flex-direction: column; gap: 3px;
        max-height: 200px; overflow-y: auto;
      }
      #${s} .mu-list::-webkit-scrollbar { width: 4px; }
      #${s} .mu-list::-webkit-scrollbar-thumb { background:var(--sgkh-c-border); border-radius:2px; }
      #${s} .mu-ref {
        display: flex; align-items: center; gap: 7px;
        padding: 5px 8px; background: var(--sgkh-c-bg);
        border: 1px solid var(--sgkh-c-border); border-radius: 4px;
        font-size: 10px; color: #a0c4ff; cursor: pointer;
        transition: background .1s; overflow: hidden;
      }
      #${s} .mu-ref:hover { background: var(--sgkh-c-border); color: #fff; }
      #${s} .mu-ref span { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
      #${s} .mu-ref svg { flex-shrink:0; opacity:.6; }
      #${s} .mu-info {
        font-size: 10px; color: #4a6080; line-height: 1.5;
        text-align: center; margin-top: 6px;
      }
      #${s} .mu-dialog-btn {
        width: 100%; margin-top: 7px; padding: 5px 8px; border-radius: 5px;
        background: var(--sgkh-c-bg); border: 1px solid var(--sgkh-c-accent);
        color: var(--sgkh-c-text); cursor: pointer; font-size: 10px;
        font-family: inherit; font-weight: 600;
        display: flex; align-items: center; justify-content: center; gap: 5px;
        transition: background .12s;
      }
      #${s} .mu-dialog-btn:hover { background: var(--sgkh-c-accent); color: #fff; }

      /* \u2500\u2500 Floating panel (CE context) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      #${a} {
        position: fixed; bottom: 70px; right: 14px; z-index: 2147483646;
        width: 300px; background: var(--sgkh-c-bg2);
        border: 1px solid var(--sgkh-c-accent); border-radius: 8px;
        box-shadow: 0 6px 28px rgba(0,0,0,.6);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        font-size: 12px; color: #d0d8e8; overflow: hidden;
      }
      #${a} .mu-head {
        display: flex; align-items: center; justify-content: space-between;
        padding: 7px 11px; background: linear-gradient(90deg,var(--sgkh-c-accent),var(--sgkh-c-dark));
      }
      #${a} .mu-title {
        font-weight: 700; font-size: 11px; letter-spacing: .4px;
        display: flex; align-items: center; gap: 5px; color: #fff;
      }
      #${a} .mu-close {
        background:none; border:none; color:rgba(255,255,255,.6);
        cursor:pointer; font-size:15px; line-height:1; padding:0;
      }
      #${a} .mu-close:hover { color:#fff; }
      #${a} .mu-medianame {
        padding:6px 11px; background:var(--sgkh-c-bg); font-size:10px;
        color:var(--sgkh-c-text); border-bottom:1px solid var(--sgkh-c-border);
        white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
      }
      #${a} .mu-body { padding:10px 11px; }
      #${a} .mu-check-btn {
        width:100%; padding:6px; border:none; border-radius:5px;
        background:var(--sgkh-c-accent); color:#fff; cursor:pointer;
        font-size:11px; font-family:inherit; font-weight:600;
        display:flex; align-items:center; justify-content:center; gap:5px;
        transition:background .12s;
      }
      #${a} .mu-check-btn:hover { background:var(--sgkh-c-hover); }
      #${a} .mu-check-btn:disabled { opacity:.45; cursor:default; }
      #${a} .mu-result { margin-top:9px; }
      #${a} .mu-badge {
        display:inline-flex; align-items:center; gap:4px;
        padding:3px 9px; border-radius:12px;
        font-size:10px; font-weight:700; margin-bottom:7px;
      }
      #${a} .mu-list {
        list-style:none; padding:0; margin:0;
        display:flex; flex-direction:column; gap:3px;
        max-height:180px; overflow-y:auto;
      }
      #${a} .mu-list::-webkit-scrollbar { width:4px; }
      #${a} .mu-list::-webkit-scrollbar-thumb { background:var(--sgkh-c-border); border-radius:2px; }
      #${a} .mu-ref {
        display:flex; align-items:center; gap:7px;
        padding:5px 8px; background:var(--sgkh-c-bg);
        border:1px solid var(--sgkh-c-border); border-radius:4px;
        font-size:10px; color:#a0c4ff; cursor:pointer;
        transition:background .1s; overflow:hidden;
      }
      #${a} .mu-ref:hover { background:var(--sgkh-c-border); color:#fff; }
      #${a} .mu-ref span { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
      #${a} .mu-ref svg { flex-shrink:0; opacity:.6; }
      #${a} .mu-info {
        font-size:10px; color:#4a6080; line-height:1.5;
        text-align:center; margin-top:5px;
      }
      #${a} .mu-dialog-btn {
        width:100%; margin-top:7px; padding:5px 8px; border-radius:5px;
        background:var(--sgkh-c-bg); border:1px solid var(--sgkh-c-accent);
        color:var(--sgkh-c-text); cursor:pointer; font-size:10px;
        font-family:inherit; font-weight:600;
        display:flex; align-items:center; justify-content:center; gap:5px;
        transition:background .12s;
      }
      #${a} .mu-dialog-btn:hover { background:var(--sgkh-c-accent); color:#fff; }
    `,document.head.appendChild(e)}function H(){let e=document.querySelector("#__CurrentItem")?.value||"",t=(e.match(/(?:la|lang)=([a-zA-Z\-]+)/)||[])[1]||"en",n=(e.match(/vs=(\d+)/)||[])[1]||"1";return{lang:t,vs:n}}async function S(e){let{lang:t,vs:n}=H(),i=`/sitecore/shell/default.aspx?xmlcontrol=Gallery.Links&id=${encodeURIComponent(e)}&la=${t}&vs=${n}&db=${x}`,c=await fetch(i,{credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest"}});if(!c.ok)throw new Error(`HTTP ${c.status}`);let l=await c.text(),r=new DOMParser().parseFromString(l,"text/html"),u=new Set,g=[];function h(d,m){let f=(d||"").trim();if(!f||f.length<2||u.has(f))return;u.add(f);let $=null,K=/\{([0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12})\}/i,V=m?[m,...m.querySelectorAll("*")]:[];for(let J of V){for(let Z of["onclick","href","data-id","data-sc-target","data-itemid","id","value"]){let Q=J.getAttribute?.(Z)||"",F=K.exec(Q);if(F){$=`{${F[1].toUpperCase()}}`;break}}if($)break}let Y=f.startsWith("/sitecore/");g.push({name:f,itemId:$,path:Y?f:null})}if(r.querySelectorAll("#Links .scRef .scLink").forEach(d=>h(d.textContent,d)),g.length||r.querySelectorAll("#Links .scRef, #Links .scReferrer").forEach(d=>{h((d.querySelector(".scLink, a")||d).textContent,d)}),g.length||r.querySelectorAll("#Links a").forEach(d=>h(d.textContent,d)),!g.length){let d=r.querySelector("#References, .scReferences");d&&d.querySelectorAll("a, li, .item").forEach(m=>h(m.textContent,m))}return{items:g,lang:t,vs:n}}let U="sgkh::open_item";async function _(e,t,n,o){let i=e.itemId;if(!i&&e.path&&(i=e.path),!i&&e.name)try{let l=await fetch(`/sitecore/api/ssc/item/search?term=${encodeURIComponent(e.name)}&database=${x}&language=${n}&pageSize=5`,{credentials:"include",headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(l.ok){let r=await l.json(),u=r.Results||r.results||r.Items||[],g=u.find(h=>(h.Name||h.ItemName||h.DisplayName||"").toLowerCase()===e.name.toLowerCase())||u[0];g&&(i=g.ItemID||g.ID||g.ItemPath||g.Path||null)}}catch{}if(!i){C(t,n,o);return}try{localStorage.setItem(U,JSON.stringify({guid:i,lang:n,vs:o,ts:Date.now()}))}catch{}let c=`${location.protocol}//${location.hostname}/sitecore/shell/Applications/Content%20Editor.aspx?fo=${encodeURIComponent(i)}`;window.open(c,"_blank")}function C(e,t,n){let o=`id=${encodeURIComponent(e)}&la=${t}&vs=${n}&db=${x}&sc_content=${x}&ShowEditor=1&Ribbon.RenderTabs=true`;try{window.scContent?.showGallery(null,{type:"click",preventDefault:()=>{}},"UsageFrame","Gallery.Links",o,"700px","400px")}catch{window.open(`/sitecore/shell/default.aspx?xmlcontrol=Gallery.Links&${o}`,"SitecoreUsage","width=700,height=400,scrollbars=yes")}}function M(e,t,n,o){let i=`
      <button type="button" class="mu-dialog-btn" data-guid="${t}" data-lang="${n}" data-vs="${o}">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        Buka Dialog Sitecore (Klik untuk Navigasi)
      </button>`;if(e.length===0)return`
        <div class="mu-badge mu-unused">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
          Tidak digunakan
        </div>
        <div class="mu-info">Media ini tidak direferensikan oleh item mana pun.</div>
        ${i}`;let c=e.slice(0,20).map(r=>`
      <li class="mu-ref"
          data-itemid="${p(r.itemId||"")}"
          data-name="${p(r.name)}"
          data-lang="${n}"
          data-guid="${t}"
          data-vs="${o}"
          title="Klik untuk buka di tab baru: ${p(r.name)}">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
        <span>${p(r.name)}</span>
        <svg style="margin-left:auto;flex-shrink:0;opacity:.5" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </li>`).join(""),l=e.length>20?`<li class="mu-info">... dan ${e.length-20} item lainnya</li>`:"";return`
      <div class="mu-badge mu-used">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        Digunakan di ${e.length} item
      </div>
      <ul class="mu-list">${c}${l}</ul>
      <div class="mu-info">Klik item \u2192 buka dialog Sitecore untuk navigasi</div>
      ${i}`}function E(e,t){e.querySelectorAll(".mu-ref").forEach((n,o)=>{n.addEventListener("click",()=>{let i=t?.[o]||{name:n.dataset.name||"",itemId:n.dataset.itemid||null,path:null},c=n.dataset.guid,l=n.dataset.lang||"en",r=n.dataset.vs||"1";_(i,c,l,r)})}),e.querySelectorAll(".mu-dialog-btn").forEach(n=>{n.addEventListener("click",()=>{C(n.dataset.guid,n.dataset.lang,n.dataset.vs)})})}function D(){return!!(document.querySelector("#FileList > a:not(.scButton)")||document.querySelector(".scMediaBorder")&&document.querySelector(".scFolderButtons"))}function j(e){let n=(e?.getAttribute?.("onclick")||e?.getAttribute?.("href")||"").match(/\{([0-9A-Fa-f\-]{36})\}/i);return n?`{${n[1]}}`:null}function G(){v(),I();let e=new MutationObserver(()=>I()),t=document.getElementById("FileList");t&&e.observe(t,{childList:!0,subtree:!0})}function I(){document.querySelectorAll("#FileList > a:not(.scButton)").forEach(e=>{if(e.dataset.sgkhEnhanced)return;e.dataset.sgkhEnhanced="1";let t=e.querySelector(".scMediaUsages");if(!t)return;let n=j(e);if(!n)return;let o=t.innerText?.trim()||"";o&&o!=="not used"&&!/^0\b/.test(o)?(t.classList.add("sgkh-usage-link"),t.title="Klik untuk lihat item yang menggunakan media ini",t.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation();let l=e.querySelector(".scMediaTitle")?.innerText?.trim()||n;N(n,l,t)})):(t.classList.add("sgkh-usage-none"),t.title="Media ini tidak digunakan")})}function N(e,t,n){b(),v();let o=document.createElement("div");o.id=s,o.innerHTML=`
      <div class="mu-head">
        <span class="mu-title">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
          </svg>
          Media Usage
        </span>
        <button type="button" class="mu-close">\u2715</button>
      </div>
      <div class="mu-medianame" title="${p(t)}">${p(t)}</div>
      <div class="mu-body">
        <div class="mu-loading">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
          </svg>
          Memuat referensi...
        </div>
      </div>
    `,document.body.appendChild(o),q(o,n),o.querySelector(".mu-close").addEventListener("click",b),setTimeout(()=>{document.addEventListener("click",B,{capture:!0,once:!0})},50),S(e).then(({items:i,lang:c,vs:l})=>{let r=o.querySelector(".mu-body");r&&(r.innerHTML=M(i,e,c,l),E(r,i),q(o,n))}).catch(i=>{let c=o.querySelector(".mu-body");c&&(c.innerHTML=`<div class="mu-badge mu-warn">Error: ${p(i.message)}</div>`)})}function q(e,t){let n=t.getBoundingClientRect(),o=window.innerWidth,i=window.innerHeight,c=e.offsetWidth||300,l=e.offsetHeight||200,r=n.bottom+8,u=n.left;u+c>o-10&&(u=o-c-10),r+l>i-10&&(r=n.top-l-8),u<10&&(u=10),r<10&&(r=10),e.style.top=r+"px",e.style.left=u+"px"}function B(e){let t=document.getElementById(s);t&&!t.contains(e.target)&&b()}function b(){document.getElementById(s)?.remove(),document.removeEventListener("click",B,{capture:!0})}function A(){let e=document.querySelector("#__CurrentItem");if(!e?.value)return null;let t=e.value.match(/\{([0-9A-Fa-f\-]{36})\}/i);return t?t[0]:null}async function O(e){let t=e.replace(/[{}]/g,"");try{let n=await fetch(`/sitecore/api/ssc/item/${t}?database=${x}&language=en`,{credentials:"include",headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(!n.ok)return T();let o=await n.json();return(o.ItemPath||o.Path||"").toLowerCase().includes("/sitecore/media library/")}catch{return T()}}function T(){return!!(document.querySelector(".scMediaBorder")||document.querySelector(".scMediaTitle")||document.querySelector("#MediaPreview"))}function W(e){y(),v();let t=document.createElement("div");t.id=a,t.innerHTML=`
      <div class="mu-head">
        <span class="mu-title">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
          </svg>
          Media Usage
        </span>
        <button type="button" class="mu-close">\u2715</button>
      </div>
      <div class="mu-medianame" title="${p(e)}">${p(e)}</div>
      <div class="mu-body">
        <button type="button" class="mu-check-btn" id="sgkh-mu-check">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          Check Usage
        </button>
        <div class="mu-result" id="sgkh-mu-result"></div>
      </div>
    `,document.body.appendChild(t),t.querySelector(".mu-close").addEventListener("click",y),t.querySelector("#sgkh-mu-check").addEventListener("click",X)}function y(){document.getElementById(a)?.remove()}async function X(){let e=document.getElementById("sgkh-mu-check"),t=document.getElementById("sgkh-mu-result");if(!e||!t)return;let n=A();if(n){e.disabled=!0,e.innerHTML=`
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           style="animation:sgkh-mu-spin .7s linear infinite">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      </svg> Searching...`,t.innerHTML="";try{let{items:o,lang:i,vs:c}=await S(n);t.innerHTML=M(o,n,i,c),E(t,o)}catch(o){t.innerHTML=`<div class="mu-badge mu-warn" style="margin-top:8px">Error: ${p(o.message)}</div>
        <div class="mu-info">Pastikan sudah login ke Sitecore.</div>`}e.disabled=!1,e.innerHTML=`
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg> Refresh`}}let z=null,k=!1,w=!1;async function R(){if(w)return;let e=A();if(!e||e===z)return;if(w=!0,z=e,await O(e)){let o=document.querySelector(".scContentTreeNodeActive a")?.textContent?.trim()||e;k||(k=!0,W(o))}else k&&(k=!1,y());w=!1}function P(e){e<=0||(typeof window.scForm<"u"?D()?G():(setInterval(R,1500),R()):setTimeout(()=>P(e-1),200))}P(50);function p(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}})();})();
