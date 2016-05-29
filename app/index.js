'use strict';

require("./scss/core.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import TodayFilms from './components/TodayFilms/TodayFilms';
import ComingFilms from './components/ComingFilms/ComingFilms';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


ReactDOM.render(
    <Router history={hashHistory}>
	<Route path="/" component={Layout}>
	    <IndexRoute component={TodayFilms}/>
	    <Route path='/coming' name='comingFilms' component={ComingFilms}></Route>
	</Route>
    </Router>,
    document.getElementById('app')
);
