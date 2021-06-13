import { select, zoom, zoomIdentity, zoomTransform, pointer, scaleBand } from 'd3';
import DataProcess from './DataProcess';
import CSS from './ChordGraph.module.css';

// Destructure css styles
const { tooltip } = CSS;

// Set the dimensions and margins of the graph
const 
{ screen } = window,
margin = {top: 10, right: 30, bottom: 30, left: 40},
width = (screen.width * 0.75) - margin.left - margin.right,
height = (screen.height * 0.75) - margin.top - margin.bottom;
let
start = 0,
end = 0;

const ChordGraph = (container, data) => {
    // Processs the dataset into nodes and links
    data = DataProcess(data);

    // Destructure data to prevent redundancy
    const { nodes, links, jobs, stats } = data;
    let colors = [
        "#003f5c",
        "#2f4b7c",
        "#665191",
        "#a05195",
        "#d45087",
        "#f95d6a",
        "#ff7c43",
        "#ffa600",
        "#488f31",
        "#de425b",
        "#69b3a2"
    ];

    // append the svg object to the body of the page
    var svg = select(container)
        .append("svg")
        .attr("viewBox", [0, 0, width, height])
        .append("g")
        .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")")
        .on("click", reset);

    // Create and append tooltip to the div container
    var tooltipDiv = select(container).append("div")
    .attr("class", tooltip)
    .style("opacity", 0);

    // Initialize Legend
    var color = scaleBand().domain(jobs).range(colors);
    var legend = svg.append("g").attr("id", "legend");
    var graph = svg
    .append("g")
    .attr("id", "graph");

    // List of node names
    let allNodes = nodes.map(d => d.name)
    // A linear scale to position the nodes on the X axis
    let x = scaleBand()
        .range([0, width])
        .domain(allNodes)

    // Add links between nodes. Here is the tricky part.
    // In my input data, links are provided between nodes -id-, NOT between node names.
    // So I have to do a link between this id and the name
    let idToNode = {};
    nodes.forEach(n => idToNode[n.id] = n);
    // Cool, now if I do idToNode["2"].name I've got the name of the node with id 2

    // Add the links
    var link = graph
    .append("g")
    .attr("class", "links")
    .selectAll("links")
    .data(links)
    .enter()
    .append('path')
    .attr('d', d => {
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
    .attr("stroke", "#aaa");

    // Add the circle for the nodes
    var node = graph
    .append("g")
    .attr("class", "nodes")
    .selectAll("nodes")
    .data(nodes)
    .enter()
    .append("circle")
        .attr("cx", d => x(d.name))
        .attr("cy", height-30)
        .attr("r", 8)
        .style("fill",  n => n.job.color)
    .on("mouseover", mouseOver)
    .on("mouseout", function(d) {
        tooltipDiv.transition()
            .duration(500)
            .style("opacity", 0)
        link
            .style('stroke', '#aaa')
            .style('stroke-width', '1')
        });

    // On click functionality
    node
        .on("click", clicked);

    // Add one dot in the legend for each name.
    legend.selectAll("mydots")
    .data(jobs)
    .enter()
    .append("circle")
    .attr("cx", width-200)
    .attr("cy", (d,i) => 100 + i*40) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("r", 7)
    .style("fill", d => color(d))    

    // Add the name of the job title for each previously placed dot.
    legend.selectAll("mylabels")
    .data(jobs)
    .enter()
    .append("text")
    .attr("x", (width-180))
    .attr("y", (d,i) => 100 + i*40) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", d => color(d))
    .text(d => d)
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")


    /** FUNCTIONS */   
    // Transforms the graph group on drag/double click
    function zoomed({ transform }) {
        graph.attr("transform", transform);
      }
    
    // Zoom attribute, which sets the [min, max] zoom and calls zoomed
    const zoomAttr = zoom()
        .scaleExtent([0.1,80])
        .on("zoom", zoomed);

    // Resets viewbox to starting point
    function reset() {
        // Return svg to starting position
        svg.transition().duration(750).call(
            zoomAttr.transform,
            zoomIdentity,
            zoomTransform(svg.node()).invert([width / 2, height / 2])
        );
        // Set link color to default
        link.style("stroke", "#aaa");
    }

    // Mouse hover function
    function mouseOver (event,d) {
        tooltipDiv.transition()
          .duration(200)
          .style("opacity", 1)
          tooltipDiv.html(
              "Name: " + d.name + "</br>" +
              "Job title: " + d.job.name + "</br>" + 
              "User ID: " + d.id + "</br>" + 
              "Number of Emails sent: " + stats[d.id] + "</br>" +
              "Email: " + d.email
              )
          .style("left", (event.pageX + 28) + "px")
          .style("top", (event.pageY) + "px");
        link
          .style('stroke', function (link_d) { return link_d.source === d.id || link_d.target === d.id ? '#69b3b2' : '#b8b8b8';})
          .style('stroke-width', function (link_d) { return link_d.source === d.id || link_d.target === d.id ? 4 : 1;})
    }

    // Click function
    function clicked(event, d) {
        let x = -pointer(event)[0];
        let y = -pointer(event)[1];
        x = (x * 2) + (width / 2);
        y = (y * 2) + (height / 2);
        console.log(x);
        console.log(y);

        event.stopPropagation();
        graph.transition().duration(750).call(
          zoomAttr.transform,
          zoomIdentity
            .translate(width / 2 , height )
            .scale(2)
            .translate(-x, y),
          pointer(event, svg.node())
        );
    };

    /** Highlights links of selected node, 
     * either red or green based of if the email was sent 
     * or received respectively. 
     */
    function highlight(d) {
        link.style("stroke", datum => {
            let sourceId = datum.source.id;
            let targetId = datum.target.id;
            return sourceId === d.id ? "red"
                : targetId === d.id ? "green"
                : "";
        });
    };


    svg.call(zoomAttr);
}

export default ChordGraph;