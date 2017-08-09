module.exports = {
    proxyTable: {
        '/UCM': {
            target: 'http://54.169.159.192:8080/',
            changeOrigin: true
        }
    }
}
