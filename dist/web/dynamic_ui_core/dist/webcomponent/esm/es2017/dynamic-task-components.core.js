/*!
 * DynamicTaskComponents: Core, es2017
 * Built with http://stenciljs.com
 */
function e(e,t){return"sc-"+e.t+(t&&t!==l?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function n(e,t){let n,o,i=null,l=!1,s=!1,r=arguments.length;for(;r-- >2;)M.push(arguments[r]);for(;M.length>0;){let t=M.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)M.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&l?i[i.length-1].vtext+=t:null===i?i=[s?{vtext:t}:t]:i.push(s?{vtext:t}:t),l=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&M.push(r);t.class=M.join(" "),M.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,i||[],$):{vtag:e,vchildren:i,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,i:!1}}function o(e,t,n={}){let o=Array.isArray(t)?t:[t];const l=e.document,s=n.hydratedCssClass||"hydrated",r=n.exclude;r&&(o=o.filter(e=>-1===r.indexOf(e[0])));const a=o.map(e=>e[0]);if(a.length>0){const e=l.createElement("style");e.innerHTML=a.join()+"{visibility:hidden}."+s+"{visibility:inherit}",e.setAttribute("data-styles",""),l.head.insertBefore(e,l.head.firstChild)}const c=n.namespace||"DynamicTaskComponents";return T||(T=!0,function f(e,t,n){(e["s-apps"]=e["s-apps"]||[]).push(t),n.componentOnReady||(n.componentOnReady=function t(){function n(t){if(o.nodeName.indexOf("-")>0){for(var n=e["s-apps"],i=0,l=0;l<n.length;l++)if(e[n[l]].componentOnReady){if(e[n[l]].componentOnReady(o,t))return;i++}if(i<n.length)return void(e["s-cr"]=e["s-cr"]||[]).push([o,t])}t(null)}var o=this;return e.Promise?new e.Promise(n):{then:n}})}(e,c,e.HTMLElement.prototype)),applyPolyfills(e).then(()=>{if(!R[c]){const t={},r=n.resourcesUrl||"./";i(c,t,e,l,r,s),R[c]=L(c,t,e,l,r,s,o)}(function t(){o.forEach(t=>{let n;!function o(e){return/\{\s*\[native code\]\s*\}/.test(""+e)}(e.customElements.define)?(n=function(t){return e.HTMLElement.call(this,t)}).prototype=Object.create(e.HTMLElement.prototype,{constructor:{value:n,configurable:!0}}):n=new Function("w","return class extends w.HTMLElement{}")(e),R[c].l(function i(e){const t=g(e),n=t.s,o=u(e[0]);return t.s=(({mode:e,scoped:t})=>(function i(e,t,n){return import(`./build/${e}${t?".sc":""}.entry.js`).then(e=>e[n])})("string"==typeof n?n:n[e],t,o)),t}(t),n)})})()})}var i=function(){};function applyPolyfills(){return Promise.resolve()}const l="$",s={},r={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},a=(t,n,o,i)=>{let s=o.t+l,r=o[s];if((2===o.u||1===o.u&&!t.v.p)&&(i["s-sc"]=r?e(o,i.mode):e(o)),r){let e=n.m.head;if(n.p)if(1===o.u)e=i.shadowRoot;else{const t=i.getRootNode();t.host&&(e=t)}let l=t.M.get(e);if(l||t.M.set(e,l={}),!l[s]){let t;{t=r.content.cloneNode(!0),l[s]=!0;const o=e.querySelectorAll("[data-styles]");n.g(e,t,o.length&&o[o.length-1].nextSibling||e.firstChild)}}}},c=e=>null!=e,f=e=>e.toLowerCase(),u=e=>f(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),p="http://www.w3.org/1999/xlink",d=(e,t,n,o,i,l)=>{if("class"!==n||l)if("style"===n){for(const e in o)i&&null!=i[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in i)o&&i[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,i[e]):t.style[e]=i[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!l&&(n in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=e.k(t);o&&o.C&&o.C[n]?y(t,n,i):"ref"!==n&&(y(t,n,null==i?"":i),null!=i&&!1!==i||e.v.A(t,n))}else null!=i&&"key"!==n?((e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS(p,f(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS(p,f(t),n):e.setAttribute(t,n))})(t,n,i):(l||e.v._(t,n)&&(null==i||!1===i))&&e.v.A(t,n);else n=f(n)in t?f(n.substring(2)):f(n[2])+n.substring(3),i?i!==o&&e.v.S(t,n,i,0):e.v.j(t,n,0);else if(o!==i){const e=v(o),n=v(i),l=e.filter(e=>!n.includes(e)),s=v(t.className).filter(e=>!l.includes(e)),r=n.filter(t=>!e.includes(t)&&!s.includes(t));s.push(...r),t.className=s.join(" ")}},v=e=>null==e||""===e?[]:e.trim().split(/\s+/),y=(e,t,n)=>{try{e[t]=n}catch(e){}},m=(e,t,n,o,i)=>{const l=11===n.o.nodeType&&n.o.host?n.o.host:n.o,r=t&&t.vattrs||s,a=n.vattrs||s;for(i in r)a&&null!=a[i]||null==r[i]||d(e,l,i,r[i],void 0,o,n.i);for(i in a)i in r&&a[i]===("value"===i||"checked"===i?l[i]:r[i])||d(e,l,i,r[i],a[i],o,n.i)};let b=!1;const h=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{h(e,t)}))},w=(e,t)=>{{let n=0,o=!1;const i=()=>t.performance.now(),l=!1!==e.asyncQueue,s=Promise.resolve(),r=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(v))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](i())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=i())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},v=()=>{n++,p(a);const t=l?i()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(v):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(a),write:u(c)}}},M=[],$={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},g=(e,t,n)=>{const[o,i,,l,s,r]=e,a={color:{W:"color"}};if(l)for(t=0;t<l.length;t++)a[(n=l[t])[0]]={N:n[1],O:!!n[2],W:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,P:n[4]};return{t:o,s:i,C:Object.assign({},a),u:s,L:r?r.map(k):void 0}},k=e=>({R:e[0],T:e[1],D:!!e[2],H:!!e[3],q:!!e[4]}),C=(e,t)=>c(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,E=(e,t,n)=>{e.B.add(t),e.F.has(t)||(e.F.set(t,!0),e.I?e.queue.write(()=>A(e,t,n)):e.queue.tick(()=>A(e,t,n)))},A=async(e,o,i,l,s,r)=>{if(e.F.delete(o),!e.U.has(o)){if(!(s=e.Y.get(o))){if((r=e.Z.get(o))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{A(e,o,i)});if(s=N(e,o,e.G.get(o),i))try{s.componentWillLoad&&await s.componentWillLoad()}catch(t){e.J(t,3,o)}}((e,o,i,l)=>{try{const s=o.K.host,r=o.K.encapsulation,a="shadow"===r&&e.v.p;let c,f=i;if(a&&(f=i.shadowRoot),!i["s-rn"]){e.V(e,e.v,o,i);const n=i["s-sc"];n&&(e.v.X(i,t(n,!0)),"scoped"===r&&e.v.X(i,t(n)))}if(l.render||l.hostData||s||c){e.ee=!0;const t=l.render&&l.render();let o;e.ee=!1;const s=n(null,o,t),c=e.te.get(i)||{};c.o=f,e.te.set(i,e.render(i,c,s,a,r))}i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(e=>e()),i["s-rc"]=null)}catch(t){e.ee=!1,e.J(t,8,i,!0)}})(e,e.k(o),o,s),o["s-init"]()}},_=(e,t,n,o,i,l,s,r,a)=>{if(t.type||t.state){const f=e.ne.get(n);t.state||(!t.attr||void 0!==f[i]&&""!==f[i]||(r=l&&l.oe)&&c(a=r[t.attr])&&(f[i]=C(t.type,a)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=C(t.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),t.watchCallbacks&&(f[W+i]=t.watchCallbacks.slice()),j(o,i,function f(t){return(t=e.ne.get(e.ie.get(this)))&&t[i]},function u(n,o){(o=e.ie.get(this))&&(t.state||t.mutable)&&S(e,o,i,n,s)})}},S=(e,t,n,o,i,l,s)=>{(s=e.ne.get(t))||e.ne.set(t,s={});const r=s[n];if(o!==r&&(s[n]=o,l=e.Y.get(t))){{const e=s[W+n];if(e)for(let t=0;t<e.length;t++)try{l[e[t]].call(l,o,r,n)}catch(e){console.error(e)}}!e.ee&&t["s-rn"]&&E(e,t,i)}},j=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},W="wc-",N=(e,t,n,o,i,l)=>{try{i=new(l=e.k(t).K),((e,t,n,o,i,l)=>{e.ie.set(o,n),e.ne.has(n)||e.ne.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{_(e,s,n,o,t,i,l)})})(e,l,t,i,n,o),function s(e,t,n){if(t){const o=e.ie.get(n);t.forEach(t=>{n[t.method]={emit:n=>e.le(o,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:n})}})}}(e,l.events,i)}catch(n){i={},e.J(n,7,t,!0)}return e.Y.set(t,i),i},O=(e,t,n,o,i,l)=>{if(e.B.delete(t),(i=e.Z.get(t))&&((o=i["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),e.Z.delete(t)),e.se.length&&!e.B.size)for(;l=e.se.shift();)l()},x=(e,t,n,o)=>{t.forEach(([t,i])=>{3&i.N&&j(n,t,function n(){return(e.ne.get(this)||{})[t]},function n(l){S(e,this,t,C(i.P,l),o)})})},P=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.U.delete(n),e.re.has(n)||(e.ae=!0,e.B.add(n),e.re.set(n,!0),((e,t,n)=>{for(n=t;n=e.v.ce(n);)if(e.fe(n)){e.ue.has(t)||(e.Z.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.G.set(n,((e,t,n,o,i)=>(n.mode||(n.mode=e.pe(n)),n["s-cr"]||e.de(n,"ssrv")||e.p&&1===t.u||(n["s-cr"]=e.ve(""),n["s-cr"]["s-cn"]=!0,e.g(n,n["s-cr"],e.ye(n)[0])),1===t.u&&e.p&&!n.shadowRoot&&e.me(n,{mode:"open"}),o={oe:{}},t.C&&Object.keys(t.C).forEach(l=>{(i=t.C[l].W)&&(o.oe[i]=e.de(n,i))}),o))(e.v,t,n)),e.be(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.he&&((e,t)=>{for(;t;){if(!e.we(t))return 9!==e.Me(t);t=e.we(t)}})(e.v,t)&&(e.U.set(t,!0),O(e,t),h(e.te.get(t),!0),e.v.j(t),e.$e.delete(t),[e.Z,e.ge,e.G].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,i,l)=>{if(e.Y.get(t)&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.ue.set(t,!0),e.ke.has(t)||(e.ke.set(t,!0),t["s-ld"]=void 0,e.v.X(t,n));try{h(e.te.get(t)),(l=e.ge.get(t))&&(l.forEach(e=>e(t)),e.ge.delete(t))}catch(n){e.J(n,4,t)}O(e,t)}})(e,this,o)},n.forceUpdate=function(){E(e,this,i)},t.C){const o=Object.entries(t.C);x(e,o,n,i)}},L=(e,t,o,i,s,u)=>{const p=o.performance,d={html:{}},v=o[e]=o[e]||{},y=((e,t,n)=>{const o=new WeakMap,i={m:n,p:!!n.documentElement.attachShadow,Ce:!1,Me:e=>e.nodeType,Ee:e=>n.createElement(e),Ae:(e,t)=>n.createElementNS(e,t),ve:e=>n.createTextNode(e),_e:e=>n.createComment(e),g:(e,t,n)=>e.insertBefore(t,n),Se:e=>e.remove(),je:(e,t)=>e.appendChild(t),X:(e,t)=>{e.classList.add(t)},ye:e=>e.childNodes,we:e=>e.parentNode,We:e=>e.nextSibling,Ne:e=>e.previousSibling,Oe:e=>f(e.nodeName),xe:e=>e.textContent,Pe:(e,t)=>e.textContent=t,de:(e,t)=>e.getAttribute(t),Le:(e,t,n)=>e.setAttribute(t,n),A:(e,t)=>e.removeAttribute(t),_:(e,t)=>e.hasAttribute(t),pe:t=>t.getAttribute("mode")||(e.Context||{}).mode,Re:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.ce(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,S:(t,n,l,s,a,c,f,u,p,d)=>{let v=t,y=l,m=o.get(t);d=n+s,m&&m[d]&&m[d](),"string"==typeof f?v=i.Re(t,f):"object"==typeof f?v=f:(p=n.split(":")).length>1&&(v=i.Re(t,p[0]),n=p[1]),v&&((p=n.split(".")).length>1&&(n=p[0],y=(e=>{e.keyCode===r[p[1]]&&l(e)})),u=i.Ce?{capture:!!a,passive:!!c}:!!a,e.ael(v,n,y,u),m||o.set(t,m={}),m[d]=(()=>{v&&e.rel(v,n,y,u),m[d]=null}))},j:(e,t,n,i)=>{(i=o.get(e))&&(t?i[t+n]&&i[t+n]():Object.keys(i).forEach(e=>{i[e]&&i[e]()}))},Te:(e,n,o,i)=>(i=new t.CustomEvent(n,o),e&&e.dispatchEvent(i),i),ce:(e,t)=>(t=i.we(e))&&11===i.Me(t)?t.host:t,De:(e,t,n,o)=>e.setAttributeNS(t,n,o),me:(e,t)=>e.attachShadow(t)};e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o)));try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.Ce=!0}))}catch(e){}return i})(v,o,i),h=y.m.documentElement,M=o["s-defined"]=o["s-defined"]||{},$={v:y,l:(e,t)=>{o.customElements.get(e.t)||(P($,d[e.t]=e,t.prototype,u,p),o.customElements.define(e.t,t))},k:e=>d[y.Oe(e)],He:e=>t[e],isClient:!0,fe:e=>!(!M[y.Oe(e)]&&!$.k(e)),J:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=w(v,o),be:(e,t)=>{{const n=!y.p,o={mode:t.mode,scoped:n};e.s(o).then(n=>{try{e.K=n,function o(e,t,n,i,s){if(i){const n=t.t+(s||l);if(!t[n]){const o=e.Ee("template");t[n]=o,o.innerHTML=`<style>${i}</style>`,e.je(e.m.head,o)}}}(y,e,e.u,n.style,n.styleMode)}catch(t){console.error(t),e.K=class{}}E($,t,p)})}},ee:!1,I:!1,he:!1,V:a,Z:new WeakMap,M:new WeakMap,re:new WeakMap,$e:new WeakMap,ke:new WeakMap,ue:new WeakMap,ie:new WeakMap,G:new WeakMap,Y:new WeakMap,U:new WeakMap,F:new WeakMap,ge:new WeakMap,qe:new WeakMap,te:new WeakMap,ne:new WeakMap,B:new Set,se:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.resourcesUrl=t.publicPath=s,$.le=t.emit=((e,n,o)=>y.Te(e,t.eventNameFn?t.eventNameFn(n):n,o)),v.h=n,v.Context=t,v.onReady=(()=>new Promise(e=>$.queue.write(()=>$.B.size?$.se.push(e):e()))),$.render=((e,t)=>{let n,o,i,l,s,r,a;const f=(i,p,d,v,y,h,w,M,$)=>{if(M=p.vchildren[d],n||(l=!0,"slot"===M.vtag&&(o&&t.X(v,o+"-s"),M.vchildren?M.Be=!0:M.Fe=!0)),c(M.vtext))M.o=t.ve(M.vtext);else if(M.Fe)M.o=t.ve("");else{if(h=M.o=b||"svg"===M.vtag?t.Ae("http://www.w3.org/2000/svg",M.vtag):t.Ee(M.Be?"slot-fb":M.vtag),e.fe(h)&&e.ue.delete(a),b="svg"===M.vtag||"foreignObject"!==M.vtag&&b,m(e,null,M,b),c(o)&&h["s-si"]!==o&&t.X(h,h["s-si"]=o),M.vchildren)for(y=0;y<M.vchildren.length;++y)(w=f(i,M,y,h))&&t.je(h,w);"svg"===M.vtag&&(b=!1)}return M.o["s-hn"]=r,(M.Be||M.Fe)&&(M.o["s-sr"]=!0,M.o["s-cr"]=s,M.o["s-sn"]=M.vname||"",($=i&&i.vchildren&&i.vchildren[d])&&$.vtag===M.vtag&&i.o&&u(i.o)),M.o},u=(n,o,i,s)=>{e.he=!0;const a=t.ye(n);for(i=a.length-1;i>=0;i--)(s=a[i])["s-hn"]!==r&&s["s-ol"]&&(t.Se(s),t.g(h(s),s,y(s)),t.Se(s["s-ol"]),s["s-ol"]=null,l=!0),o&&u(s,o);e.he=!1},p=(e,n,o,i,l,s,a,u)=>{const p=e["s-cr"];for((a=p&&t.we(p)||e).shadowRoot&&t.Oe(a)===r&&(a=a.shadowRoot);l<=s;++l)i[l]&&(u=c(i[l].vtext)?t.ve(i[l].vtext):f(null,o,l,e))&&(i[l].o=u,t.g(a,u,y(n)))},d=(e,n,o,l)=>{for(;n<=o;++n)c(e[n])&&(l=e[n].o,i=!0,l["s-ol"]?t.Se(l["s-ol"]):u(l,!0),t.Se(l))},v=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),y=e=>e&&e["s-ol"]?e["s-ol"]:e,h=e=>t.we(e["s-ol"]?e["s-ol"]:e),w=(n,o,i)=>{const l=o.o=n.o,s=n.vchildren,r=o.vchildren;b=o.o&&c(t.ce(o.o))&&void 0!==o.o.ownerSVGElement,b="svg"===o.vtag||"foreignObject"!==o.vtag&&b,c(o.vtext)?(i=l["s-cr"])?t.Pe(t.we(i),o.vtext):n.vtext!==o.vtext&&t.Pe(l,o.vtext):("slot"!==o.vtag&&m(e,n,o,b),c(s)&&c(r)?((e,n,o,i,l,s,r,a)=>{let m=0,b=0,M=n.length-1,$=n[0],g=n[M],k=i.length-1,C=i[0],E=i[k];for(;m<=M&&b<=k;)if(null==$)$=n[++m];else if(null==g)g=n[--M];else if(null==C)C=i[++b];else if(null==E)E=i[--k];else if(v($,C))w($,C),$=n[++m],C=i[++b];else if(v(g,E))w(g,E),g=n[--M],E=i[--k];else if(v($,E))"slot"!==$.vtag&&"slot"!==E.vtag||u(t.we($.o)),w($,E),t.g(e,$.o,t.We(g.o)),$=n[++m],E=i[--k];else if(v(g,C))"slot"!==$.vtag&&"slot"!==E.vtag||u(t.we(g.o)),w(g,C),t.g(e,g.o,$.o),g=n[--M],C=i[++b];else{for(l=null,s=m;s<=M;++s)if(n[s]&&c(n[s].vkey)&&n[s].vkey===C.vkey){l=s;break}c(l)?((a=n[l]).vtag!==C.vtag?r=f(n&&n[b],o,l,e):(w(a,C),n[l]=void 0,r=a.o),C=i[++b]):(r=f(n&&n[b],o,b,e),C=i[++b]),r&&t.g(h($.o),r,y($.o))}m>M?p(e,null==i[k+1]?null:i[k+1].o,o,i,b,k):b>k&&d(n,m,M)})(l,s,o,r):c(r)?(c(n.vtext)&&t.Pe(l,""),p(l,null,o,r,0,r.length-1)):c(s)&&d(s,0,s.length-1)),b&&"svg"===o.vtag&&(b=!1)},M=(e,n,o,i,l,s,r,a)=>{for(i=0,l=(o=t.ye(e)).length;i<l;i++)if(n=o[i],1===t.Me(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<l;s++)if(o[s]["s-hn"]!==n["s-hn"])if(a=t.Me(o[s]),""!==r){if(1===a&&r===t.de(o[s],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.xe(o[s]).trim()){n.hidden=!0;break}M(n)}},$=[],g=(e,n,o,l,s,r,a,c,f,u)=>{for(s=0,r=(n=t.ye(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(l=o["s-cr"]))for(c=t.ye(t.we(l)),f=o["s-sn"],a=c.length-1;a>=0;a--)(l=c[a])["s-cn"]||l["s-nr"]||l["s-hn"]===o["s-hn"]||((3===(u=t.Me(l))||8===u)&&""===f||1===u&&null===t.de(l,"slot")&&""===f||1===u&&t.de(l,"slot")===f)&&($.some(e=>e.Ie===l)||(i=!0,l["s-sn"]=f,$.push({Qe:o,Ie:l})));1===t.Me(o)&&g(o)}};return(c,f,u,p,d,v,y,m,b,h,k,C)=>{if(a=c,r=t.Oe(a),s=a["s-cr"],n=p,o=a["s-sc"],l=i=!1,w(f,u),l){for(g(u.o),y=0;y<$.length;y++)(m=$[y]).Ie["s-ol"]||((b=t.ve(""))["s-nr"]=m.Ie,t.g(t.we(m.Ie),m.Ie["s-ol"]=b,m.Ie));for(e.he=!0,y=0;y<$.length;y++){for(m=$[y],k=t.we(m.Qe),C=t.We(m.Qe),b=m.Ie["s-ol"];b=t.Ne(b);)if((h=b["s-nr"])&&h&&h["s-sn"]===m.Ie["s-sn"]&&k===t.we(h)&&(h=t.We(h))&&h&&!h["s-nr"]){C=h;break}(!C&&k!==t.we(m.Ie)||t.We(m.Ie)!==C)&&m.Ie!==C&&(t.Se(m.Ie),t.g(k,m.Ie,C))}e.he=!1}return i&&M(u.o),$.length=0,u}})($,y),h["s-ld"]=[],h["s-rn"]=!0,h["s-init"]=(()=>{$.ue.set(h,v.loaded=$.I=!0),y.Te(o,"appload",{detail:{namespace:e}})}),((e,t,n,o,i,l)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.k(t);if(o)if(e.ue.has(t))n(t);else{const o=e.ge.get(t)||[];o.push(n),e.ge.set(t,o)}return!!o}),i){for(l=i.length-1;l>=0;l--)t.componentOnReady(i[l][0],i[l][1])&&i.splice(l,1);for(l=0;l<o.length;l++)if(!n[o[l]].componentOnReady)return;for(l=0;l<i.length;l++)i[l][1](null);i.length=0}})($,v,o,o["s-apps"],o["s-cr"]),v.initialized=!0,$},R={};let T=!1;export{o as defineCustomElement,n as h};