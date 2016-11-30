import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ChatView from './containers/ChatView';
import App from './';

const NotFound = () => <h1>404.. This page is not found!</h1>

module.exports =
  <Route path="/" component={App}>
    <IndexRoute component={ChatView} />
    <Route path='*' component={NotFound} />
  </Route>
;
