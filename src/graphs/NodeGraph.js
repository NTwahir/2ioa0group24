import { extent, scaleLinear, select, axisBottom, axisLeft, line, scaleBand } from 'd3';
import DataProcess from '../DataProcess';
import CSS from '../CSS/NodeLink.module.css';
// import { nest } from 'd3-collection';

// Destructure css styles
const { SvgThree } = CSS;
// Set the dimensions and margins of the graph
const 
margin = {top: 10, right: 30, bottom: 90, left: 40},
width = 460 - margin.left - margin.right,
height = 450 - margin.top - margin.bottom;

const NodeGraph = (container, data) => {

    data = DataProcess(data);
    const { uniqueNodes } = data;    


    // Array.from(uniqueNodes[0]).forEach(n => {
    //     n.values().forEach(e => {
    //             ar.push(e.date.values());
    //         });
    //     });

    // ar.forEach(id => {
    //     id.values.forEach(date => {
    //         date.value.forEach(e => {
    //             ar.push(e.sentiment);
    //         });
    //     });
    // });

    let ar = uniqueNodes[0];
    let dates = [];
    let sentiments = []

    ar.values.forEach(function(d) { 
        dates.push(d.date)
        sentiments.push(d.sentiment) })

    dates.forEach(function(d) {
        return new Date(d.date)
    })
    console.log(dates, sentiments, ar)

    var svg = select(container)
    .append("svg")
    .attr("class", SvgThree)
    .attr("viewBox", [0, 0, width, height])

    // X axis
    var x = scaleBand()
    .domain(extent(dates))
    .range([ 0, width ])
    .padding(0.2);

    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Add Y axis
    var y = scaleLinear()
    .domain([ -1, 1 ])
    .range([ height, 0 ]);
    svg.append("g")
    .call(axisLeft(y));

    // Add line
    svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#69b3a2")
    .attr("stroke-width", 1.5)
    .attr("d", line()
      .x(function(d) { return x(d.date) })
      .y(function(d) { return y(d.value) })
      )
  // Add the points
    svg
    .append("g")
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function(d) { return x(d.date) } )
      .attr("cy", function(d) { return y(d.sentiment) } )
      .attr("r", 5)
      .attr("fill", "#69b3a2")

    // Animation
    svg.selectAll("rect")
    .transition()
    .duration(800)
    .attr("y", d => y(d.sentiment))
    .attr("height", d => height - y(d.sentiment))
    .delay((d,i) => {console.log(i); return i*100})

}

export default NodeGraph;