var dataArray = [5,11,18];

var svg = d3
	.select("#d3-canvas")
	.append("svg")
	.attr("height", "640px")
	.attr("width", "100%");


svg.selectAll("rect")
	.data(dataArray)
	.enter()
	.append("rect")
		.attr("height", function(d,i){ return d*20; })
		.attr("width", "50")
		.attr("x", function(d,i){ return 60*i; })
		.attr("y", function(d,i){ return 300-(d*20); });