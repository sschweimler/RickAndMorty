const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: '../wwwroot',
  devServer: {
    proxy: {
        '^/rickandmorty': {
            target: 'https://localhost:7010/'
        }
    }
  }
})
