const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.PUBLIC_URL || "/", // <-- this is correct now (and default)
  transpileDependencies: true,
})
