import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './';
import PlayerCreateView from './containers/PlayerCreateView';
import LoginSelect from './containers/LoginSelectView';

const NotFound = () => <h1>404.. This page is not found!</h1>

module.exports =
  <Route path="/" component={App}>
    <IndexRoute component={LoginSelect} />
    <Route path="create_player" component={PlayerCreateView} />
    <Route path='*' component={NotFound} />
  </Route>
;
