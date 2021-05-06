import React from 'react';
import { forceLink, forceManyBody, select, forceSimulation, forceCenter, json } from 'd3';
import { nest } from 'd3-collection';

const url = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_network.json";

// set the dimensions and margins of the graph
const 
margin = {top: 10, right: 30, bottom: 30, left: 40},
width = 400 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

const NodeLink = ({ data }) => {
// append the svg object to the body of the page
var svg = select("#root")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

json(url).then((data) => {

    // Initialize the links
    var link = svg
        .selectAll("line")
        .data(data.links)
        .enter()
        .append("line")
        .style("stroke", "#aaa")
    
    // Initialize the nodes
    var node = svg
        .selectAll("circle")
        .data(data.nodes)
        .enter()
        .append("circle")
        .attr("r", 20)
        .style("fill", "#69b3a2")
    
    // Let's list the force we wanna apply on the network
    var simulation = forceSimulation(data.nodes);                 // Force algorithm is applied to data.nodes
        simulation.force("link", forceLink()                               // This force provides links between nodes
                .id(function(d) { return d.id; })                     // This provide  the id of a node
                .links(data.links)                                    // and this the list of links
        )
        .force("charge", forceManyBody().strength(-200))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
        .force("center", forceCenter(width / 2, height / 2))     // This force attracts nodes to the center of the svg area
        .on("end", ticked);
    
    // This function is run at each iteration of the force algorithm, updating the nodes position.
    function ticked() {
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
    
        node
            .attr("cx", function (d) { return d.x+6; })
            .attr("cy", function(d) { return d.y-6; });
    }
    console.log({node, link})
});

return (
    <svg width={400} height={400}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
            <g className="links">
            {data.columns.map(d => (
                <circle
                    key={d}
                    r={20}
                    fill="#69b3a2"
                    cx={1}
                    cy={10}
                />
            ))}
            </g>
            <g className="nodes">
            {data.map(d => (
                <line
                    stroke="#aaa"
                    x1={1}
                    x2={100}
                    y1={1}
                    y2={1}
                />
            ))}
            </g>
        </g>
    </svg>
)
}

export default NodeLink;
