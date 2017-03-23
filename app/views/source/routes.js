import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './';
import PlayerCreateView from './containers/PlayerCreateView';
import LoginSelect from './containers/LoginSelectView';
import Landing from './containers/LandingView';

const NotFound = () => <h1>404.. This page is not found!</h1>

module.exports =
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="sign_in" component={LoginSelect} />
    <Route path="create_player" component={PlayerCreateView} />
    <Route path='*' component={NotFound} />
  </Route>
;
