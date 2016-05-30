# Movies Statistics tool
Please feel free to see [demo](http://yaroslav0507.github.io/d3)

## Stack of technologies
- [WebPack](https://webpack.github.io/);
- [React JS](https://https://facebook.github.io/react/);
- [D3](https://d3js.org/);

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ git clone https://github.com/yaroslav0507/d3 # or clone your own fork
$ npm install
$ npm start
```

Your app should now be running on [localhost:4000](http://localhost:4000/).


## Features
This application gives you ability to see rating of most popular films of today and coming soon films.

Initial state shows you rating of today films by [kinopoisk](http://www.kinopoisk.ru/) data in the view of `bar chart`.
Coming soon films button leads you to the statistic of coming soon movies in the view of `tree diagram`. 

- Tree diagram uses `d3 layouts`.
- You can filter most popular films by rating.
- Color of charts could be changed by clicking `change color` button.

## Developing mode
All changes in the code will be immediately reflected in your browser by WebPach HRM - Hot Module Replacement

## Interface

![Bar Chart](https://www.dropbox.com/s/yjeciimjgkys99p/bar_chart.png?dl=1)

![Tree Diagram](https://www.dropbox.com/s/5qic6b0zd20xhj6/tree_diagram.png?dl=1)


