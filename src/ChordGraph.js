import { select, scalePoint, zoom, zoomIdentity, zoomTransform } from 'd3';
import DataProcess from './DataProcess';

const ChordGraph = (container, data) => {
    // Processs the dataset into nodes and links
    data = DataProcess(data);

// set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 20, left: 30},
  width = 450 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom,
  start = 0,
  end = 0;

// append the svg object to the body of the page
var svg = select(container)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  // List of node names
  var allNodes = data.nodes.map(function(d){return d.name})

  // A linear scale to position the nodes on the X axis
  var x = scalePoint()
    .range([0, width])
    .domain(allNodes)

  // Add the circle for the nodes
  svg
    .selectAll("nodes")
    .data("nodes")
    .enter()
    .append("circle")
      .attr("cx", function(d){ return(x(d.nodes.name))})
      .attr("cy", height-30)
      .attr("r", 8)
      .style("fill", "#69b3a2")

  // Add links between nodes. Here is the tricky part.
  // In my input data, links are provided between nodes -id-, NOT between node names.
  // So I have to do a link between this id and the name
  var idToNode = {};
  data.nodes.forEach(function (n) {
    idToNode[n.key] = n;
  });
  // Cool, now if I do idToNode["2"].name I've got the name of the node with id 2

  // Add the links
  svg
    .selectAll("links")
    .data("links")
    .enter()
    .append('path')
    .attr('d', function (d) {
      start = x(idToNode[d.source].name)    // X position of start node on the X axis
      end = x(idToNode[d.target].name)      // X position of end node
      return ['M', start, height-30,    // the arc starts at the coordinate x=start, y=height-30 (where the starting node is)
        'A',                            // This means we're gonna build an elliptical arc
        (start - end)/2, ',',    // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance
        (start - end)/2, 0, 0, ',',
        start < end ? 1 : 0, end, ',', height-30] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
        .join(' ');
    })
    .style("fill", "none")
    .attr("stroke", "black")
  }

export default ChordGraph;