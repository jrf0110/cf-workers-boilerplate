const path = require('path')
const glob = require('glob')
const webpack = require('webpack')

const processEnv = [
  // Put the names of the env you want in your bundle here
  'NODE_ENV',
].reduce(
  (result, key) => ({
    ...result,
    [`process.env.${key}`]: JSON.stringify(process.env[key]),
  }),
  {},
)

module.exports = {
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: './',
  },

  mode: process.env.NODE_ENV || 'development',

  plugins: [new webpack.DefinePlugin(processEnv)],

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
}
