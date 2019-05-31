const path = require('path')

module.exports = require('webpack-merge')(require('./webpack.base'), {
  entry: {
    api: path.join(__dirname, 'src/api.ts'),
  },

  mode: process.env.NODE_ENV || 'development',
})
