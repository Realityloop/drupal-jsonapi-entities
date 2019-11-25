const path = require('path')

module.exports = {
  srcDir: __dirname,
  rootDir: path.resolve(__dirname),
  buildDir: path.resolve(__dirname, '.nuxt'),
  dev: false,

  modules: [
    {
      handler: require('../index').default,
      options: {
        baseUrl: 'https://example.com'
      }
    }
  ],
  drupalJSONAPIEntities: {
    node: [ 'recipe' ]
  }
}
