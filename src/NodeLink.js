import { forceLink, forceManyBody, select, forceSimulation, forceCenter, scaleOrdinal, schemeSet2 } from 'd3';
import DataProcess from './DataProcess';

// Set the dimensions and margins of the graph
const 
margin = {top: 10, right: 30, bottom: 30, left: 40},
width = 1920 - margin.left - margin.right,
height = 1080 - margin.top - margin.bottom;

const NodeLink = (container, data) => {
    // Processs the dataset into nodes and links
    data = DataProcess(data);

    // Destructure data to prevent redundancy
    const { nodes, links, jobs, jobColor } = data;
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
    var svg = select(container)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    var div = select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

    // Initialize the links
    var link = svg
        .selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .style("stroke", "#aaa")
        .style("stroke-width", 2)

    // Initialize the nodes
    var node = svg
        .selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r", 10)
        .style("fill", n => n.job.color)
        .on("mouseover", function(event,d) {
            div.transition()
              .duration(200)
              .style("opacity", 1)
              div.html("Job title: " + d.job.name + "</br>" + "User ID: " + d.name + "</br>" + "Email: " + d.email)
              .style("position", "absolute")
              .style("text-align", "center")
              .style("padding", "5px")
              .style("background", "white")
              .style("border", "solid")
              .style("border-width", "2px")
              .style("border-radius", "5px")
              .style("left", (event.pageX) + "px")
              .style("top", (event.pageY - 28) + "px");
            })
          .on("mouseout", function(d) {
            div.transition()
              .duration(500)
              .style("opacity", 0);
            });

    // Initialize Legend
    var color = scaleOrdinal().domain(jobs).range(colors);

    // Add one dot in the legend for each name.
    svg.selectAll("mydots")
    .data(jobs)
    .enter()
    .append("circle")
    .attr("cx", width*3/4)
    .attr("cy", (d,i) => 100 + i*25) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("r", 7)
    .style("fill", d => color(d))

    // Add one dot in the legend for each name.
    svg.selectAll("mylabels")
    .data(jobs)
    .enter()
    .append("text")
    .attr("x", (width+20)*3/4)
    .attr("y", (d,i) => 100 + i*25) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", d => color(d))
    .text(d => d)
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")


    // forceSimulation will generate (x,y) pairs for nodes and links,
    // which can be dynamically updated, for interaction.
    var simulation = forceSimulation(nodes);              // Force algorithm is applied to data.nodes
        simulation.force("link", forceLink()                    // This force provides links between nodes
                .id(d => { return d.name; })                    // This links the node.name 
                .links(links)                             // to the source/target
        )
        .force("charge", forceManyBody().strength(-100))        // This adds repulsion between nodes.
        .force("center", forceCenter(width / 2, height / 2))    // This force attracts nodes to the center of the svg area
        .on("end", ticked)                                     // The "end" tag specifies when the nodes (x,y) should change
        
    // This function is run at each iteration of the force algorithm, updating the nodes position.
    function ticked() {
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node
            .attr("cx", function (d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
}

return null;
}

export default NodeLink;