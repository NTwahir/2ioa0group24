import { forceLink, forceManyBody, select, forceSimulation, forceCenter } from 'd3';
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
    const { nodes, links } = data;

    // Append the svg object to the div containter
    var svg = select(container)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

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

    // Initialize text lable
    var labels = svg.append("text")
    .text("yo")
    .attr("y", 20);

    // forceSimulation will generate (x,y) pairs for nodes and links,
    // which can be dynamically updated, for interaction.
    var simulation = forceSimulation(nodes);              // Force algorithm is applied to data.nodes
        simulation.force("link", forceLink()                    // This force provides links between nodes
                .id(d => { return d.name; })                    // This links the node.name 
                .links(links)                             // to the source/target
        )
        .force("charge", forceManyBody().strength(-100))        // This adds repulsion between nodes.
        .force("center", forceCenter(width / 2, height / 2))    // This force attracts nodes to the center of the svg area
        .on("end", ticked);                                     // The "end" tag specifies when the nodes (x,y) should change

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