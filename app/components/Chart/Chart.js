'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

export default class Chart extends React.Component{
    render() {
	return (
	    <svg width={this.props.width}
		 height={this.props.height}>

		{this.props.children}

	    </svg>
	)
    }
}