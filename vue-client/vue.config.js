module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'http://localhost:65535' // 개발서버
          }
      }
  }
}