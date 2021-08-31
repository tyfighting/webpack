const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { resolveApp } = require('./path')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: resolveApp('dist'),
    clean: true //编译前清除目录
  }
})