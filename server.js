require('babel-core/register');
/**
 * Have babel skip '.scss' and '.css' imports
 */
require.extensions['.scss'] = () => {
  return;
};
require.extensions['.css'] = () => {
  return;
};
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const port = process.env.PORT || 3000;
const server = express();

server.get('/favicon.ico', function(req, res) {
  res.writeHead(200, { 'Content-Type': 'image/x-icon' });
  res.end();
});

server.use(express.static(path.resolve(__dirname, 'dist')));

if (!process.env.NODE_ENV) {
  /**
   * If in Dev Environment, run Webpack Dev Middleware and Hot Middleware
   */
  const compiler = webpack(config);

  server.use(devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));
  server.use(hotMiddleware(compiler));
}

server.get('*', require('./app').serverMiddleware);

server.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info(`Express Server running on port: ${port}`);
});
