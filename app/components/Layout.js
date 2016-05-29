'use strict';

import React from 'react';

import Navigation from '../components/Navigation/Navigation';

export default class Layout extends React.Component {

    constructor(){
	super();
    }

    getChildContext(){
	return {color: "red"}
    }

    navigate() {
	this.props.history.pushState(null, '/');
    }

    render(){
	const { location } = this.props;

	return (
	    <div>
		<Navigation location={location}/>
		<div>{this.props.children}</div>
	    </div>
	)
    }
}

Layout.childContextTypes = {
    color: React.PropTypes.string
};