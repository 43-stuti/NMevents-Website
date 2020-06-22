module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  baseUrl: '',
  publicPath: process.env.NODE_ENV === 'production'
  ? '/' + process.env.NMCreations + '/'
  : '/'
}