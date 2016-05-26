'use strict';

import React from 'react';
import Chart from './Chart/Chart';
import Bar from './Bar/Bar';


var all = [
    {x: 'a', y: 20},
    {x: 'b', y: 14},
    {x: 'c', y: 12},
    {x: 'd', y: 19},
    {x: 'e', y: 18},
    {x: 'f', y: 15},
    {x: 'g', y: 10},
    {x: 'h', y: 14}
];

var filtered = [
    {x: 'a', y: 9},
    {x: 'b', y: 5},
    {x: 'c', y: 6},
    {x: 'd', y: 12},
    {x: 'e', y: 10},
    {x: 'f', y: 7},
    {x: 'g', y: 4},
    {x: 'h', y: 9}
];


export default class StatisticsApp extends React.Component {
    constructor(){
	super();

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
			<li onClick={this.showAll.bind(this)}>All</li>
			<li onClick={this.filter.bind(this)}>Filter</li>
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

StatisticsApp.defaultProps = {
    width: 500,
    height: 500
};