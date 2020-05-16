// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpackNodeExternals = require('webpack-node-externals')


module.exports = {
  mode: 'production',
  target: 'node',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
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
