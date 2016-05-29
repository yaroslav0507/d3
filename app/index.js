'use strict';

require("./scss/core.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


ReactDOM.render(
    <Router history={hashHistory}>
	<Route path="/">
	    <IndexRoute component={App}/>
	</Route>
    </Router>,
    document.getElementById('app')
);
