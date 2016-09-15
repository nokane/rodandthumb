import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import config from './../webpack.config.js';

const port = process.env.PORT || 3000;

const app = express();

app.get("/favicon.ico", (req, res) => {
  res.writeHead(200, { "Content-Type": "image/x-icon" });
  res.end();
});

app.use('/', express.static(path.join(__dirname, "../public")));

if (!process.env.NODE_ENV) {
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
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
  app.use(hotMiddleware(compiler));
}


app.get('*', require('./index').serverMiddleware);

app.listen(port, () => {
  console.log("Express server running at localhost:" + port);
});