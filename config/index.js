module.exports = {
    proxyTable: {
        '/UCM': {
            target: 'http://54.169.159.192:8080/',
            changeOrigin: true
        },
        '/test': {
            target: 'https://httpbin.org/post?show_env=1',
            changeOrigin: true
        },
        '/hehe': {
            target: 'http://localhost:3333/api',
            // changeOrigin: true,
            pathRewrite: {
                '/hehe': '/test'
            }
        }
    }
}
