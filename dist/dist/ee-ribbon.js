(()=>{(function(){"use strict";let p="sgkhRibbon",i="sgkh-ribbon-toggle-btn",o="sgkh-ee-ribbon-hidden",e=top.window.document;function s(){let t=e.querySelector('[data-sc-id="PageEditBar"]');return t||e.querySelector("#scWebEditRibbon")}function a(){return e.querySelector("#scCrossPiece")}if(!e.querySelector("#scWebEditRibbon")&&!e.querySelector('[data-sc-id="PageEditBar"]'))return;function c(){return e.cookie.replace(/(?:(?:^|.*;\s*)sgkhRibbon\s*=\s*([^;]*).*$)|^.*$/,"$1")!=="0"}function d(t){e.cookie=`sgkhRibbon=${t?"1":"0"};path=/`}function u(){let t=s(),n=a();t&&t.classList.remove(o),n&&n.classList.remove(o),d(!0),r(!0)}function b(){let t=s(),n=a();t&&t.classList.add(o),n&&n.classList.add(o),d(!1),r(!1)}function g(){c()?b():u()}function f(){if(e.getElementById("sgkh-ribbon-styles"))return;let t=e.createElement("style");t.id="sgkh-ribbon-styles",t.textContent=`
      /* Hidden class untuk ribbon (sc_ext: sc-ext-toggleRibon-hidden) */
      .${o} { display: none !important; }

      /* Toggle button \u2014 bulat, pojok kanan atas */
      #${i} {
        position: fixed;
        top: 10px;
        right: 14px;
        z-index: 2147483647;
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--sgkh-c-accent) 0%, var(--sgkh-c-dark) 100%);
        color: #ffffff;
        border: 2px solid rgba(255,255,255,.2);
        border-radius: 50%;
        cursor: pointer;
        user-select: none;
        box-shadow: 0 3px 12px rgba(0,0,0,.4);
        transition: background .15s, box-shadow .15s, transform .15s;
      }
      #${i}:hover {
        background: linear-gradient(135deg, var(--sgkh-c-hover) 0%, var(--sgkh-c-accent) 100%);
        box-shadow: 0 5px 18px rgba(0,0,0,.5);
        transform: scale(1.08);
      }
      #${i}:active { transform: scale(0.93); }

      /* Saat ribbon tersembunyi: opacity sedikit diturunkan */
      #${i}.sgkh-hidden-state {
        opacity: 0.75;
      }
      #${i}.sgkh-hidden-state:hover {
        opacity: 1;
      }
    `,(e.head||e.documentElement).appendChild(t)}function h(){if(f(),e.getElementById(i))return;let t=e.createElement("button");t.type="button",t.id=i,t.title="Toggle Ribbon",t.innerHTML=`
      <svg width="17" height="17" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="6"  x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    `,t.addEventListener("click",g),e.body.appendChild(t)}function r(t){let n=e.getElementById(i);n&&(n.classList.toggle("sgkh-hidden-state",!t),n.title=t?"Sembunyikan Ribbon":"Tampilkan Ribbon")}function k(){h(),c()?r(!0):b()}function l(t){t<=0||(s()?k():setTimeout(()=>l(t-1),200))}l(40)})();})();
