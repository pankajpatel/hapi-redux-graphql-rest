import React from 'react';
import ReactDOM from 'react-dom';
import css from '../scss/base.scss';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import routes from './routes/routes'
//Or import css from '../less/base.less';

ReactDOM.render(<Router history={hashHistory}  routes={routes} />, document.getElementById('app'));
