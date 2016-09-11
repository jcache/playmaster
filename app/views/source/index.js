import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { ipcRenderer, remote } from 'electron';
import configureStore from './store/configureStore';
const store = configureStore();
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const history = syncHistoryWithStore(appHistory, store);

import ApplicationFrame from './containers/ApplicationFrame';
import DefaultView from './containers/DefaultView';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={ApplicationFrame}>
            <IndexRoute component={DefaultView} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default App
