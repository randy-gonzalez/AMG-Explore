const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/krisringler/shyft/AMG-Explore/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/krisringler/shyft/AMG-Explore/src/pages/404.js"))),
  "component---src-pages-amg-vs-kalamazoo-js": hot(preferDefault(require("/Users/krisringler/shyft/AMG-Explore/src/pages/amg-vs-kalamazoo.js"))),
  "component---src-pages-gas-vs-charcoal-js": hot(preferDefault(require("/Users/krisringler/shyft/AMG-Explore/src/pages/gas-vs-charcoal.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/krisringler/shyft/AMG-Explore/src/pages/index.js")))
}

