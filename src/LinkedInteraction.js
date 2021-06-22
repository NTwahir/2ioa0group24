// Imported values
import { selectAll } from 'd3';


function interaction() {

    selectAll("circle")
    .on("click", (event, d) => {
        console.log({event, d});
    })
}


// function resetAll() {
//     svg1.on("click", reset(link1), reset(link2));
//     svg2.on("click", reset(link1), reset(link2));
// }

// /** Resets viewbox to starting point
//  */
// function reset(link) {
//     // Set link color to default
//     link.style("stroke", "#aaa")
//         .style("stroke-width", 1);
// }

/** Highlights links of selected node, 
 * either red or green based of if the email was sent 
 * or received respectively. 
 */
// function highlight(d) {
//     let allLinks = selectAll("line");
//     console.log({d});
//     allLinks
//         .style("stroke", datum => {
//             let sourceId = datum.source.id;
//             let targetId = datum.target.id;
//             return sourceId === d.id ? "red"
//                 : targetId === d.id ? "green"
//                 : "";
//         })
//     // link2
//     //     .style('stroke', link_d => { 
//     //         return link_d.source === d.id || link_d.target === d.id ? '#69b3b2' : '#b8b8b8';})
//     //     .style('stroke-width', link_d => { 
//     //         return link_d.source === d.id || link_d.target === d.id ? 4 : 1;});
// };

export { interaction };