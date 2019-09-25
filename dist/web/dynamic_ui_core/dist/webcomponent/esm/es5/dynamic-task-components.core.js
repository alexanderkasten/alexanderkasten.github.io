/*!
 * DynamicTaskComponents: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)$.push(arguments[f]);for(;$.length>0;){var c=$.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)$.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&$.push(f);t.class=$.join(" "),$.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],j):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"DynamicTaskComponents";return D||(D=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),L[s].u(function i(n){var t=A(n),e=t.s,r=d(n[0]);return t.s=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return import("./build/"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!L[s]){var u={},c=e.resourcesUrl||"./";f(s,u,n,i,c,o),L[s]=R(s,u,n,i,c,o,r)}if(window.customStyleShim)return L[s].l=window.customStyleShim,L[s].l.initShim().then(t);t()})}this&&this.v;var i=this&&this.p||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},o=this&&this.m||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.g.pop(),f.M.pop();continue;default:if(!(o=(o=f.M).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.g.push(e);break}o[2]&&f.g.pop(),f.M.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,k:function(){if(1&o[0])throw o[1];return o[1]},M:[],g:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=this,f=function(){};function applyPolyfills(n){n.j=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<m;n+=2)(0,S[n])(S[n+1]),S[n]=void 0,S[n+1]=void 0;m=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.A;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.C)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.A===W?s(n,t.C):t.A===x?l(n,t.C):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.S);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.O&&n.O(n.C),p(n)}function s(n,t){n.A===T&&(n.C=t,n.A=W,0!==n._.length&&M(p,n))}function l(n,t){n.A===T&&(n.A=x,n.C=t,M(a,n))}function v(n,t,e,r){var i=n._,o=i.length;n.O=null,i[o]=t,i[o+W]=e,i[o+x]=r,0===o&&n.A&&M(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,i,o=n.C,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n._.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.A===T&&(i&&f?c(t,o):a?l(t,u):n===W?s(t,o):n===x&&l(t,o))}function h(n){n[_]=N++,n.A=void 0,n.C=void 0,n._=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},m=0,b=void 0,g=void 0,M=function(n,t){S[m]=n,S[m+1]=t,2===(m+=2)&&(g?g(e):O())},k=(y=void 0!==n?n:void 0)||{},$=k.MutationObserver||k.WebKitMutationObserver;k="undefined"==typeof self;var j,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,S=Array(1e3),O=void 0;O=$?(j=0,A=new $(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=j=++j%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().require("vertx");return void 0!==(b=n.T||n.W)?function(){b(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),T=void 0,W=1,x=2,P={error:null},N=0,R=function(){function n(n,t){this.P=n,this.N=new n(o),this.N[_]||h(this.N),w(t)?(this.R=this.length=t.length,this.C=Array(this.length),0===this.length?s(this.N,this.C):(this.length=this.length||0,this.L(t),0===this.R&&s(this.N,this.C))):l(this.N,Error("Array Methods must be provided an Array"))}return n.prototype.L=function(n){for(var t=0;this.A===T&&t<n.length;t++)this.D(n[t],t)},n.prototype.D=function(n,t){var e=this.P,c=e.resolve;c===i?(c=u(n))===r&&n.A!==T?this.F(n.A,t,n.C):"function"!=typeof c?(this.R--,this.C[t]=n):e===L?(f(e=new e(o),n,c),this.H(e,t)):this.H(new e(function(t){return t(n)}),t):this.H(c(n),t)},n.prototype.F=function(n,t,e){var r=this.N;r.A===T&&(this.R--,n===x?l(r,e):this.C[t]=e),0===this.R&&s(r,this.C)},n.prototype.H=function(n,t){var e=this;v(n,void 0,function(n){return e.F(W,t,n)},function(n){return e.F(x,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.C=this.A=void 0,this._=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).N},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.q=function(n){g=n},L.U=function(n){M=n},L.B=M,L.I=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.I(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||t.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||t.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||t.push(import("./polyfills/string.js")),n.fetch||t.push(import("./polyfills/fetch.js")),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(import("./polyfills/css-shim.js")),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(import("./polyfills/url.js")),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},l=function(t,e,r,i){var o=r.t+c,u=r[o];if((2===r.G||1===r.G&&!t.Z.Y)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u){var f=e.J.head;if(e.Y)if(1===r.G)f=i.shadowRoot;else{var a=i.getRootNode();a.host&&(f=a)}var s=t.K.get(f);if(s||t.K.set(f,s={}),!s[o]){var l=void 0;if(t.l?l=t.l.createHostStyle(i,o,u):((l=e.V("style")).innerHTML=u,s[o]=!0),l){var v=f.querySelectorAll("[data-styles]");e.X(f,l,v.length&&v[v.length-1].nextSibling||f.firstChild)}}}},v=function(n){return null!=n},p=function(n){return n.toLowerCase()},d=function(n){return p(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},h="http://www.w3.org/1999/xlink",y=function(n,t,e,r,i,o){if("class"!==e||o)if("style"===e){for(var u in r)i&&null!=i[u]||(/-/.test(u)?t.style.removeProperty(u):t.style[u]="");for(var u in i)r&&i[u]===r[u]||(/-/.test(u)?t.style.setProperty(u,i[u]):t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var f=n.nn(t);f&&f.tn&&f.tn[e]?m(t,e,i):"ref"!==e&&(m(t,e,null==i?"":i),null!=i&&!1!==i||n.Z.en(t,e))}else null!=i&&"key"!==e?function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS(h,p(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS(h,p(t),e):n.setAttribute(t,e))}(t,e,i):(o||n.Z.rn(t,e)&&(null==i||!1===i))&&n.Z.en(t,e);else e=p(e)in t?p(e.substring(2)):p(e[2])+e.substring(3),i?i!==r&&n.Z.in(t,e,i,0):n.Z.on(t,e,0);else if(r!==i){var c=w(r),a=w(i),s=c.filter(function(n){return!a.includes(n)}),l=w(t.className).filter(function(n){return!s.includes(n)}),v=a.filter(function(n){return!c.includes(n)&&!l.includes(n)});l.push.apply(l,v),t.className=l.join(" ")}},w=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},m=function(n,t,e){try{n[t]=e}catch(n){}},b=function(n,t,e,r,i){var o=11===e.i.nodeType&&e.i.host?e.i.host:e.i,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||y(n,o,i,u[i],void 0,r,e.o);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||y(n,o,i,u[i],f[i],r,e.o)},g=!1,M=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach(function(n){M(n,t)}))},k=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},$=[],j={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},A=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{un:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={fn:e[1],cn:!!e[2],un:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,an:e[4]};return{t:r,s:i,tn:Object.assign({},c),G:u,sn:f?f.map(E):void 0}},E=function(n){return{ln:n[0],vn:n[1],pn:!!n[2],dn:!!n[3],hn:!!n[4]}},C=function(n,t){return v(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},S=function(n,t,e){n.yn.add(t),n.wn.has(t)||(n.wn.set(t,!0),n.mn?n.queue.write(function(){return O(n,t,e)}):n.queue.tick(function(){return O(n,t,e)}))},O=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:if(n.wn.delete(r),n.bn.has(r))return[3,12];if(a=n.gn.get(r))return[3,6];if((s=n.Mn.get(r))&&!s["s-rn"])return(s["s-rc"]=s["s-rc"]||[]).push(function(){O(n,r,f)}),[2];if(!(a=x(n,r,n.kn.get(r),f)))return[3,5];o.label=1;case 1:return o.M.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.k(),o.label=3;case 3:return[3,5];case 4:return i=o.k(),n.$n(i,3,r),[3,5];case 5:case 6:return[3,11];case 7:return o.M.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.k(),o.label=9;case 9:return[3,11];case 10:return u=o.k(),n.$n(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u=r.jn.host,f=r.jn.encapsulation,c="shadow"===f&&n.Z.Y,a=i;if(c&&(a=i.shadowRoot),!i["s-rn"]){n.An(n,n.Z,r,i);var s=i["s-sc"];s&&(n.Z.En(i,t(s,!0)),"scoped"===f&&n.Z.En(i,t(s)))}if(o.render||o.hostData||u){n.Cn=!0;var l=o.render&&o.render();n.Cn=!1;var v=e(null,void 0,l),p=n.Sn.get(i)||{};p.i=a,n.Sn.set(i,n.render(i,p,v,c,f))}n.l&&n.l.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.Cn=!1,n.$n(t,8,i,!0)}})(n,n.nn(r),r,a),r["s-init"](),o.label=12;case 12:return[2]}})})},_=function(n,t,e,r,i,o,u){(u=n.On.get(t))||n.On.set(t,u={});var f=u[e];if(r!==f&&(u[e]=r,o=n.gn.get(t))){var c=u[W+e];if(c)for(var a=0;a<c.length;a++)try{o[c[a]].call(o,r,f,e)}catch(n){console.error(n)}!n.Cn&&t["s-rn"]&&S(n,t,i)}},T=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},W="wc-",x=function(n,t,e,r,i,o){try{i=new(o=n.nn(t).jn),function(n,t,e,r,i,o){n._n.set(r,e),n.On.has(e)||n.On.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type||t.state){var a=n.On.get(e);t.state||(!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.Tn)&&v(c=f[t.attr])&&(a[i]=C(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=C(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),t.watchCallbacks&&(a[W+i]=t.watchCallbacks.slice()),T(r,i,function s(t){return(t=n.On.get(n._n.get(this)))&&t[i]},function l(e,r){(r=n._n.get(this))&&(t.state||t.mutable)&&_(n,r,i,e,u)})}})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r),function u(n,t,e){if(t){var r=n._n.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.Wn(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,i)}catch(e){i={},n.$n(e,7,t,!0)}return n.gn.set(t,i),i},P=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.nn(r)&&!n.xn.has(r))return!1;if(!P(n,r))return!1}}return!0},N=function(n,t,e,r,i,o){if(n.yn.delete(t),(i=n.Mn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.Mn.delete(t)),n.Pn.length&&!n.yn.size)for(;o=n.Pn.shift();)o()},R=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},d=r[n]=r[n]||{},h=function(n,t,e){var r=new WeakMap,i={J:e,Y:!!e.documentElement.attachShadow,Nn:!1,Rn:function(n){return n.nodeType},V:function(n){return e.createElement(n)},Ln:function(n,t){return e.createElementNS(n,t)},Dn:function(n){return e.createTextNode(n)},Fn:function(n){return e.createComment(n)},X:function(n,t,e){return n.insertBefore(t,e)},Hn:function(n){return n.remove()},qn:function(n,t){return n.appendChild(t)},En:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},Un:function(n){return n.childNodes},Bn:function(n){return n.parentNode},In:function(n){return n.nextSibling},Gn:function(n){return n.previousSibling},Qn:function(n){return p(n.nodeName)},Yn:function(n){return n.textContent},Zn:function(n,t){return n.textContent=t},zn:function(n,t){return n.getAttribute(t)},Jn:function(n,t,e){return n.setAttribute(t,e)},en:function(n,t){return n.removeAttribute(t)},rn:function(n,t){return n.hasAttribute(t)},Kn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},Vn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.Xn(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},in:function(t,e,o,u,f,c,a,l,v,p){var d=t,h=o,y=r.get(t);p=e+u,y&&y[p]&&y[p](),"string"==typeof a?d=i.Vn(t,a):"object"==typeof a?d=a:(v=e.split(":")).length>1&&(d=i.Vn(t,v[0]),e=v[1]),d&&((v=e.split(".")).length>1&&(e=v[0],h=function(n){n.keyCode===s[v[1]]&&o(n)}),l=i.Nn?{capture:!!f,passive:!!c}:!!f,n.ael(d,e,h,l),y||r.set(t,y={}),y[p]=function(){d&&n.rel(d,e,h,l),y[p]=null})},on:function(n,t,e,i){(i=r.get(n))&&(t?i[t+e]&&i[t+e]():Object.keys(i).forEach(function(n){i[n]&&i[n]()}))},nt:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},Xn:function(n,t){return(t=i.Bn(n))&&11===i.Rn(t)?t.host:t},tt:function(n,t,e,r){return n.setAttributeNS(t,e,r)},et:function(n,t){return n.attachShadow(t)}};"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.Nn=!0}}))}catch(n){}return i}(d,r,i),y=h.J.documentElement,w=r["s-defined"]=r["s-defined"]||{},m={Z:h,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.bn.delete(e),n.xn.has(e)||(n.rt=!0,n.yn.add(e),n.xn.set(e,!0),function(n,t,e){for(e=t;e=n.Z.Xn(e);)if(n.it(e)){n.ot.has(t)||(n.Mn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.kn.set(e,function(n,t,e,r,i){if(e.mode||(e.mode=n.Kn(e)),e["s-cr"]||n.zn(e,"ssrv")||n.Y&&1===t.G||(e["s-cr"]=n.Dn(""),e["s-cr"]["s-cn"]=!0,n.X(e,e["s-cr"],n.Un(e)[0])),!n.Y&&1===t.G)try{!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e)}catch(n){}return 1===t.G&&n.Y&&!e.shadowRoot&&n.et(e,{mode:"open"}),r={Tn:{}},t.tn&&Object.keys(t.tn).forEach(function(o){(i=t.tn[o].un)&&(r.Tn[i]=n.zn(e,i))}),r}(n.Z,t,e)),n.ut(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){!n.ft&&function(n,t){for(;t;){if(!n.Bn(t))return 9!==n.Rn(t);t=n.Bn(t)}}(n.Z,t)&&(n.bn.set(t,!0),N(n,t),M(n.Sn.get(t),!0),n.Z.on(t),n.ct.delete(t),n.l&&n.l.removeHost(t),[n.Mn,n.at,n.kn].forEach(function(n){return n.delete(t)}))})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o){if(P(n,t)&&n.gn.get(t)&&!n.bn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.ot.set(t,!0),n.st.has(t)||(n.st.set(t,!0),t["s-ld"]=void 0,n.Z.En(t,e));try{M(n.Sn.get(t)),(o=n.at.get(t))&&(o.forEach(function(n){return n(t)}),n.at.delete(t))}catch(e){n.$n(e,4,t)}N(n,t)}})(n,this,r)},e.forceUpdate=function(){S(n,this,i)},t.tn){var o=Object.entries(t.tn);(function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1];3&o.fn&&T(e,i,function t(){return(n.On.get(this)||{})[i]},function t(e){_(n,this,i,C(o.an,e),r)})})})(n,0,e,i)}}(m,a[n.t]=n,t.prototype,u,f),r.customElements.define(n.t,t))},nn:function(n){return a[h.Qn(n)]},lt:function(n){return t[n]},isClient:!0,it:function(n){return!(!w[h.Qn(n)]&&!m.nn(n))},$n:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=k(d,r),ut:function(n,t){var e=!h.Y,r={mode:t.mode,scoped:e};n.s(r).then(function(e){try{n.jn=e,function r(n,t,e,i,o){if(i){var u=t.t+(o||c);t[u]||(t[u]=i)}}(0,n,n.G,e.style,e.styleMode)}catch(t){console.error(t),n.jn=function i(){}}S(m,t,f)})},Cn:!1,mn:!1,ft:!1,An:l,Mn:new WeakMap,K:new WeakMap,xn:new WeakMap,ct:new WeakMap,st:new WeakMap,ot:new WeakMap,_n:new WeakMap,kn:new WeakMap,gn:new WeakMap,bn:new WeakMap,wn:new WeakMap,at:new WeakMap,vt:new WeakMap,Sn:new WeakMap,On:new WeakMap,yn:new Set,Pn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,m.Wn=t.emit=function(n,e,r){return h.nt(n,t.eventNameFn?t.eventNameFn(e):e,r)},d.h=e,d.Context=t,d.onReady=function(){return new Promise(function(n){return m.queue.write(function(){return m.yn.size?m.Pn.push(n):n()})})},m.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,l,p,d,h,y,w,m,M){if(m=l.vchildren[p],e||(o=!0,"slot"===m.vtag&&(r&&t.En(d,r+"-s"),m.vchildren?m.pt=!0:m.dt=!0)),v(m.vtext))m.i=t.Dn(m.vtext);else if(m.dt)m.i=t.Dn("");else{if(y=m.i=g||"svg"===m.vtag?t.Ln("http://www.w3.org/2000/svg",m.vtag):t.V(m.pt?"slot-fb":m.vtag),n.it(y)&&n.ot.delete(c),g="svg"===m.vtag||"foreignObject"!==m.vtag&&g,b(n,null,m,g),v(r)&&y["s-si"]!==r&&t.En(y,y["s-si"]=r),m.vchildren)for(h=0;h<m.vchildren.length;++h)(w=a(i,m,h,y))&&t.qn(y,w);"svg"===m.vtag&&(g=!1)}return m.i["s-hn"]=f,(m.pt||m.dt)&&(m.i["s-sr"]=!0,m.i["s-cr"]=u,m.i["s-sn"]=m.vname||"",(M=i&&i.vchildren&&i.vchildren[p])&&M.vtag===m.vtag&&i.i&&s(i.i)),m.i},s=function(e,r,i,u){n.ft=!0;var c=t.Un(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.Hn(u),t.X(y(u),u,h(u)),t.Hn(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.ft=!1},l=function(n,e,r,i,o,u,c,s){var l=n["s-cr"];for((c=l&&t.Bn(l)||n).shadowRoot&&t.Qn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=v(i[o].vtext)?t.Dn(i[o].vtext):a(null,r,o,n))&&(i[o].i=s,t.X(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)v(n[e])&&(o=n[e].i,i=!0,o["s-ol"]?t.Hn(o["s-ol"]):s(o,!0),t.Hn(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.Bn(n["s-ol"]?n["s-ol"]:n)},w=function(e,r,i){var o=r.i=e.i,u=e.vchildren,f=r.vchildren;g=r.i&&v(t.Xn(r.i))&&void 0!==r.i.ownerSVGElement,g="svg"===r.vtag||"foreignObject"!==r.vtag&&g,v(r.vtext)?(i=o["s-cr"])?t.Zn(t.Bn(i),r.vtext):e.vtext!==r.vtext&&t.Zn(o,r.vtext):("slot"!==r.vtag&&b(n,e,r,g),v(u)&&v(f)?function(n,e,r,i,o,u,f,c){for(var m=0,b=0,g=e.length-1,M=e[0],k=e[g],$=i.length-1,j=i[0],A=i[$];m<=g&&b<=$;)if(null==M)M=e[++m];else if(null==k)k=e[--g];else if(null==j)j=i[++b];else if(null==A)A=i[--$];else if(d(M,j))w(M,j),M=e[++m],j=i[++b];else if(d(k,A))w(k,A),k=e[--g],A=i[--$];else if(d(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Bn(M.i)),w(M,A),t.X(n,M.i,t.In(k.i)),M=e[++m],A=i[--$];else if(d(k,j))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Bn(k.i)),w(k,j),t.X(n,k.i,M.i),k=e[--g],j=i[++b];else{for(o=null,u=m;u<=g;++u)if(e[u]&&v(e[u].vkey)&&e[u].vkey===j.vkey){o=u;break}v(o)?((c=e[o]).vtag!==j.vtag?f=a(e&&e[b],r,o,n):(w(c,j),e[o]=void 0,f=c.i),j=i[++b]):(f=a(e&&e[b],r,b,n),j=i[++b]),f&&t.X(y(M.i),f,h(M.i))}m>g?l(n,null==i[$+1]?null:i[$+1].i,r,i,b,$):b>$&&p(e,m,g)}(o,u,r,f):v(f)?(v(e.vtext)&&t.Zn(o,""),l(o,null,r,f,0,f.length-1)):v(u)&&p(u,0,u.length-1)),g&&"svg"===r.vtag&&(g=!1)},m=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.Un(n)).length;i<o;i++)if(e=r[i],1===t.Rn(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.Rn(r[u]),""!==f){if(1===c&&f===t.zn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.Yn(r[u]).trim()){e.hidden=!0;break}m(e)}},M=[],k=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.Un(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.Un(t.Bn(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.Rn(o))||8===l)&&""===s||1===l&&null===t.zn(o,"slot")&&""===s||1===l&&t.zn(o,"slot")===s)&&(M.some(function(n){return n.ht===o})||(i=!0,o["s-sn"]=s,M.push({yt:r,ht:o})));1===t.Rn(r)&&k(r)}};return function(a,s,l,v,p,d,h,y,b,g,$,j){if(c=a,f=t.Qn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,w(s,l),o){for(k(l.i),h=0;h<M.length;h++)(y=M[h]).ht["s-ol"]||((b=t.Dn(""))["s-nr"]=y.ht,t.X(t.Bn(y.ht),y.ht["s-ol"]=b,y.ht));for(n.ft=!0,h=0;h<M.length;h++){for(y=M[h],$=t.Bn(y.yt),j=t.In(y.yt),b=y.ht["s-ol"];b=t.Gn(b);)if((g=b["s-nr"])&&g&&g["s-sn"]===y.ht["s-sn"]&&$===t.Bn(g)&&(g=t.In(g))&&g&&!g["s-nr"]){j=g;break}(!j&&$!==t.Bn(y.ht)||t.In(y.ht)!==j)&&y.ht!==j&&(t.Hn(y.ht),t.X($,y.ht,j))}n.ft=!1}return i&&m(l.i),M.length=0,l}}(m,h),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=function(){m.ot.set(y,d.loaded=m.mn=!0),h.nt(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.nn(t);if(r)if(n.ot.has(t))e(t);else{var i=n.at.get(t)||[];i.push(e),n.at.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(m,d,r,r["s-apps"],r["s-cr"]),d.initialized=!0,m},L={},D=!1;export{r as defineCustomElement,e as h};