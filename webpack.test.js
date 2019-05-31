const glob = require('glob')
const nodeExternals = require('webpack-node-externals')

module.exports = require('webpack-merge')(require('./webpack.base'), {
  entry: glob.sync('./src/**/*_test.ts'),

  target: 'node',

  externals: [nodeExternals()],

  node: {
    global: false,
    process: false,
    Buffer: false,
    setImmediate: false,
    __dirname: false,
    __filename: false,
  },
})
