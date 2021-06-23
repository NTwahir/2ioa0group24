import { forceLink, forceManyBody, select, forceSimulation, forceCenter, scaleOrdinal, zoom, zoomIdentity, zoomTransform, pointer } from 'd3';
import DataProcess from '../DataProcess';
import CSS from '../CSS/NodeLink.module.css';
// import { interaction } from '../LinkedInteraction';

// variables to be exported
let svg, node, link;

// Destructure css styles f
const { tooltip, legend } = CSS;
// Set the dimensions and margins of the graph
const 
{ screen } = window,
margin = {top: 10, right: 30, bottom: 30, left: 40},
width = (screen.width) - margin.left - margin.right,
height = (screen.height) - margin.top - margin.bottom;
const NodeLink = (container, data) => {
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

    // Append the svg object to the div container
    svg = select(container)
    .append("svg")
    .attr("viewBox", [0, 0, width, height])
    .on("click", reset);

    // Create and append tooltip to the div container
    var tooltipDiv = select(container)
    .append("div")
    .attr("class", tooltip)
    .style("opacity", 0);

    // Initialize Legend
    var color = scaleOrdinal().domain(jobs).range(colors);
    var legendDiv = select(container)
    .append("div")
    .attr("class", legend)
    .append("svg")
    .attr("height", "215px");
    

    var graph = svg
    .append("g")
    .attr("id", "graph");

    // Initialize the links
    link = graph
        .selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .style("stroke", "#aaa")
        .style("stroke-width", 1)

    // Initialize the nodes
    node = graph
        .selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("cursor", "pointer")
        .attr("r", 10)
        .style("fill", n => n.job.color)
        .on("mouseover", mouseOver)
        .on("mouseout", function(d) {
            tooltipDiv.transition()
              .duration(500)
              .style("opacity", 0)
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
    .style("fill", d => color(d));

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
    .style("top", "50px")
    .style("right", "50px");

    // forceSimulation will generate (x,y) pairs for nodes and links,
    // which can be dynamically updated, for interaction.
    var simulation = forceSimulation(nodes);              // Force algorithm is applied to data.nodes
        simulation.force("link", forceLink()                    // This force provides links between nodes
                .id(d => d.id)                    // This links the node.name 
                .links(links)                             // to the source/target
                .distance(0).strength(0.05)
        )
        .force("charge", forceManyBody().strength(-4000))        // This adds repulsion between nodes.
        .force("center", forceCenter(2920 / 2, 2080 / 2))    // This force attracts nodes to the center of the svg area                   
        .on("tick", ticked);                                // The "tick" tag specifies when the nodes (x,y) should change
        
    /** FUNCTIONS */    
    // This function is run at each iteration of the force algorithm, updating the nodes position.
    function ticked() {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y)
            .attr("source", d => d.source.id)
            .attr("target", d => d.target.id);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);
    }

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
    }

    // Click function
    function clicked(event, d) {
        document.getElementById("nodeName").innerHTML = "Name: " + d.name;
        document.getElementById("nodeTitle").innerHTML = "Job title: " + d.job.name;
        document.getElementById("nodeUserID").innerHTML = "User ID: " + d.id;
        document.getElementById("nodeEmailsSent").innerHTML = "Number of Emails sent: " + stats[d.id];
        document.getElementById("nodeEmailAddress").innerHTML = "Email: " + d.email;
        document.getElementById("nodeMeanSentiment").innerHTML = "Average sentiment: " + d.sentiment;
        highlight(d);
        const {x, y} = d;
        event.stopPropagation();
        svg.transition().duration(750).call(
          zoomAttr.transform,
          zoomIdentity
            .translate(width / 2, height / 2)
            .scale(2)
            .translate(-x, -y),
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

    // interaction();
    svg.call(zoomAttr);
}

export default NodeLink;