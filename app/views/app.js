import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './source/store/configureStore';
import routes from './source/routes';

const store = configureStore();
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const history = syncHistoryWithStore(appHistory, store);

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    )
  }
}
export default App
