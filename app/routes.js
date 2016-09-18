import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Header from './components/Header';

export default (
  <Route component={App}>
   <Route path='/' component={Header} />
  </Route>
);

