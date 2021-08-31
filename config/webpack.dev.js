const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { resolveApp } = require('./path')

module.exports = merge(common, { 
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: resolveApp('dist'),
    clean: true //编译前清除目录
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    port: 9000
  }
})