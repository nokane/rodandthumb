var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },
  resolve: {
    root: path.resolve(__dirname, './src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
  },
}
