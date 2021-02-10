module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-fontawesome-css/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-facebook-pixel/gatsby-browser.js'),
      options: {"plugins":[],"pixelId":"449592216410502"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/logo-orange.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"cd93b53b1fb25ce03dd1047db38e3c32"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-169809812-2"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
