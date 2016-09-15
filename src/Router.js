import React from 'react';
import ReactDOM from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { Router, match, RouterContext, browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import routes from './Routes';
import Root from './components/Root';
const isClient = typeof document !== 'undefined';

if (isClient) {
  ReactDOM.render(
    <Router history={browserHistory}>{routes} </Router>,
    document.getElementById('root')
  );
}

function renderComponentWithRoot(Component, componentProps) {
  const componentHtml = renderToStaticMarkup(
      <Component {...componentProps} />
  );
  const head = Helmet.rewind();
  return '<!doctype html>\n' + renderToStaticMarkup(
    <Root content={componentHtml} head={head} />
  );
}
function handleError(res, error) {
  res.status(500).send(error.message);
}

function handleRedirect(res, redirectLocation) {
  res.redirect(302, redirectLocation.pathname + redirectLocation.search);
}

function routeIsUnmatched(renderProps) {
  return renderProps.routes[renderProps.routes.length - 1].path === '*';
}

function handleRoute(res, renderProps) {
  const status = routeIsUnmatched(renderProps) ? 404 : 200;
  res.status(status).send(renderComponentWithRoot(RouterContext, renderProps));
}

function serverMiddleware(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log(error);
      handleError(error);
    } else if (redirectLocation) {
      handleRedirect(res, redirectLocation);
    } else if (renderProps) {
      handleRoute(res, renderProps);
    } else {
      res.sendStatus(404);
    }
  });
}

export default serverMiddleware;
