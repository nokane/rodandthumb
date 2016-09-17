require('babel-core/register');

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const dev = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const port = process.env.PORT || 3000;
const server = express();
global.__ENVIRONMENT__ = process.env.NODE_ENV || 'default';

server.get('/favicon.ico', function(req, res) {
  res.writeHead(200, { 'Content-Type': 'image/x-icon' });
  res.end();
});

server.use(express.static(path.resolve(__dirname, 'dist')));

if (!process.env.NODE_ENV) {
  const compiler = webpack(config);

  server.use(dev(compiler, {
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
  server.use(hot(compiler));
}

server.get('*', require('./app').serverMiddleware);

server.listen(port, (err) => {
  if (err) console.error(err);
  console.info(`Express Server running on http://localhost:${port}/`);
});
