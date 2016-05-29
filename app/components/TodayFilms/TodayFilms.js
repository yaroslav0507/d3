'use strict';

import React from 'react';
import DataService from '../../services/DataService';
import BarChart from './BarChart/BarChart';

export default class TodayFilms extends React.Component {
    constructor(){
	super();

	this.state = {
	    data: []
	}
    }

    shouldComponentUpdate(nextProps, nextState){
	return this.state.data !== nextState.data;
    }

    componentDidMount(){
	return DataService.getTodayFilms()
	    .then(response => {
		let moviesList = response.map(movie => {
		    if(movie.rating){
			return {
			    name: movie.nameEN || movie.nameRU,
			    rating: Number(movie.rating.substr(0, 2))
			}
		    }
		});

		return moviesList.filter(movie => {
		    return movie && movie.rating !== 0;
		})
	    })
	    .then(data => {
		this.setState({ data })
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
		<input type="text" ref="ratingMark" placeholder="Rating"/>
		<button onClick={this.filterMarksUpper.bind(this)}>Filter by rating</button>
		<BarChart data={this.state.data}/>
	    </div>
	)
    }
}

TodayFilms.defaultProps = {
    width: 1200,
    height: 500
};