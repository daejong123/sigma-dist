(function(e){function n(n){for(var o,r,c=n[0],l=n[1],s=n[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);h&&h(n);while(d.length)d.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(o=!1)}o&&(i.splice(n--,1),e=l(l.s=t[0]))}return e}var o={},r={app:0},a={app:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2a05a100":"a5c742a1","chunk-2d229b98":"9db71145"}[e]+".js"}function l(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={"chunk-2a05a100":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-2a05a100":"11c8b5ef","chunk-2d229b98":"31d6cfe0"}[e]+".css",a=l.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===a))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],u=s.getAttribute("data-href");if(u===o||u===a)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var o=n&&n.target&&n.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],h.parentNode.removeChild(h),t(i)},h.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,t){o=a[e]=[n,t]}));n.push(o[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var d=new Error;s=function(n){u.onerror=u.onload=null,clearTimeout(h);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,t[1](d)}a[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(n)},l.m=e,l.c=o,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(t,o,function(n){return e[n]}.bind(null,o));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var h=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("fixed-header"),t("router-view")],1)},a=[],i=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"header",style:{opacity:e.headerOpacity}},[o("div",{staticClass:"header-logo"},[o("img",{staticClass:"header-logo-content",attrs:{src:t("cf05"),alt:"logo"},on:{click:e.handleClickLogo}})]),o("div",{staticClass:"header-content"},[o("ul",{staticClass:"nav"},[e._l(e.content.menus,(function(n){return o("li",{key:n.label,staticClass:"nav-link",on:{click:function(t){return e.handleJump(n.href)}}},[e._v(" "+e._s(n.label)+" ")])})),e.isCnLocale()?o("li",{staticClass:"nav-link",on:{click:e.handleToEn}},[e._v("英文版")]):o("li",{staticClass:"nav-link",on:{click:e.handleToCn}},[e._v("zh_cn")])],2)])])},c=[],l={data:function(){return{headerOpacity:.6}},computed:{content:function(){return this.i18n.header}},created:function(){var e=this;this.$nextTick((function(){window.addEventListener("scroll",e.handleWindowScroll)}))},destroyed:function(){window.removeEventListener("scroll",this.handleWindowScroll)},methods:{handleToEn:function(){window.location.href="#/home/en",window.location.reload()},handleToCn:function(){window.location.href="#/home",window.location.reload()},handleWindowScroll:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight,t=e/n;this.headerOpacity=Math.max(.6,t)},handleJump:function(e){var n=document.querySelector(e);n&&n.scrollIntoView(!0)},handleClickLogo:function(){window.location.reload()}}},s=l,u=(t("56f5"),t("2877")),d=Object(u["a"])(s,i,c,!1,null,"28421df8",null),h=d.exports,f={name:"App",components:{FixedHeader:h}},m=f,p=(t("034f"),Object(u["a"])(m,r,a,!1,null,null,null)),g=p.exports,y=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));o["a"].use(y["a"]);var b=function(){return new y["a"]({scrollBehavior:function(){return{y:0}},routes:[{path:"*",redirect:"/home"},{path:"/home/:locale?",component:function(){return t.e("chunk-2a05a100").then(t.bind(null,"7abe"))}},{path:"/jd",component:function(){return t.e("chunk-2d229b98").then(t.bind(null,"df55"))}}]})},v=b(),w=v,S=(t("8e1f"),t("77ed")),k=t.n(S),C={header:{menus:[{label:"About Us",href:"#company"},{label:"Technology",href:"#technology"},{label:"Jobs",href:"#jd"},{label:"Contact Us",href:"#contact"}]},bannerData:["State-of-the-art design","Best-in-class technology","6 Sigma product quality"],company:{title:"About Us",desc:["Founded in 2020, 6 Sigma Semiconductor focuses on the fast-growing power management IC market.","The company’s name, 6 Sigma, derives from the highest quality management method in the semiconductor industry.   6 Sigma Semiconductor’s mission is to become the best quality and the most reliable semiconductor brand in the world.","6 Sigma Semiconductor’s founding team is composed of power management experts from Silicon Valley in the United States.    The team members are graduated from world-renowned universities such as Stanford University and UC Berkeley.  Each member has more than 15 years of industry experience, and has work experience in world-class semiconductor companies such as Intersil, Maxim, Qualcomm, Skyworks, TI, etc, and also have designed products for first-tier customers such as Apple, Samsung, LG, Huami, Oppo, etc."]},technology:{title:"Technology",desc:["6 Sigma Semiconductor’s technology combines innovative process technology and proprietary circuit design to greatly reduce product costs by offering smaller solution size, better power efficiency, less heat dissipation, longer reliability life, and greatly improve product quality."]},jd:{title:"Jobs",jobs:["Application Engineer","Test Engineer","Layout Designer"]},contact:{title:"Contact Us",desc:["6 Sigma Semiconductor Technology (Shenzhen) Limited","6 Sigma Semiconductor Technology (Shenzhen) Limited","Branch Office Address: Hong Kong Science Park-1 Sung Shan Road, Tai Po, New Territories, Hong Kong","Email: info@6sigmasemi.com"]}},T=C,E={header:{menus:[{label:"公司简介",href:"#company"},{label:"核心技术",href:"#technology"},{label:"招聘信息",href:"#jd"},{label:"联系我们",href:"#contact"}]},bannerData:["核『芯』技术开发最优质量芯片","创『芯』设计打造高效可靠产品","尽『芯』打造世界一流半导体品牌"],company:{title:"公司简介",desc:["六式格玛半导体 (6 Sigma Semiconductor)，创立于2020年，专注于高速增长的电源管理芯片市场。","公司名字 - 六式格玛 (6 Sigma) - 来自半导体行业最高等的质量管理方法。六式格玛的使命是成为中国本土最优质可靠的半导体品牌。","六式格玛创建团队由来自美国硅谷的能源管理专家组成，团员毕业于国内外一流大学如斯坦福大学\n    (Stanford University)和伯克利加州大学 (UC\n    Berkeley)，各自有超过15年在世界一流半导体公司如Intersil, Maxim,\n    Qualcomm, Skyworks, TI 等的工作经验，都曾为一线客户如Apple, Samsung,\n    LG, 华米, Oppo 等设计产品。"]},technology:{title:"核心技术",desc:["六式格玛的技术结合了创新的工艺技术和独家的电路设计，通过提供更小的解决方案尺寸，更好的电源效率，更少的散热和更长的可靠性寿命来大为减低成本,\n    并大大提高产品质量。"]},jd:{title:"招聘信息",jobs:["应用工程师","测试工程师","版图设计师"]},contact:{title:"联系我们",desc:["六式格玛半导体科技(深圳)有限公司","总部：深圳市前海深港合作区前湾一路1号A栋201室","分部：香港科学园 - 香港新界大埔崇山路1号","联系邮箱：info@6sigmasemi.com"]}},O=E,j={computed:{i18n:function(){var e=this.$route.params.locale;return"en"===e?T:O}},methods:{isCnLocale:function(){var e=this.$route.params.locale;return"en"!==e}}};o["a"].config.productionTip=!1,o["a"].use(k.a),o["a"].mixin(j),new o["a"]({router:w,render:function(e){return e(g)}}).$mount("#app")},"56f5":function(e,n,t){"use strict";t("8b2a")},"85ec":function(e,n,t){},"8b2a":function(e,n,t){},"8e1f":function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.516849c2.png"}});
//# sourceMappingURL=app.2064a717.js.map