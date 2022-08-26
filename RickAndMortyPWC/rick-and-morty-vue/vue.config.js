const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: '../wwwroot',
  devServer: {
    proxy: {
        '^/weatherforecast': {
            target: 'https://localhost:7010/'
        }
    }
  }
})
