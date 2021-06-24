import { select, zoom, zoomIdentity, zoomTransform, pointer, scaleBand, scalePoint } from 'd3';
import DataProcess from '../DataProcess';
import CSS from '../CSS/NodeLink.module.css';
// import { interaction } from '../LinkedInteraction';

// variables to be exported
let svg, node, link;

// Destructure css styles
const { tooltip, legend } = CSS;

// Set the dimensions and margins of the graph
const 
{ screen } = window,
margin = {top: 10, right: 30, bottom: 30, left: 40},
width = (screen.width) - margin.left - margin.right,
height = (screen.height) - margin.top - margin.bottom;
let
start = 0,
end = 0;

// boolean used in toggle() to check if a node has been clicked
var showInfo = false;


const ChordGraph = (container, data) => {
    // Processs the dataset into nodes and links
    data = DataProcess(data);

    // Destructure data to prevent redundancy
    const { nodes, links, jobs, stats, sortedNodes } = data;
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
    svg = select(container)
        .append("svg")
        .attr("viewBox", [0, 0, 648, 1152])
        .on("click", reset);

    // Create and append tooltip to the div container
    var tooltipDiv = select(container).append("div")
    .attr("class", tooltip)
    .style("opacity", 0);

    // Initialize Legend
    var color = scaleBand().domain(jobs).range(colors);
    var legendDiv = select(container)
    .append("div")
    .attr("class", legend)
    .append("svg")
    .attr("height", "215px");
    
    var graph = svg
    .append("g")
    .attr("id", "graph");

    // List of node names
    let allNodes = [];
    let idToNode = {};
    sortedNodes.forEach(node => {
        node.values.forEach(value => {
            allNodes.push(value.name)
            idToNode[value.id] = value
        })
    })


    // A linear scale to position the nodes on the X axis
    const y = scalePoint()
        .range([0, height])
        .domain(allNodes)

    // Add links between nodes. Here is the tricky part.
    // In my input data, links are provided between nodes -id-, NOT between node names.
    // So I have to do a link between this id and the name
    // let idToNode = {};
    // nodes.forEach(n => idToNode[n.id] = n);
    // Cool, now if I do idToNode["2"].name I've got the name of the node with id 2

    // Add the links
    link = graph
    .append("g")
    .attr("class", "links")
    .selectAll("links")
    .data(links)
    .enter()
    .append('path')
    .attr('d', d => {
        start = y(idToNode[d.source].name)    // X position of start node on the X axis
        end = y(idToNode[d.target].name)      // X position of end node
        return ['M', 25, start, //height-30,    // the arc starts at the coordinate x=start, y=height-30 (where the starting node is)
        'A',                            // This means we're gonna build an elliptical arc
        (start - end)/2, ',',    // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance
        (start - end)/2, 0, 0, ',',
        start < end ? 1 : 0, 25, end, ',', ]//height-30] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
        .join(' ');
    })
    .style("fill", "none")
    .attr("stroke", "#aaa");

    // Add the circle for the nodes
    node = graph
    .append("g")
    .attr("class", "nodes")
    .selectAll("nodes")
    .data(nodes)
    .enter()
    .append("circle")
        .attr("cy", d => y(d.name))
        .attr("cx", 25)
        .attr("r", 5)
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
    legendDiv.selectAll("mydots")
    .data(jobs)
    .enter()
    .append("circle")
    .attr("cx", 10)
    .attr("cy", (d,i) => 10 + i*20) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("r", 7)
    .style("fill", d => color(d))

    // Add the name of the job title for each previously placed dot.
    legendDiv.selectAll("mylabels")
    .data(jobs)
    .enter()
    .append("text")
    .attr("x", 30)
    .attr("y", (d,i) => 10 + i*20) // 100 is where the first dot appears. 25 is the distance between dots
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
        showInfo = false;
        toggle()
        document.getElementById("nodeName").innerHTML = "Name: ";
        document.getElementById("nodeTitle").innerHTML = "Job title: ";
        document.getElementById("nodeUserID").innerHTML = "User ID: ";
        document.getElementById("nodeEmailsSent").innerHTML = "Number of Emails sent: ";
        document.getElementById("nodeEmailAddress").innerHTML = "Email: ";
        document.getElementById("nodeMeanSentiment").innerHTML = "Average sentiment: ";
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

    function toggle() {
        var intro = document.getElementById("toolIntro");
        var description = document.getElementById("nodeDescription")
        if (intro.style.display === "block" && showInfo === true) {
            intro.style.display = "none";
            description.style.display = "block";
            showInfo = false;
        } else {
            intro.style.display = "block";
            description.style.display = "none";
        }
      } 

    // Click function
    function clicked(event, d) {
        showInfo = true;
        toggle()
        document.getElementById("nodeName").innerHTML = "Name: " + d.name;
        document.getElementById("nodeTitle").innerHTML = "Job title: " + d.job.name;
        document.getElementById("nodeUserID").innerHTML = "User ID: " + d.id;
        document.getElementById("nodeEmailsSent").innerHTML = "Number of Emails sent: " + stats[d.id];
        document.getElementById("nodeEmailAddress").innerHTML = "Email: " + d.email;
        document.getElementById("nodeMeanSentiment").innerHTML = "Average sentiment: " + d.sentiment;
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
            .translate(width / 2 , height / 2)
            .scale(2)
            .translate(-x, y),
          pointer(event, svg.node())
        );
    };

    // interaction()
    svg.call(zoomAttr);
}


export { svg, node, link };
export default ChordGraph;
