!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/assets/",n(n.s=0)}([function(t,e,n){t.exports=n(6)},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(1);function o(){}function r(t){return t()}function c(){return Object.create(null)}function l(t){t.forEach(r)}function u(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}new Set;function a(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function g(){return h(" ")}function $(){return h("")}function y(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.data!==e&&(t.data=e)}function w(t,e){(null!=e||t.value)&&(t.value=e)}let S;function k(t){S=t}function x(){if(!S)throw new Error("Function called outside component initialization");return S}function _(t){x().$$.on_destroy.push(t)}const j=[],C=[],E=[],O=[],M=Promise.resolve();let T=!1;function P(){T||(T=!0,M.then(L))}function R(t){E.push(t)}function L(){const t=new Set;do{for(;j.length;){const t=j.shift();k(t),A(t.$$)}for(;C.length;)C.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];t.has(n)||(n(),t.add(n))}E.length=0}while(j.length);for(;O.length;)O.pop()();T=!1}function A(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}const N=new Set;let Y;function H(){Y={r:0,c:[],p:Y}}function q(){Y.r||l(Y.c),Y=Y.p}function z(t,e){t&&t.i&&(N.delete(t),t.i(e))}function F(t,e,n,o){if(t&&t.o){if(N.has(t))return;N.add(t),Y.c.push(()=>{N.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let W;function D(t){t&&t.c()}function G(t,e,n){const{fragment:o,on_mount:c,on_destroy:s,after_update:i}=t.$$;o&&o.m(e,n),R(()=>{const e=c.map(r).filter(u);s?s.push(...e):l(e),t.$$.on_mount=[]}),i.forEach(R)}function B(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e,n,r,u,s,i=[-1]){const a=S;k(t);const f=e.props||{},d=t.$$={fragment:null,ctx:null,props:s,update:o,not_equal:u,bound:c(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:c(),dirty:i};let p=!1;var m;d.ctx=n?n(t,f,(e,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&u(d.ctx[e],d.ctx[e]=r)&&(d.bound[e]&&d.bound[e](r),p&&function(t,e){-1===t.$$.dirty[0]&&(j.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],d.update(),p=!0,l(d.before_update),d.fragment=!!r&&r(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l((m=e.target,Array.from(m.childNodes))):d.fragment&&d.fragment.c(),e.intro&&z(t.$$.fragment),G(t,e.target,e.anchor),L()),k(a)}"function"==typeof HTMLElement&&(W=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){B(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class V{$destroy(){B(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}n(2);function I(t,e,n){const o=t.slice();return o[2]=e[n],o}function J(t){let e,n,r,c,l,u,s;return{c(){e=m("li"),n=m("a"),r=m("i"),s=g(),b(r,"class",c="fa fa-fw fa-"+t[2].type+" svelte-1c1jdsu"),b(n,"href",l=t[2].url),b(n,"target","_blank"),b(n,"class","icon-link svelte-1c1jdsu"),b(n,"title",u=t[2].title)},m(t,o){f(t,e,o),a(e,n),a(n,r),a(e,s)},p:o,d(t){t&&d(e)}}}function K(t){let e,n,r,c,l,u=t[1],s=[];for(let e=0;e<u.length;e+=1)s[e]=J(I(t,u,e));return{c(){e=m("footer"),n=m("section"),n.textContent=`© ${t[0]} Richard de Wit`,r=g(),c=m("section"),l=m("ul");for(let t=0;t<s.length;t+=1)s[t].c();b(l,"class","list-inline svelte-1c1jdsu"),b(e,"class","svelte-1c1jdsu")},m(t,o){f(t,e,o),a(e,n),a(e,r),a(e,c),a(c,l);for(let t=0;t<s.length;t+=1)s[t].m(l,null)},p(t,[e]){if(2&e){let n;for(u=t[1],n=0;n<u.length;n+=1){const o=I(t,u,n);s[n]?s[n].p(o,e):(s[n]=J(o),s[n].c(),s[n].m(l,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=u.length}},i:o,o:o,d(t){t&&d(e),p(s,t)}}}function Q(t){return[(new Date).getFullYear(),[{type:"github",url:"https://github.com/richarddewit",title:"Github - richarddewit"},{type:"twitter",url:"https://twitter.com/sneetzle",title:"Twitter - @Sneetzle"},{type:"stack-overflow",url:"https://stackoverflow.com/users/1062281/richard-de-wit",title:"Stack Overflow - Richard de Wit"}]]}var X=class extends V{constructor(t){super(),U(this,t,Q,K,s,{})}};const Z=[];function tt(t,e=o){let n;const r=[];function c(e){if(s(t,e)&&(t=e,n)){const e=!Z.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),Z.push(n,t)}if(e){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:c,update:function(e){c(e(t))},subscribe:function(l,u=o){const s=[l,u];return r.push(s),1===r.length&&(n=e(c)||o),l(t),()=>{const t=r.indexOf(s);-1!==t&&r.splice(t,1),0===r.length&&(n(),n=null)}}}}const et=tt("You");n(3);function nt(t){let e,n,r,c,l,u,s,i,p,$,y,w;return{c(){e=m("div"),n=m("span"),r=h(t[2]),c=h(":\n    "),l=m("strong"),u=h(t[0]),s=g(),i=m("span"),p=h("Richard"),$=h(":\n    "),y=m("strong"),w=h(t[1]),b(n,"class","svelte-bu7aji"),b(i,"class","svelte-bu7aji"),b(e,"class","score svelte-bu7aji")},m(t,o){f(t,e,o),a(e,n),a(n,r),a(n,c),a(n,l),a(l,u),a(e,s),a(e,i),a(i,p),a(i,$),a(i,y),a(y,w)},p(t,[e]){4&e&&v(r,t[2]),1&e&&v(u,t[0]),2&e&&v(w,t[1])},i:o,o:o,d(t){t&&d(e)}}}function ot(t,e,n){let o="You",{playersScore:r}=e,{computersScore:c}=e;const l=et.subscribe(t=>{n(2,o=t)});return _(()=>{l()}),t.$set=t=>{"playersScore"in t&&n(0,r=t.playersScore),"computersScore"in t&&n(1,c=t.computersScore)},[r,c,o]}var rt=class extends V{constructor(t){super(),U(this,t,ot,nt,s,{playersScore:0,computersScore:1})}};function ct(t){let e,n,o,r,c,l,u,s,p,$,y,b;const w=new rt({props:{playersScore:t[2],computersScore:t[3]}}),S=t[5].default,k=function(t,e,n,o){if(t){const r=i(t,e,n,o);return t[0](r)}}(S,t,t[4],null);return{c(){e=m("h1"),n=h(t[0]),o=g(),r=m("p"),c=m("small"),l=h(t[1]),u=g(),s=m("hr"),p=g(),D(w.$$.fragment),$=g(),k||(y=h("Game here")),k&&k.c()},m(t,i){f(t,e,i),a(e,n),f(t,o,i),f(t,r,i),a(r,c),a(c,l),f(t,u,i),f(t,s,i),f(t,p,i),G(w,t,i),f(t,$,i),k||f(t,y,i),k&&k.m(t,i),b=!0},p(t,[e]){(!b||1&e)&&v(n,t[0]),(!b||2&e)&&v(l,t[1]);const o={};4&e&&(o.playersScore=t[2]),8&e&&(o.computersScore=t[3]),w.$set(o),k&&k.p&&16&e&&k.p(i(S,t,t[4],null),function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(S,t[4],e,null))},i(t){b||(z(w.$$.fragment,t),z(k,t),b=!0)},o(t){F(w.$$.fragment,t),F(k,t),b=!1},d(t){t&&d(e),t&&d(o),t&&d(r),t&&d(u),t&&d(s),t&&d(p),B(w,t),t&&d($),k||t&&d(y),k&&k.d(t)}}}function lt(t,e,n){let{title:o}=e,{description:r=""}=e,{playersScore:c}=e,{computersScore:l}=e,{$$slots:u={},$$scope:s}=e;return t.$set=t=>{"title"in t&&n(0,o=t.title),"description"in t&&n(1,r=t.description),"playersScore"in t&&n(2,c=t.playersScore),"computersScore"in t&&n(3,l=t.computersScore),"$$scope"in t&&n(4,s=t.$$scope)},[o,r,c,l,s,u]}var ut=class extends V{constructor(t){super(),U(this,t,lt,ct,s,{title:0,description:1,playersScore:2,computersScore:3})}};n(4);function st(t,e,n){const o=t.slice();return o[15]=e[n],o[17]=n,o}function it(t){let e,n,o,r,c,l,u,s,i,p,$=t[15].label+"",v=t[17]+1+"";function w(...e){return t[14](t[15],...e)}return{c(){e=m("button"),n=m("i"),r=g(),c=h($),l=g(),u=m("span"),s=h(v),i=g(),b(n,"class",o="fa fa-fw fa-"+t[15].icon+" svelte-1pfuaso"),b(u,"class","keycode"),b(e,"class","svelte-1pfuaso")},m(t,o){f(t,e,o),a(e,n),a(e,r),a(e,c),a(e,l),a(e,u),a(u,s),a(e,i),p=y(e,"click",w)},p(e,n){t=e},d(t){t&&d(e),p()}}}function at(t){let e;return{c(){e=h(" ")},m(t,n){f(t,e,n)},p:o,d(t){t&&d(e)}}}function ft(t){let e,n,o,r,c=t[4].label+"";return{c(){e=h(t[0]),n=h(" picked\n        "),o=m("strong"),r=h(c)},m(t,c){f(t,e,c),f(t,n,c),f(t,o,c),a(o,r)},p(t,n){1&n&&v(e,t[0]),16&n&&c!==(c=t[4].label+"")&&v(r,c)},d(t){t&&d(e),t&&d(n),t&&d(o)}}}function dt(t){let e;return{c(){e=h(" ")},m(t,n){f(t,e,n)},p:o,d(t){t&&d(e)}}}function pt(t){let e,n,o,r,c=t[5].label+"";return{c(){e=h("Richard"),n=h(" picked\n        "),o=m("strong"),r=h(c)},m(t,c){f(t,e,c),f(t,n,c),f(t,o,c),a(o,r)},p(t,e){32&e&&c!==(c=t[5].label+"")&&v(r,c)},d(t){t&&d(e),t&&d(n),t&&d(o)}}}function mt(t){let e;return{c(){e=h(" ")},m(t,n){f(t,e,n)},p:o,d(t){t&&d(e)}}}function ht(t){let e;return{c(){e=h(t[1])},m(t,n){f(t,e,n)},p(t,n){2&n&&v(e,t[1])},d(t){t&&d(e)}}}function gt(t){let e,n,o,r,c,l,u,s,i,h=t[6],$=[];for(let e=0;e<h.length;e+=1)$[e]=it(st(t,h,e));function y(t,e){return t[4]?ft:at}let v=y(t),w=v(t);function S(t,e){return t[5]?pt:dt}let k=S(t),x=k(t);function _(t,e){return t[1]?ht:mt}let j=_(t),C=j(t);return{c(){e=m("div");for(let t=0;t<$.length;t+=1)$[t].c();n=g(),o=m("div"),r=m("p"),w.c(),c=g(),l=m("p"),x.c(),u=g(),s=m("p"),i=m("big"),C.c(),b(e,"class","choices svelte-1pfuaso"),b(o,"class","messages svelte-1pfuaso")},m(t,d){f(t,e,d);for(let t=0;t<$.length;t+=1)$[t].m(e,null);f(t,n,d),f(t,o,d),a(o,r),w.m(r,null),a(o,c),a(o,l),x.m(l,null),a(o,u),a(o,s),a(s,i),C.m(i,null)},p(t,n){if(192&n){let o;for(h=t[6],o=0;o<h.length;o+=1){const r=st(t,h,o);$[o]?$[o].p(r,n):($[o]=it(r),$[o].c(),$[o].m(e,null))}for(;o<$.length;o+=1)$[o].d(1);$.length=h.length}v===(v=y(t))&&w?w.p(t,n):(w.d(1),w=v(t),w&&(w.c(),w.m(r,null))),k===(k=S(t))&&x?x.p(t,n):(x.d(1),x=k(t),x&&(x.c(),x.m(l,null))),j===(j=_(t))&&C?C.p(t,n):(C.d(1),C=j(t),C&&(C.c(),C.m(i,null)))},d(t){t&&d(e),p($,t),t&&d(n),t&&d(o),w.d(),x.d(),C.d()}}}function $t(t){let e,n;const o=new ut({props:{title:yt,description:bt,playersScore:t[2],computersScore:t[3],$$slots:{default:[gt]},$$scope:{ctx:t}}});return{c(){D(o.$$.fragment)},m(r,c){G(o,r,c),e=!0,n=y(window,"keydown",t[8])},p(t,[e]){const n={};4&e&&(n.playersScore=t[2]),8&e&&(n.computersScore=t[3]),262195&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){e||(z(o.$$.fragment,t),e=!0)},o(t){F(o.$$.fragment,t),e=!1},d(t){B(o,t),n()}}}const yt="Rock, Paper, Scissors",bt="Click a button or press 1, 2, 3 on your keyboard.";function vt(t,e,n){let o="You";const r=et.subscribe(t=>{n(0,o=t)}),c=[{label:"Rock",value:4,icon:"hand-rock-o"},{label:"Paper",value:2,icon:"hand-paper-o"},{label:"Scissors",value:1,icon:"hand-scissors-o"}];let l="",u="",s=0,i=0,a=null,f=null;function d(t){n(4,a=t),n(5,f=c[Math.floor(Math.random()*c.length)]);const e=a.value|f.value;switch(l=`${o} picked ${a.label}, Richard picked ${f.label}`,e){case 5:4===a.value&&p(),4===f.value&&m();break;case 6:2===a.value&&p(),2===f.value&&m();break;case 3:1===a.value&&p(),1===f.value&&m();break;case 4:case 2:case 1:n(1,u="Tie! Try again.");break;default:n(1,u="WTF? How?")}}function p(){n(1,u=o+" win"+("You"===o?"":"s")+"!"),n(2,s++,s)}function m(){n(1,u="Richard wins!"),n(3,i++,i)}function h(t){const e=["1","2","3"].indexOf(t);if(-1!==e)return d(c[e])}_(()=>{r()});return[o,u,s,i,a,f,c,d,function(t){h(t.key)},l,r,p,m,h,t=>d(t)]}var wt=class extends V{constructor(t){super(),U(this,t,vt,$t,s,{})}};n(5);function St(t,e,n){const o=t.slice();return o[11]=e[n],o[13]=n,o}function kt(t){let e,n,r,c,u,s,i,p,$,S,k,x,_,j;return{c(){e=m("h1"),e.textContent="Let's play a game",n=g(),r=m("form"),c=m("div"),u=m("label"),u.textContent="Enter your name",s=g(),i=m("p"),p=m("small"),$=h(t[1]),S=g(),k=m("input"),x=g(),_=m("button"),_.innerHTML='<i class="fa fa-fw fa-flag"></i>\n        Start\n        <span class="keycode">Enter</span>',b(u,"for","name"),b(k,"name","name"),b(k,"id","name"),b(k,"type","text"),k.autofocus=!0,b(k,"maxlength","16"),b(c,"class","form-control"),b(_,"type","submit")},m(o,l){var d;f(o,e,l),f(o,n,l),f(o,r,l),a(r,c),a(c,u),a(c,s),a(c,i),a(i,p),a(p,$),a(c,S),a(c,k),w(k,t[0]),a(r,x),a(r,_),k.focus(),j=[y(k,"input",t[10]),y(r,"submit",(d=t[5],function(t){return t.preventDefault(),d.call(this,t)}))]},p(t,e){2&e&&v($,t[1]),1&e&&k.value!==t[0]&&w(k,t[0])},i:o,o:o,d(t){t&&d(e),t&&d(n),t&&d(r),l(j)}}}function xt(t){let e,n,o,r,c,l,u,s;const i=[jt,_t],a=[];function p(t,e){return null===t[3]?0:1}return e=p(t),n=a[e]=i[e](t),{c(){n.c(),o=g(),r=m("br"),c=g(),l=m("button"),l.innerHTML='<i class="fa fa-fw fa-chevron-left"></i>\n      Start over\n      <span class="keycode">Esc</span>',b(l,"class","inverted")},m(n,i){a[e].m(n,i),f(n,o,i),f(n,r,i),f(n,c,i),f(n,l,i),u=!0,s=y(l,"click",t[6])},p(t,r){let c=e;e=p(t),e===c?a[e].p(t,r):(H(),F(a[c],1,1,()=>{a[c]=null}),q(),n=a[e],n||(n=a[e]=i[e](t),n.c()),z(n,1),n.m(o.parentNode,o))},i(t){u||(z(n),u=!0)},o(t){F(n),u=!1},d(t){a[e].d(t),t&&d(o),t&&d(r),t&&d(c),t&&d(l),s()}}}function _t(t){let e,n;var o=t[3].component;if(o)var r=new o({});return{c(){r&&D(r.$$.fragment),e=$()},m(t,o){r&&G(r,t,o),f(t,e,o),n=!0},p(t,n){if(o!==(o=t[3].component)){if(r){H();const t=r;F(t.$$.fragment,1,0,()=>{B(t,1)}),q()}o?(D((r=new o({})).$$.fragment),z(r.$$.fragment,1),G(r,e.parentNode,e)):r=null}},i(t){n||(r&&z(r.$$.fragment,t),n=!0)},o(t){r&&F(r.$$.fragment,t),n=!1},d(t){t&&d(e),r&&B(r,t)}}}function jt(t){let e,n,r,c=t[4],l=[];for(let e=0;e<c.length;e+=1)l[e]=Ct(St(t,c,e));return{c(){e=m("h1"),e.textContent="Select a game to play",n=g();for(let t=0;t<l.length;t+=1)l[t].c();r=$()},m(t,o){f(t,e,o),f(t,n,o);for(let e=0;e<l.length;e+=1)l[e].m(t,o);f(t,r,o)},p(t,e){if(144&e){let n;for(c=t[4],n=0;n<c.length;n+=1){const o=St(t,c,n);l[n]?l[n].p(o,e):(l[n]=Ct(o),l[n].c(),l[n].m(r.parentNode,r))}for(;n<l.length;n+=1)l[n].d(1);l.length=c.length}},i:o,o:o,d(t){t&&d(e),t&&d(n),p(l,t),t&&d(r)}}}function Ct(t){let e,n,o,r,c,l,u,s=t[11].name+"",i=t[13]+1+"";function p(...e){return t[9](t[11],...e)}return{c(){e=m("button"),n=h(s),o=g(),r=m("span"),c=h(i),l=g(),b(r,"class","keycode")},m(t,s){f(t,e,s),a(e,n),a(e,o),a(e,r),a(r,c),a(e,l),u=y(e,"click",p)},p(e,n){t=e},d(t){t&&d(e),u()}}}function Et(t){let e,n,o,r,c,l;const u=[xt,kt],s=[];function i(t,e){return t[2]?0:1}n=i(t),o=s[n]=u[n](t);const a=new X({});return{c(){e=m("main"),o.c(),r=g(),D(a.$$.fragment),b(e,"class","svelte-h42f5r")},m(o,u){f(o,e,u),s[n].m(e,null),f(o,r,u),G(a,o,u),c=!0,l=y(window,"keydown",t[8])},p(t,[r]){let c=n;n=i(t),n===c?s[n].p(t,r):(H(),F(s[c],1,1,()=>{s[c]=null}),q(),o=s[n],o||(o=s[n]=u[n](t),o.c()),z(o,1),o.m(e,null))},i(t){c||(z(o),z(a.$$.fragment,t),c=!0)},o(t){F(o),F(a.$$.fragment,t),c=!1},d(t){t&&d(e),s[n].d(),t&&d(r),B(a,t),l()}}}function Ot(t,e,n){const o=[{name:"Rock, Paper, Scissors",component:wt}];let r="",c="",l=!1,u=null;function s(){n(2,l=!1),n(3,u=null)}function i(t){n(3,u=t)}return[r,c,l,u,o,function(){if(n(1,c=""),n(0,r=r.replace(/[^\w -]/g,"").substr(0,16).trim()),"your name"===r.toLowerCase())return n(1,c="Very funny"),void n(0,r="");et.set(r||"You"),n(2,l=!0)},s,i,function(t){const e=t.key.toUpperCase();if("ESCAPE"===e)return s();if(null===u&&l){const t=[...Array(o.length+1).keys()].map(String);t.shift();const n=t.indexOf(e);if(-1!==n)return i(o[n])}},t=>i(t),function(){r=this.value,n(0,r)}]}const Mt=new class extends V{constructor(t){super(),U(this,t,Ot,Et,s,{})}}({target:document.body,props:{}});window.app=Mt;e.default=Mt}]);