/**
 * Created by lidy on 2019/3/12.
 */
'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components'),
      '@layout': resolve('src/components/layout'),
      '@utils': resolve('src/utils'),
      '@public': resolve('public')
    }
  },
}
