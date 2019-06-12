module.exports = {
  devServer: {
    proxy: {
      '/tenxun': {
        target: 'https://m.ke.qq.com/',
        pathRewrite: {
          '^/tenxun': ''
        }
      },
      '/wangyi': {
        target: 'https://m.study.163.com/',
        pathRewrite: {
          '^/wangyi': ''
        }
      }
    }
  }
}
