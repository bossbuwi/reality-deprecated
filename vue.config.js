const { defineConfig } = require('@vue/cli-service')
const mode = process.env.VUE_DEV_SERVER

module.exports = defineConfig({
  devServer: {
    proxy: mode
  },
  transpileDependencies: [
    'vuetify'
  ]
})
