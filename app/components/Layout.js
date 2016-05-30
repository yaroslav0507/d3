'use strict';

import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Paper from 'material-ui/Paper';

export default class Layout extends React.Component {

    constructor(){
	super();

	this.state = {
	    color: 'lightsteelblue'
	}
    }
    getChildContext(){
	return {
	    color: this.state.color
	}
    }

    generateRandomColor() {
	let color = "hsl(" + Math.random() * 360 + ",100%,50%)";

	this.setState({
	    color
	});
    };

    render(){
	const { location } = this.props;

	return (
	    <div>
		<Navigation location={location} changeColor={this.generateRandomColor.bind(this)}/>
		<Paper zDepth={2}>{this.props.children}</Paper>
	    </div>
	)
    }
}

Layout.childContextTypes = {
    color: React.PropTypes.string
};