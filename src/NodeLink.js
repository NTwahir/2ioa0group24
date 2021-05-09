import React from 'react';
import { forceLink, forceManyBody, select, forceSimulation, forceCenter } from 'd3';
import DataProcess from './DataProcess';

const url = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_network.json";

// set the dimensions and margins of the graph
const 
margin = {top: 10, right: 30, bottom: 30, left: 40},
width = 1000 - margin.left - margin.right,
height = 1000 - margin.top - margin.bottom;

let data1 = 
{
    "nodes": [
      {
        "id": 1,
        "name": "Andy",
        "gender": "male"
      },
      {
        "id": 2,
        "name": "Betty",
        "gender": "female"
      },
      {
        "id": 3,
        "name": "Cate",
        "gender": "female"
      },
      {
        "id": 4,
        "name": "Dave",
        "gender": "male"
      },
      {
        "id": 5,
        "name": "Ellen",
        "gender": "female"
      },
      {
        "id": 6,
        "name": "Fiona",
        "gender": "female"
      },
      {
        "id": 7,
        "name": "Garry",
        "gender": "male"
      },
      {
        "id": 8,
        "name": "Holly",
        "gender": "female"
      },
      {
        "id": 9,
        "name": "Iris",
        "gender": "female"
      },
      {
        "id": 10,
        "name": "Jane",
        "gender": "female"
      }
    ],
    "links": [
      {
        "source": 1,
        "target": 2
      },
      {
        "source": 1,
        "target": 5
      },
      {
        "source": 1,
        "target": 6
      },
  
      {
        "source": 2,
        "target": 3
      },
      {
        "source": 2,
        "target": 7
      }
    ,
  
      {
        "source": 3,
        "target": 4
      },
      {
        "source": 8,
        "target": 3
      }
    ,
      {
        "source": 4,
        "target": 5
      }
    ,
  
      {
        "source": 4,
        "target": 9
      },
      {
        "source": 5,
        "target": 10
      }
    ]
  };

const NodeLink = (container, data) => {
    let data2 = DataProcess(data)[1];

    // append the svg object to the body of the page
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
        .data(data2.links)
        .enter()
        .append("line")
        .style("stroke", "#aaa")

    // Initialize the nodes
    var node = svg
        .selectAll("circle")
        .data(data2.nodes)
        .enter()
        .append("circle")
        .attr("r", 5)
        .style("fill", "#69b3a2")

    // Let's list the force we wanna apply on the network
    var simulation = forceSimulation(data2.nodes);                 // Force algorithm is applied to data.nodes
        simulation.force("link", forceLink()                               // This force provides links between nodes
                .id(d => { return d.name; })                     // This provide  the id of a node
                .links(data2.links)                                    // and this the list of links
        )
        .force("charge", forceManyBody().strength(-100))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
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
            .attr("cx", function (d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
}

return null;
}

export default NodeLink;
