// Imported values
import { select, selectAll, zoomTransform, pointer } from 'd3';
import { zoomAttr, zoomIdentity } from '../graphs/NodeLink';

// Set the dimensions and margins of the graph
const 
margin = {top: 10, right: 30, bottom: 30, left: 40},
width = 648 - margin.left - margin.right,
height = 1152 - margin.top - margin.bottom;

// // Zoom attribute, which sets the [min, max] zoom and calls zoomed
// const zoomAttr = zoom()
//     .scaleExtent([0.1,80])
//     .on("zoom", zoomed);

// // Transforms the graph group on drag/double click
// function zoomed({ transform }) {
//     select("#graph").attr("transform", transform);
//     }

/**Main function */
function interaction(stats) {

    let links = selectAll("line");
    let paths = selectAll("path");
    let svg1 = select("#node-edge");
    let svg2 = select("#chord");

    selectAll("circle")
    .on("click", (event, d) => {
        highlight(d, links, paths);
        toggle(d, "none", "block", stats);
        position(event, d, svg1, zoomAttr);
    })

    svg1.on("click", () => reset(links, paths, svg1, zoomAttr));
    svg2.on("click", () => reset(links, paths, svg1, zoomAttr));
};

/** Highlights links of selected node, 
 * either red or green based of if the email was sent 
 * or received respectively. 
 */
function highlight(d, links, paths) {

    links
        .style("stroke", datum => {
            let sourceId = datum.source.id;
            let targetId = datum.target.id;
            return sourceId === d.id ? "red"
                : targetId === d.id ? "green"
                : "";
        });

    paths
        .style('stroke', link_d => { 
            return link_d.source === d.id || link_d.target === d.id ? '#69b3b2' : '#b8b8b8';
        })
        .style('stroke-width', link_d => { 
            return link_d.source === d.id || link_d.target === d.id ? 4 : 1;
        });
};

/** Toggle function */
function toggle(d = null, introDisplay = "block", desDisplay = "none", stats) {

    if (d) {
        document.getElementById("nodeName").innerHTML = "Name: " + d.name;
        document.getElementById("nodeTitle").innerHTML = "Job title: " + d.job.name;
        document.getElementById("nodeUserID").innerHTML = "User ID: " + d.id;
        document.getElementById("nodeEmailsSent").innerHTML = "Number of Emails sent: " + stats[d.id];
        document.getElementById("nodeEmailAddress").innerHTML = "Email: " + d.email;
        document.getElementById("nodeMeanSentiment").innerHTML = "Average sentiment: " + d.sentiment;
    } else {
        document.getElementById("nodeName").innerHTML = "Name: ";
        document.getElementById("nodeTitle").innerHTML = "Job title: ";
        document.getElementById("nodeUserID").innerHTML = "User ID: ";
        document.getElementById("nodeEmailsSent").innerHTML = "Number of Emails sent: ";
        document.getElementById("nodeEmailAddress").innerHTML = "Email: ";
        document.getElementById("nodeMeanSentiment").innerHTML = "Average sentiment: ";
    }

    let intro = document.getElementById("toolIntro");
    let description = document.getElementById("nodeDescription");
    intro.style.display = introDisplay;
    description.style.display = desDisplay;
};

/** Positions node-edge graph's selected node to
 *  the center of the graph.
 */
function position(event, d, svg, zoomAttr) {

    let goodCricle = svg.selectAll("circle").filter((datum) => {
        return datum.id === d.id;
    })

    const {x, y} = goodCricle.datum();
    event.stopPropagation();
    svg.transition().duration(750).call(
      zoomAttr.transform,
      zoomIdentity
        .translate(width / 2, height / 2)
        .scale(2)
        .translate(-x, -y),
      pointer(event, svg.node())
    )
};

// Resets viewbox to starting point
function reset(links, paths, svg, zoomAttr) {

    toggle()
    // Return svg to starting position
    svg.transition().duration(750).call(
        zoomAttr.transform,
        zoomIdentity,
        zoomTransform(svg.node()).invert([width / 2, height / 2])
    );
    // Set link color to default
    links.style("stroke", "#aaa");
    paths.style("stroke", "#aaa");
}


export { interaction };