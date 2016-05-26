'use strict';

import React from 'react';
import d3 from 'd3';
import Rect from '../Rect/Rect';

export default class Bar extends React.Component {

    shouldComponentUpdate(nextProps){
	return this.props.data !== nextProps.data;
    }

    render(){
	let { props } = this;
	let data = this.props.data.map(d => { return d.y });

	let yScale = d3.scale.linear()
		.domain([0, d3.max(data)])
		.range([0, this.props.height]);

	let xScale = d3.scale.ordinal()
		.domain(d3.range(this.props.data.length))
		.rangeRoundBands([0, this.props.widht], 0.05);

	let bars = data.map((point, i) => {
	    let height = yScale(point);
	    let y = props.height - height;
	    let width = xScale.rangeBand();
	    let x = xScale(i);

	    return (
		<Rect height={height}
		      width={width}
		      x={x}
		      y={y}
		      key={i} />
	    )
	});

	return (
	    <g>{bars}</g>
	)
    }
}

Bar.defaultProps = {
    data: []
};