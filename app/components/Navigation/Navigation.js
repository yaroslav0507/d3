'use strict';

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { IndexLink, Link } from 'react-router';

const style = {
    margin: 12,
    color: 'white'
};

export default class Navigation extends React.Component {
    render(){
	const {location} = this.props;
	const activeClassName = 'nav__item_active';
	const todayClass = location.pathname === '/' ? activeClassName : '';
	const comingClass = location.pathname.match(/^\/coming/) ? activeClassName : '';

	return (
	    <nav className="nav">
		<IndexLink to="/" className={"nav__item " + todayClass}>
		    <RaisedButton primary={true} style={style}>Today most popular films</RaisedButton>
		</IndexLink>
		<Link to="coming" className={"nav__item " + comingClass}>
		    <RaisedButton primary={true} style={style}>Coming soon films</RaisedButton>
		</Link>

		<RaisedButton secondary={true}
			      className="nav__item nav__item_right"
			      style={style}
			      onClick={this.props.changeColor}>Change color</RaisedButton>
	    </nav>
	)
    }
}