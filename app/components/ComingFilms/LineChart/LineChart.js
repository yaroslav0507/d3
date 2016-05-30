'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

export default class LineChart extends React.Component {
    constructor(){
	super();

	this.state = {
	    color: 'lightsteelblue'
	}

    }

    componentDidUpdate(){
	let { data } = this.props;

	let margin = {top: 20, right: 120, bottom: 20, left: 120},
	    width = 960 - margin.right - margin.left,
	    height = 800 - margin.top - margin.bottom;

	let i = 0,
	    duration = 750,
	    root;

	let tree = d3.layout.tree()
	    .size([height, width]);

	let diagonal = d3.svg.diagonal()
	    .projection((d) => { return [d.y, d.x]; });

	let svg = d3.select(ReactDOM.findDOMNode(this.refs.LineChart));
	//svg.selectAll("*").remove();

	svg
	    .attr("width", width + margin.right + margin.left)
	    .attr("height", height + margin.top + margin.bottom)
	    .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	root = data;
	root.x0 = height / 2;
	root.y0 = 0;

	function collapse(d) {
	    if (d.children) {
		d._children = d.children;
		d._children.forEach(collapse);
		d.children = null;
	    }
	}

	root.children.forEach(collapse);

	update(root, this.state.color);

	d3.select(self.frameElement).style("height", "800px");

	function update(source, color) {

	    // Compute the new tree layout.
	    let nodes = tree.nodes(root).reverse(),
		links = tree.links(nodes);

	    // Normalize for fixed-depth.
	    nodes.forEach((d) => { d.y = d.depth * 180; });

	    // Update the nodes…
	    let node = svg.selectAll("g.node")
		.data(nodes, (d) => { return d.id || (d.id = ++i); });

	    // Enter any new nodes at the parent's previous position.
	    let nodeEnter = node.enter().append("g")
		.attr("class", "node")
		.attr("transform", (d) => { return "translate(" + source.y0 + "," + source.x0 + ")"; })
		.on("click", click);

	    nodeEnter.append("circle")
		.attr("r", 1e-6)
		.style("fill", (d) => { return d._children ? "lightsteelblue" : "#fff"; });

	    nodeEnter.append("text")
		.attr("x", (d) => { return d.children || d._children ? -10 : 10; })
		.attr("dy", ".35em")
		.attr("text-anchor", (d) => { return d.children || d._children ? "end" : "start"; })
		.text((d) => { return d.name; })
		.style("fill-opacity", 1e-6);

	    // Transition nodes to their new position.
	    let nodeUpdate = node.transition()
		.duration(duration)
		.attr("transform", (d) => { return "translate(" + d.y + "," + d.x + ")"; });

	    nodeUpdate.select("circle")
		.attr("r", 4.5)
		.style("fill", (d) => { return d._children ? color : "#fff"; });

	    nodeUpdate.select("text")
		.style("fill-opacity", 1);

	    // Transition exiting nodes to the parent's new position.
	    let nodeExit = node.exit().transition()
		.duration(duration)
		.attr("transform", (d) => { return "translate(" + source.y + "," + source.x + ")"; })
		.remove();

	    nodeExit.select("circle")
		.attr("r", 1e-6);

	    nodeExit.select("text")
		.style("fill-opacity", 1e-6);

	    // Update the links…
	    let link = svg.selectAll("path.link")
		.data(links, (d) => { return d.target.id; });

	    // Enter any new links at the parent's previous position.
	    link.enter().insert("path", "g")
		.attr("class", "link")
		.attr("d", (d) => {
		    let o = {x: source.x0, y: source.y0};
		    return diagonal({source: o, target: o});
		});

	    // Transition links to their new position.
	    link.transition()
		.duration(duration)
		.attr("d", diagonal);

	    // Transition exiting nodes to the parent's new position.
	    link.exit().transition()
		.duration(duration)
		.attr("d", (d) => {
		    let o = {x: source.x, y: source.y};
		    return diagonal({source: o, target: o});
		})
		.remove();

	    // Stash the old positions for transition.
	    nodes.forEach((d) => {
		d.x0 = d.x;
		d.y0 = d.y;
	    });
	}

// Toggle children on click.
	function click(d) {
	    if (d.children) {
		d._children = d.children;
		d.children = null;
	    } else {
		d.children = d._children;
		d._children = null;
	    }
	    update(d);
	}
    }

    generateRandomColor() {
	let color = "hsl(" + Math.random() * 360 + ",100%,50%)";

	this.setState({
	    color
	});
    };

    render () {
	return (
	    <div>
		<button onClick={this.generateRandomColor.bind(this)}>Change color of the chart</button>
		<svg className="line-chart" ref="LineChart"></svg>
	    </div>
	)
    }
}

LineChart.defaultProps = {
    width: 1200,
    height: 500
};