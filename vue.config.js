
module.exports = {
  devServer: {
    proxy: {
      "/api/": {
        target: "http://partnerapi.funda.nl", 
        headers: {
          host: "partnerapi.funda.nl"
        },
        followRedirects: true,
        changeOrigin: true,
        pathRewrite: {'/api' : '/'}
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/index.scss";`,
      },
    },
  },
}
