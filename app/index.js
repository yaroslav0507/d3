'use strict';

require("./scss/core.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import TodayFilms from './components/TodayFilms/TodayFilms';
import ComingFilms from './components/ComingFilms/ComingFilms';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
	<Router history={hashHistory}>
	    <Route path="/" component={Layout}>
		<IndexRoute component={TodayFilms}/>
		<Route path='/coming' name='comingFilms' component={ComingFilms}></Route>
	    </Route>
	</Router>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
