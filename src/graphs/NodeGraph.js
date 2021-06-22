import { scaleBand, scaleLinear, select, axisBottom, axisLeft, max } from 'd3';
import DataProcess from '../DataProcess';
import CSS from '../CSS/NodeLink.module.css';

// Destructure css styles
const { tooltip, legend, SvgThree } = CSS;
// Set the dimensions and margins of the graph
const 
{ screen } = window,
margin = {top: 10, right: 30, bottom: 90, left: 40},
    width = 460 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

const NodeGraph = (container, data) => {

    data = DataProcess(data);

    var sentimentPerDay = data;
    let ar = [];

    Array.from(sentimentPerDay).forEach(id => {
        id.values.forEach(e => {
                ar.push(e.date.value);
            });
        });

    console.log(ar)

    var svg = select(container)
    .append("svg")
    .attr("class", SvgThree)
    .attr("viewBox", [0, 0, width, height])

    // X axis
    var x = scaleBand()
    .range([ -1, 1 ])
    .domain(ar)
    .padding(0.2);

    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Add Y axis
    var y = scaleLinear()
    .domain(ar)
    .range([ -1, 1 ]);
    svg.append("g")
    .call(axisLeft(y));

    // Bars
    svg.selectAll("mybar")
    .data(sentimentPerDay)
    .exit()
    .remove()

    svg.selectAll("mybar")
    .data(sentimentPerDay)
    .enter()
    .append("rect")
    .attr("x", function(d) { return x(d.key); })
    .attr("y", function(d) { return y(d.value); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.value); })
    .attr("fill", "#69b3a2")

    // Animation
    svg.selectAll("rect")
    .transition()
    .duration(800)
    .attr("y", d => y(d.value))
    .attr("height", d => height - y(d.value))
    .delay((d,i) => {console.log(i); return i*100})

}

export default NodeGraph;