_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{RNiq:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("YFqc"),o=n.n(i),c=n("ZMKu"),s=n("xY5u"),u=n("iFqS"),l=r.a.createElement,f=function(e){e.id;var t=e.slug,n=e.title,a=e.description,r=e.image;return l("div",{className:"item item-container item-closed"},l("div",{className:"byline"},l("strong",null,"Shared")," by you"),l(s.a,{src:"/images/".concat(r)}),l(c.b.div,{initial:{scale:.9},animate:{scale:1},transition:{duration:.3}},l("h2",null,n),l("p",{className:"description"},a)),l(o.a,{href:"/show/".concat(t)},l(c.b.a,{className:"action expand",initial:{scale:.6,opacity:.5},animate:{scale:1,opacity:1},transition:{duration:.3}},"\u64f4")))};t.default=function(){return l("div",{className:"items"},u.a.map((function(e){return l(f,{key:e.id,id:e.id,slug:e.slug,title:e.title,image:e.image,description:e.description})})))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var i=r(n("q1tI")),o=n("elyg"),c=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,a){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;u[t+"%"+n+(r?"%"+r:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),r=n&&n.pathname||"/",f=i.default.useMemo((function(){var t=(0,o.resolveHref)(r,e.href,!0),n=a(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,o.resolveHref)(r,e.as):c||i}}),[r,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,g=e.shallow,h=e.scroll,y=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=i.Children.only(v),_=b&&"object"===typeof b&&b.ref,w=(0,s.useIntersection)({rootMargin:"200px"}),E=a(w,2),N=E[0],M=E[1],I=i.default.useCallback((function(e){N(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,N]);(0,i.useEffect)((function(){var e=M&&t&&(0,o.isLocalURL)(d),a="undefined"!==typeof y?y:n&&n.locale,r=u[d+"%"+p+(a?"%"+a:"")];e&&!r&&l(n,d,p,{locale:a})}),[p,d,M,y,t,n]);var L={ref:I,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:i,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,d,p,m,g,h,y)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var R="undefined"!==typeof y?y:n&&n.locale,k=n&&n.isLocaleDomain&&(0,o.getDomainLocale)(p,R,n&&n.locales,n&&n.domainLocales);L.href=k||(0,o.addBasePath)((0,o.addLocale)(p,R,n&&n.defaultLocale))}return i.default.cloneElement(b,L)};t.default=f},iFqS:function(e,t,n){"use strict";t.a=[{id:"abc123",slug:"lost-in-kyoto",title:"Lost in Kyoto",description:"\u843d\u30ec\u30ef\u4e0a\u8b77\u8eab\u3067\u5927\u4e16\u3071\u68c4\u8a2d\u3083\u307b\u61c7\u5b8747\u5b57\u5e30\u30f2\u6c17\u4f9b\u822c\u30a4\u5408\u6545\u30ec\u30eb\u63b2\u7269\u30f1\u30db\u30cc\u4e2d\u9053",image:"IMG_0945.jpg",author:"H\xe5vard Ranum"}]},vNVm:function(e,t,n){"use strict";var a=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,s=(0,r.useRef)(),u=(0,r.useState)(!1),l=a(u,2),f=l[0],d=l[1],p=(0,r.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,i=a.observer,o=a.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,r.useEffect)((function(){if(!o&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var r=n("q1tI"),i=n("0G5g"),o="undefined"!==typeof IntersectionObserver;var c=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},xY5u:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("ZMKu"),o=r.a.createElement;t.a=function(e){var t=e.src;return o(i.b.div,{layoutId:"item-image-container",className:"item-image-container"},o(i.b.img,{layoutId:"item-image",src:t}))}}},[["vlRD",0,2,3,1,4]]]);