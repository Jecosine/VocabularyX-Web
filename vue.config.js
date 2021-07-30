/*
 * @Date: 2021-07-28 03:30:27
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-07-28 03:36:56
 */
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8000/',
        changeOrigin: true,
        ws: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}
