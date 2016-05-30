'use strict';

import React from 'react';
import DataService from '../../services/DataService';
import TreeChart from './TreeChart/TreeChart';

export default class ComingFilms extends React.Component {
    constructor(){
	super();

	this.state = {
	    data: []
	}
    }

    componentDidMount(){
	return DataService.getComingFilms()
	    .then(response => {
		return response.children.map(date => {

		    let cinemaDate = date.filter(movie => {
			return movie && movie.rating;
		    });

		    let preparedMovieData = cinemaDate.map(movie => {
			return {
			    name: movie.nameEN || movie.nameRU,
			    date: new Date(movie.premiereRU),
			    close: +movie.rating.substr(0, 2)
			}
		    });

		    let moviesForDate = {
			name: cinemaDate[0]['premiereRU'],
			children: preparedMovieData
		    };

		    return moviesForDate;

		});
	    })
	    .then(data => {
		let treeData = {
		    name: 'Coming films',
		    children: data
		};

		this.setState({ data: treeData })
	    });
    }

    filterMarksUpper(){
	this.componentDidMount().then(() => {
	    let mark = this.refs.ratingMark.value;
	    console.log(mark);

	    let filteredData = this.state.data.filter(item => {
		return item.rating > mark;
	    });

	    this.setState({ data: filteredData });
	});

    }

    render () {
	return (
	    <div>
		<h2 className="view-title">Films that will soon be released</h2>
		<TreeChart data={this.state.data}/>
	    </div>
	)
    }
}

ComingFilms.defaultProps = {
    width: 1200,
    height: 400
};

ComingFilms.contextTypes = {
    color: React.PropTypes.string
};