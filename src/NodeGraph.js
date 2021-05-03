import { scaleBand, scaleLinear, select, axisBottom, axisLeft, max, selectAll, selection } from 'd3';
import * as d3 from'd3';
import { nest } from 'd3-collection';
import React from 'react';

export default function NodeGraph({ data }) {
    
    // Group by fromEmail and count
    var numberSent = nest()
        .key(d => d.fromEmail)
        .rollup(v => v.length)
        .entries(data);

    // set the dimensions and margins of the graph
    var margin = {top: 30, right: 30, bottom: 151, left: 60},
    width = 1920 - margin.left - margin.right,
    height = 1080 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = select("#root")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    // X axis
    var x = scaleBand()
    .range([ 0, width ])
    .domain(numberSent.map(function(d) { return d.key; }))
    .padding(0.2);
    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Add Y axis
    var y = scaleLinear()
    .domain([0, max(numberSent, n => n.value)])
    .range([ height, 0]);
    svg.append("g")
    .call(axisLeft(y));

    // Bars
    svg.selectAll("mybar")
    .data(numberSent)
    .exit()
    .remove()

    svg.selectAll("mybar")
    .data(numberSent)
    .enter()
    .append("rect")
    .attr("x", function(d) { return x(d.key); })
    .attr("y", function(d) { return y(d.value); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.value); })
    .attr("fill", "#69b3a2")


    // Console debugging
    const debug = () => {
        var max_val = max(numberSent, n => n.value);
        console.log({numberSent, max_val, data});
    }

    // Event listener
    svg.select("#options")
    .on("change", console.log("he"))

    const { columns } = data;
   
    return (debug(),
        <>
            <br></br>
            <select id="options">
                <option value={columns[0]}>{columns[0]}</option>
                <option value={columns[1]}>{columns[1]}</option>
                <option value={columns[2]}>{columns[2]}</option>
            </select>
        </>
    )
}
