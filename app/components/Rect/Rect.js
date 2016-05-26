'use strict';

import React from 'react';

export default class Rect extends React.Component{
    constructor(){
	super();
    }

    shouldComponentUpdate(nextProps){
	return this.props.height !== nextProps.height;
    }

    render(){
	return (
	    <rect className="bar"
	    	  height={this.props.height}
	    	  width={this.props.width}
		  y={this.props.y}
		  x={this.props.x}
	    />
	)
    }
}

Rect.defaultProps = {
    width: 0,
    height: 0,
    x: 0,
    y: 0
};