const path = require('path')

module.exports = {
  entry: './source/calculator.js',
  output: {
    filename: 'allBundled.js',
    path: path.resolve(__dirname, 'output')
  },
  devServer: {
    port: 9000,
    contentBase: path.resolve(__dirname, 'output'),
    hot: true
  }
}