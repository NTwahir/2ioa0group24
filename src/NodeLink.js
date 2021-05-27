import { forceLink, forceManyBody, select, forceSimulation, forceCenter, scaleOrdinal, zoom, zoomIdentity, zoomTransform, pointer } from 'd3';
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
    const { nodes, links, jobs } = data;
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
    .attr("viewBox", [0, 0, 2920, 2080])
    .on("click", reset);

    // Create and append tooltip to the div container
    var tooltip = select(container).append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

    // Initialize Legend
    var color = scaleOrdinal().domain(jobs).range(colors);
    var legend = svg.append("g").attr("id", "legend");
    var graph = svg
    .append("g")
    .attr("id", "graph");

    // Initialize the links
    var link = graph
        .selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .style("stroke", "#aaa")
        .style("stroke-width", 2)

    // Initialize the nodes
    var node = graph
        .selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("cursor", "pointer")
        .attr("r", 10)
        .style("fill", n => n.job.color)
        .on("mouseover", mouseOver)
          .on("mouseout", function(d) {
            tooltip.transition()
              .duration(500)
              .style("opacity", 0)
    // On click functionality
    node
        .on("click", clicked)
            });

    // Add one dot in the legend for each name.
    legend.selectAll("mydots")
    .data(jobs)
    .enter()
    .append("circle")
    .attr("cx", width)
    .attr("cy", (d,i) => 100 + i*25) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("r", 7)
    .style("fill", d => color(d))

    // Add one dot in the legend for each name.
    legend.selectAll("mylabels")
    .data(jobs)
    .enter()
    .append("text")
    .attr("x", (width+20))
    .attr("y", (d,i) => 100 + i*25) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", d => color(d))
    .text(d => d)
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")

    // forceSimulation will generate (x,y) pairs for nodes and links,
    // which can be dynamically updated, for interaction.
    var simulation = forceSimulation(nodes);              // Force algorithm is applied to data.nodes
        simulation.force("link", forceLink()                    // This force provides links between nodes
                .id(d => d.id)                    // This links the node.name 
                .links(links)                             // to the source/target
        )
        .force("charge", forceManyBody().strength(-100))        // This adds repulsion between nodes.
        .force("center", forceCenter(width / 2, height / 2))    // This force attracts nodes to the center of the svg area
        // .on("end", ticked)                                     // The "end" tag specifies when the nodes (x,y) should change
        .on("tick", ticked);
        
    /** FUNCTIONS */    
    // This function is run at each iteration of the force algorithm, updating the nodes position.
    function ticked() {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);
    }

    // Transformes the graph group on drag/dubble click
    function zoomed({ transform }) {
      graph.attr("transform", transform);
    }
    
    // Zoom attribute, which sets the [min, max] zoom and calls zoomed
    const zoomAttr = zoom()
        .scaleExtent([0.5,8])
        .on("zoom", zoomed);

    // Resets viewbox to starting point
    function reset() {
      svg.transition().duration(750).call(
          zoomAttr.transform,
          zoomIdentity,
          zoomTransform(svg.node()).invert([width / 2, height / 2])
      );
    }

    // Mouse hover function
    function mouseOver (event,d) {
        tooltip.transition()
          .duration(200)
          .style("opacity", 1)
          tooltip.html("Name: " + d.name + "</br>" +
                  "Job title: " + d.job.name + "</br>" + 
                  "User ID: " + d.id + "</br>" + 
                  "Email: " + d.email)
          .style("position", "absolute")
          .style("text-align", "center")
          .style("padding", "5px")
          .style("background", "white")
          .style("border", "solid")
          .style("border-width", "2px")
          .style("border-radius", "5px")
          .style("left", (event.pageX + 28) + "px")
          .style("top", (event.pageY) + "px");
    }

    // Click function
    function clicked(event, d) {
      console.log(d) //get data from click in console
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


    svg.call(zoomAttr);
}

export default NodeLink;