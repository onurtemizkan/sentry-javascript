!function(n,e,r,t,i,o,a,c,s,f){for(var u=f,forceLoad=!1,p=0;p<document.scripts.length;p++)if(document.scripts[p].src.indexOf(a)>-1){u&&"no"===document.scripts[p].getAttribute("data-lazy")&&(u=!1);break}var d=!1,l=[],_=function(n){("e"in n||"p"in n||n.f&&n.f.indexOf("capture")>-1||n.f&&n.f.indexOf("showReportDialog")>-1)&&u&&E(l),_.data.push(n)};function v(){_({e:[].slice.call(arguments)})}function h(n){_({p:"reason"in n?n.reason:"detail"in n&&"reason"in n.detail?n.detail.reason:n})}function E(a){if(!d){d=!0;var f=e.scripts[0],u=e.createElement(r);u.src=c,u.crossOrigin="anonymous",u.addEventListener("load",(function(){try{n.removeEventListener("error",v),n.removeEventListener("unhandledrejection",h),n.SENTRY_SDK_SOURCE="loader";var e=n[o],r=e.init;e.init=function(n){var t=s;for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);!function(n,e){var r=n.integrations||[];if(!Array.isArray(r))return;var t=r.map((function(n){return n.name}));n.tracesSampleRate&&-1===t.indexOf("BrowserTracing")&&r.push(new e.BrowserTracing);(n.replaysSessionSampleRate||n.replaysOnErrorSampleRate)&&-1===t.indexOf("Replay")&&r.push(new e.Replay);n.integrations=r}(t,e),r(t)},function(e,r){try{for(var o=0;o<e.length;o++)"function"==typeof e[o]&&e[o]();var a=_.data,c=!(void 0===(d=n.__SENTRY__)||!d.hub||!d.hub.getClient());a.sort((function(n){return"init"===n.f?-1:0}));var s=!1;for(o=0;o<a.length;o++)if(a[o].f){s=!0;var f=a[o];!1===c&&"init"!==f.f&&r.init(),c=!0,r[f.f].apply(r,f.a)}!1===c&&!1===s&&r.init();var u=n[t],p=n[i];for(o=0;o<a.length;o++)"e"in a[o]&&u?u.apply(n,a[o].e):"p"in a[o]&&p&&p.apply(n,[a[o].p])}catch(n){console.error(n)}var d}(a,e)}catch(n){console.error(n)}})),f.parentNode.insertBefore(u,f)}}_.data=[],n[o]=n[o]||{},n[o].onLoad=function(n){l.push(n),u&&!forceLoad||E(l)},n[o].forceLoad=function(){forceLoad=!0,u&&setTimeout((function(){E(l)}))},["init","addBreadcrumb","captureMessage","captureException","captureEvent","configureScope","withScope","showReportDialog"].forEach((function(e){n[o][e]=function(){_({f:e,a:arguments})}})),window.addEventListener("error",v),window.addEventListener("unhandledrejection",h),u||setTimeout((function(){E(l)}))}
(
  window,
  document,
  'script',
  'onerror',
  'onunhandledrejection',
  'Sentry',
  'loader.js',
  __LOADER_BUNDLE__,
  __LOADER_OPTIONS__,
  __LOADER_LAZY__
);