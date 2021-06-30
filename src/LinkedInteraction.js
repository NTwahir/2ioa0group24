// Imported values
import { selectAll } from 'd3';


function interaction() {

    let links = selectAll("line");
    let paths = selectAll("path");
    selectAll("circle")
    .on("click", (event, d) => {
        highlight(d, links, paths);
    })

}

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
        })
    paths
        .style('stroke', link_d => { 
            return link_d.source === d.id || link_d.target === d.id ? '#69b3b2' : '#b8b8b8';})
        .style('stroke-width', link_d => { 
            return link_d.source === d.id || link_d.target === d.id ? 4 : 1;});
};

export { interaction };