(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"===typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},4783:function(e,t,n){"use strict";n.d(t,{K:function(){return r}});var r={locations:[{position:{lat:50.340284058998854,lng:30.296619542328227},label:"Stadion",key:1,selected:!1},{position:{lat:50.34044948380951,lng:30.29812262961937},label:"Skate park",key:2,selected:!1},{position:{lat:50.34104520436382,lng:30.29599832008819},label:"Your Cafe",key:3,selected:!1},{position:{lat:50.339244325116184,lng:30.295633539668025},label:"Park",key:4,selected:!1},{position:{lat:50.342125981846394,lng:30.29465616534897},label:"Grafit Gym",key:5,selected:!1},{position:{lat:50.34297502260462,lng:30.3009003478469},label:"ATB-Market",key:6,selected:!1},{position:{lat:50.34461143737555,lng:30.30272424995996},label:"Railway station",key:7,selected:!1},{position:{lat:50.34380350743195,lng:30.297939189154246},label:"School No. 4",key:8,selected:!1},{position:{lat:50.34369395655096,lng:30.296190388904623},label:"Bank",key:9,selected:!1},{position:{lat:50.340845544932534,lng:30.293894417987882},label:"Veterinary pharmacy",key:10,selected:!1}]}},8277:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7054);t.default=function(e){var t=e.blueMarkers,n=e.redMarker;return(0,r.jsxs)(r.Fragment,{children:[null===t||void 0===t?void 0:t.map((function(e){return(0,r.jsx)(o.Jx,{position:e.position,icon:"http://maps.google.com/mapfiles/ms/icons/blue.png"},e.key)})),null===n||void 0===n?void 0:n.map((function(e){return(0,r.jsx)(o.Jx,{position:e.position},e.key)}))]})}},5851:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=(n(7294),n(4783));t.default=function(e){var t=e.markersFilter;return(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{children:o.K.locations.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:e.key,onClick:function(e){return t(+e.target.value)},children:e.label})},e.key)}))})})}},3678:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),o=n(214),i=n.n(o),a=n(7054),l=n(4783),s=n(7294),c=n(5851),u=n(8277),f=n(3454);function p(){var e=(0,a.Db)({googleMapsApiKey:f.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}).isLoaded,t=(0,s.useState)([]),n=t[0],o=t[1],p=(0,s.useState)([]),d=p[0],m=p[1];return e?(0,r.jsxs)("div",{children:[(0,r.jsx)("main",{className:i().main,children:(0,r.jsx)(a.b6,{zoom:15.2,center:{lat:50.341845247304526,lng:30.29728473014548},mapContainerClassName:i().mapContainer,children:(0,r.jsx)(u.default,{blueMarkers:n,redMarker:d})})}),(0,r.jsxs)("footer",{className:i().footer,children:[(0,r.jsx)(c.default,{markersFilter:function(e){o(n=l.K.locations.filter((function(t){return t.key!==e}))),m(d=l.K.locations.filter((function(t){return t.key===e})))}}),(0,r.jsxs)("div",{className:i().poweredBy,children:[(0,r.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,r.jsx)("span",{className:i().logo,children:(0,r.jsx)("img",{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]}),"&",(0,r.jsx)("a",{href:"https://github.com/ruslanvasylyshyn",target:"_blank",rel:"noreferrer",children:"Ruslan"})]})]})]}):(0,r.jsx)("div",{children:"Loading..."})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",mapContainer:"Home_mapContainer__yyZzM",poweredBy:"Home_poweredBy__RFcWM"}},7663:function(e){!function(){var t={308:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l,s=[],c=!1,u=-1;function f(){c&&l&&(c=!1,l.length?s=l.concat(s):u=-1,s.length&&p())}function p(){if(!c){var e=a(f);c=!0;for(var t=s.length;t;){for(l=s,s=[];++u<t;)l&&l[u].run();u=-1,t=s.length}l=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new d(e,t)),1!==s.length||c||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(308);e.exports=o}()}},function(e){e.O(0,[255,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);