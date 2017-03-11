import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import configureStore from './source/store/configureStore';
import routes from './source/routes';

const store = configureStore();
const appHistory = useRouterHistory(createHashHistory)();
ReactDOM.render(
    <Provider store={store}>
      <Router history={appHistory} routes={routes} />
    </Provider>
    , document.getElementById('react-root')
);
