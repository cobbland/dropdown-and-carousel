(()=>{var n={56:(n,e,o)=>{"use strict";n.exports=function(n){var e=o.nc;e&&n.setAttribute("nonce",e)}},72:n=>{"use strict";var e=[];function o(n){for(var o=-1,t=0;t<e.length;t++)if(e[t].identifier===n){o=t;break}return o}function t(n,t){for(var i={},c=[],s=0;s<n.length;s++){var a=n[s],d=t.base?a[0]+t.base:a[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=o(p),f={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var b=r(f,t);t.byIndex=s,e.splice(s,0,{identifier:p,updater:b,references:1})}c.push(p)}return c}function r(n,e){var o=e.domAPI(e);return o.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;o.update(n=e)}else o.remove()}}n.exports=function(n,r){var i=t(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<i.length;c++){var s=o(i[c]);e[s].references--}for(var a=t(n,r),d=0;d<i.length;d++){var l=o(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=a}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},195:()=>{const n=document.querySelector(".js-dropdown-div"),e=document.querySelector(".js-dropdown");n.addEventListener("click",(()=>{e.classList.toggle("show")}))},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var o="",t=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),t&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=n(e),t&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(n,o,t,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(t)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(c[a]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},365:(n,e,o)=>{"use strict";o.d(e,{A:()=>u});var t=o(601),r=o.n(t),i=o(314),c=o.n(i),s=o(417),a=o.n(s),d=new URL(o(939),o.b),l=c()(r()),p=a()(d);l.push([n.id,`*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  box-sizing: border-box;\n  font-family: monospace;\n}\n\nbody {\n  line-height: 1.5; /* This requires customizing the line height for larger text. */\n  font-size: 1.5rem;\n  padding: min(3rem, 5%);\n  background-color: teal;\n  background-image: url(${p});\n  background-repeat: repeat;\n}\n\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%; /* Use \`max-width: revert;\` if an image is meant to overflow */\n}\n\ninput, button, textarea, select {\n  font: inherit;\n}\n\n.page {\n  background-color: silver;\n  height: min(700px, 100%);\n  width: min(800px, 100%);\n  min-height: 200px;\n  display: flex;\n  flex-direction: column;\n  border: 6px double black;\n  overflow: hidden;\n  box-shadow: 6px 6px black;\n}\n\nheader {\n  background-color: navy;\n  border-bottom: 2px solid black;\n  display: flex;\n  height: max-content;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n\n.top-bar {\n  display: flex;\n}\n\n.logo {\n  background-color: navy;\n  color: white;\n  padding: 0.5rem;\n  text-align: center;\n  border-bottom: 2px solid black;\n  font-size: 0.6em;\n  flex-grow: 2;\n}\n\n.js-close {\n  height: 56px;\n  width: 56px;\n  border-left: 2px solid black;\n  border-bottom: 2px solid black;\n  cursor: pointer;\n  background-color: silver;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.js-close .close-button {\n  border: 4px outset silver;\n  flex-grow: 1;\n  text-align: center;\n  height: 100%;\n  padding: 0.5rem 0;\n  /* box-sizing: border-box; */\n}\n\n.js-close .close-button:hover {\n  border: 4px inset silver;\n}\n\nnav {\n  display: flex;\n  background-color: silver;\n}\n\n.dropdown-button {\n  padding: 0.5rem;\n  background-color: silver;\n  font-weight: bold;\n}\n\n.dropdown-content > div {\n  padding: 0.5rem;\n}\n\n.dropdown-button::first-letter,\n.dropdown-content > div::first-letter {\n  text-decoration: underline;\n}\n\n.css-dropdown {\n  /* display: inline-block;  Don't need this because its container is flex?*/\n  position: relative;\n  cursor: pointer;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  width: max-content;\n  height: min-content;\n  z-index: 2;\n  background-color: white;\n  border: 2px solid black;\n}\n\n.css-dropdown:first-child .dropdown-content {\n  border-left: none;\n}\n\n.dropdown-button:hover,\n.css-dropdown:hover .dropdown-button,\n.dropdown-button:focus,\n.css-dropdown:focus .dropdown-button {\n  background-color: #00000033;\n}\n\n\n.dropdown-content > div:hover,\n.dropdown-content > div:focus {\n  background-color: navy;\n  color: white;\n}\n\n.css-dropdown:hover > .dropdown-content,\n.css-dropdown:focus > .dropdown-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.content {\n  background-color: white;\n  flex-grow: 1;\n  overflow-y: scroll;\n}\n\n.js-dropdown-div {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: max-content;\n}\n\n.computer-icon {\n  width: 130px;\n  height: 130px;\n  grid-template-rows: 120px max-content;\n  cursor: pointer;\n  margin: 1rem;\n  padding: 0.5rem;\n  position: relative;\n  display: inline-block;\n}\n\n.computer-icon img {\n  object-fit: cover;\n  position: absolute;\n  top: -25px;\n  left: 0;\n  z-index: 1;\n}\n\n.computer-icon p {\n  width: 100%;\n  text-align: center;\n  padding: 0.3rem 1rem;\n  position: absolute;\n  left: 0;\n  bottom: 5px;\n}\n\n.computer-icon:focus p{\n  color: white;\n}\n\n.computer-icon:focus   {\n  background-color: navy;\n}\n\n.js-dropdown {\n  width: max-content;\n  height: min-content;\n  z-index: 2;\n  background-color: white;\n  border: 2px solid black;\n  cursor: pointer;\n  display: none;\n}\n\n.js-dropdown div {\n  padding: 0.5rem;\n  display: block;\n}\n\n.js-dropdown > div:hover,\n.js-dropdown > div:focus {\n  background-color: navy;\n  color: white;\n}\n\n.show {\n  display: block;\n}\n\nfooter {\n  background-color: silver;\n  border-top: 2px solid black;\n  padding: 0.5rem;\n}`,""]);const u=l},417:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},601:n=>{"use strict";n.exports=function(n){return n[1]}},659:n=>{"use strict";var e={};n.exports=function(n,o){var t=function(n){if(void 0===e[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(o){!function(n,e,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,r&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},939:(n,e,o)=>{"use strict";n.exports=o.p+"5282e2518ee9ae166903.bmp"}},e={};function o(t){var r=e[t];if(void 0!==r)return r.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,o),i.exports}o.m=n,o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;o.g.importScripts&&(n=o.g.location+"");var e=o.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=n})(),o.b=document.baseURI||self.location.href,o.nc=void 0,(()=>{"use strict";var n=o(72),e=o.n(n),t=o(825),r=o.n(t),i=o(659),c=o.n(i),s=o(56),a=o.n(s),d=o(540),l=o.n(d),p=o(113),u=o.n(p),f=o(365),b={};b.styleTagTransform=u(),b.setAttributes=a(),b.insert=c().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=l(),e()(f.A,b),f.A&&f.A.locals&&f.A.locals,o(195)})()})();