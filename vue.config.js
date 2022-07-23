const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  devServer:{
    proxy:{
      '/api':{
        // target:'http://101.42.173.159:5651',
        target:'http://101.43.233.220:5651',
        // target:'https://dream.cihss.net',
        pathRewrite:{'^/api':''},   
      }
    }
  },
  configureWebpack:{
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ]
  }
})
