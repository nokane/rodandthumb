'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      include: path.join(__dirname, 'src'),
      query: {
        plugins: [
          ['react-transform', {
            'transforms': [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }]
          }],
          ['transform-object-assign']
        ]
      }
    }]
  }
};

