'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

let svg;

const margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

const x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

const y = d3.scale.linear()
    .range([height, 0]);

const xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

const yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

export default class BarChart extends React.Component {

    componentDidMount(){
	svg = d3.select(ReactDOM.findDOMNode(this.refs.BarChart));
    }

    componentDidUpdate(){
	const { data } = this.props;
	svg.selectAll("*").remove();

	svg.attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	    .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	x.domain(data.map(d => { return d.name; }));
	y.domain([0, d3.max(data, d => { return d.rating; })]);

	svg.append("g")
	    .attr("class", "x axis")
	    .attr("transform", "translate(0," + height + ")")
	    .call(xAxis)
	    .selectAll("text")
		.style("text-anchor", "end")
		.attr("dx", "-.8em")
		.attr("dy", ".15em")
		.attr("transform", "rotate(-65)" );

	svg.append("g")
	    .attr("class", "y axis")
	    .call(yAxis)
	    .append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("Rating");

	svg.selectAll(".bar")
	    .data(data)
	    .enter()
	    .append("rect")
		.attr("class", "bar")
	    	.attr("fill", this.context.color)
		.attr("x", d => { return x(d.name); })
		.attr("width", x.rangeBand())
		.attr("y", d => { return y(d.rating); })
		.attr("height", d => { return height - y(d.rating); });

    }

    render () {
	return (
	    <div>
		<svg className="bar-chart" ref="BarChart"></svg>
	    </div>
	)
    }
}

BarChart.defaultProps = {
    width: 1200,
    height: 500
};

BarChart.contextTypes = {
    color: React.PropTypes.string
};