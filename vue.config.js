const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // for dev
  devServer: {
    proxy: 'http://mancswcbman0278:9080/',
  },
  transpileDependencies: [
    'vuetify'
  ]
})
