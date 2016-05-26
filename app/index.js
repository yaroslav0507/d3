'use strict';

require("./scss/core.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StatisticsApp from './components/StatisticsApp';


const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <StatisticsApp />
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
