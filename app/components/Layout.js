'use strict';

import React from 'react';

import Navigation from '../components/Navigation/Navigation';

export default class Layout extends React.Component {

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