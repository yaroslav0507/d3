'use strict';

import d3 from 'd3';

class ApiService {
    getTodayFilms(){
	return new Promise((resolve, reject) => {
	    d3.xhr('http://api.kinopoisk.cf/getTodayFilms', ({ response }) => {
		let { filmsData } = JSON.parse(response);

		resolve(filmsData);
	    })
	});
    }

    getComingFilms(){
	return new Promise((resolve, reject) => {
	    d3.xhr('http://api.kinopoisk.cf/getSoonFilms', ({ response }) => {
		let { previewFilms } = JSON.parse(response);
		let data = {
		    name: 'coming films',
		    children: previewFilms
		};

		resolve(data);
	    })
	});
    }
}

export default new ApiService