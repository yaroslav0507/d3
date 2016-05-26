'use strict';

import React from 'react';
import Chart from './Chart/Chart';


var all = [/* some data */];
var filtered = [/* some data */];

export default class StatisticsApp extends React.Component {
    constructor(){
	super();

	this.props = {
	    width: 500,
	    height: 500
	};

	this.state = {
	    data: all
	};
    }

    showAll(){
	this.setState({ data: all });
    }

    filter(){
	this.setState({ data: filtered });
    }

    render () {
	return (
	    <div>
		<div className="selection">
		    <ul>
			<li onClick={this.showAll}>All</li>
			<li onClick={this.filter}>Filter</li>
		    </ul>
		</div>

		<hr/>

		<Chart width={this.props.width}
		       height={this.props.height}>

		    <Bar data={this.state.data}
			      widht={this.props.width}
			      height={this.props.height}/>

		</Chart>
	    </div>
	)
    }
}