import React from 'react';
import {Route, IndexRoute } from 'react-router';

import App from './';
import DefaultView from './containers/DefaultView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DefaultView} />
  </Route>
);
