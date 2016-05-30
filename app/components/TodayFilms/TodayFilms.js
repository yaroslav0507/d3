'use strict';

import React from 'react';
import DataService from '../../services/DataService';
import BarChart from './BarChart/BarChart';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class TodayFilms extends React.Component {
    constructor(){
	super();

	this.state = {
	    data: []
	}
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
	this.componentDidMount()
	    .then(() => {
		let filteredData = this.state.data.filter(item => {
		    return item.rating > this.state.ratingFilterValue;
		});

		this.setState({ data: filteredData });
	    });
    }

    handleRatingChange = (event) => {
	this.setState({
	    ratingFilterValue: event.target.value
	});
    };


    render () {
	return (
	    <div>
		<h2 className="view-title">Most popular films of today</h2>

		<TextField
		    style={{marginLeft: 50}}
		    value={this.state.ratingFilterValue}
		    hintText="Movies with rating upper than"
		    onChange={this.handleRatingChange.bind(this)}
		/>
		<FlatButton
		    backgroundColor="#FFFFFF"
		    hoverColor="#B0C4DE"
		    label="Filter"
		    onClick={this.filterMarksUpper.bind(this)}
		/>
		<BarChart data={this.state.data}/>
	    </div>
	)
    }
}

TodayFilms.defaultProps = {
    width: 1200,
    height: 400
};