/* eslint-disable @typescript-eslint/no-var-requires */
const webpackNodeExternals = require('webpack-node-externals')
const packageJson = require('./package.json')


module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/index.tsx',
  output: {
    filename: `${packageJson.name}-${packageJson.version}.js`,
    path: `${__dirname}/dist/`,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  externals: [webpackNodeExternals()],
}
