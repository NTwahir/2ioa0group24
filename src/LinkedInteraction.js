// Imported values
import { selectAll } from 'd3';

/**Main function */
function interaction() {

    let links = selectAll("line");
    let paths = selectAll("path");
    selectAll("circle")
    .on("click", (event, d) => {
        highlight(d, links, paths);
        toggle(d, "none", "block");
    })
};

/** Highlights links of selected node, 
 * either red or green based of if the email was sent 
 * or received respectively. 
 */
function highlight(d, links, paths) {

    console.log({ d, links, paths });
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
function toggle(d = null, introDisplay = "block", desDisplay = "none") {

    if (d) {
        document.getElementById("nodeName").innerHTML = "Name: " + d.name;
        document.getElementById("nodeTitle").innerHTML = "Job title: " + d.job.name;
        document.getElementById("nodeUserID").innerHTML = "User ID: " + d.id;
        document.getElementById("nodeEmailsSent").innerHTML = "Number of Emails sent: " + "";//stats[d.id];
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

function position() {
    
};

export { interaction };