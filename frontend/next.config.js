module.exports = {
  publicRuntimeConfig: {
    APP_NAME: 'ENTER APP NAME HERE',
    API_DEVELOPMENT: 'http://localhost:8000/api',
    PRODUCTION: false,
  }
}
const withCSS = require('@zeit/next-css')
module.exports = withCSS({/* my next config */})
