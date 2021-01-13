// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-amg-vs-kalamazoo-comparison-js": () => import("./../src/pages/amg-vs-kalamazoo-comparison.js" /* webpackChunkName: "component---src-pages-amg-vs-kalamazoo-comparison-js" */),
  "component---src-pages-amg-vs-kalamazoo-js": () => import("./../src/pages/amg-vs-kalamazoo.js" /* webpackChunkName: "component---src-pages-amg-vs-kalamazoo-js" */),
  "component---src-pages-gas-vs-charcoal-js": () => import("./../src/pages/gas-vs-charcoal.js" /* webpackChunkName: "component---src-pages-gas-vs-charcoal-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

