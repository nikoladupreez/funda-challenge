
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://partnerapi.funda.nl",
                changeOrigin: true,
                secure: false,
                pathRewrite: {'^/api' : ''},
                logLevel: 'debug'
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
