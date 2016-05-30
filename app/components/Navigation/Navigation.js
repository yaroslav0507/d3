'use strict';

import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Navigation extends React.Component {

    render(){
	const {location} = this.props;
	const activeClassName = 'nav__item_active';
	const todayClass = location.pathname === '/' ? activeClassName : '';
	const comingClass = location.pathname.match(/^\/coming/) ? activeClassName : '';

	return (
	    <nav>
		<ul className="nav navbar-nav navbar-right">
		    <li>
			<IndexLink to="/" className={"nav__item " + todayClass}>Today films</IndexLink>
		    </li>
		    <li>
			<Link to="coming" className={"nav__item " + comingClass}>Coming films</Link>
		    </li>
		</ul>
	    </nav>
	)
    }
}