module.exports = {
    devServer: {
     proxy: 'http://localhost:8000',
    },
    proxy: {
        target: 'http://localhost:8000/',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }
   }