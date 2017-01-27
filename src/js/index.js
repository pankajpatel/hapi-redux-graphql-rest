import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import css from '../scss/base.scss';

import Store from './store'
import routes from './routes/routes'
import ApolloClientSingleton from './network/apollo-client-singleton'

const MOUNT_POINT = document.getElementById('app')

const store = new Store(hashHistory, window.INITIAL_STATE)
const history = syncHistoryWithStore(hashHistory, store.data)

ReactDOM.render(
  <ApolloProvider store={store.data} client={ApolloClientSingleton}>
    <Router history={history} routes={routes} />
  </ApolloProvider>,
  MOUNT_POINT
  );
