import React from 'react';
import { scaleBand, scaleLinear, select, axisBottom, axisLeft, max } from 'd3';
import { nest } from 'd3-collection';

export var node = document.createElement('div');

export function NodeGraph({ data }) {

    
    // Group by fromEmail and count
    var numberSent = nest()
        .key(d => d.fromEmail)
        .rollup(v => v.length)
        .entries(data);

    // set the dimensions and margins of the graph
    const 
    margin = {top: 30, right: 30, bottom: 150, left: 60},
    width = 1920,
    height = 1080,
    innerWidth = width - margin.left - margin.right,
    innerHeight = height - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = select(node)
    .append("svg")
    .attr("width", innerWidth + margin.left + margin.right)
    .attr("height", innerHeight + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    // X axis
    var x = scaleBand()
    .range([ 0, innerWidth ])
    .domain(numberSent.map(function(d) { return d.key; }))
    .padding(0.2);

    svg.append("g")
    .attr("transform", "translate(0," + innerHeight + ")")
    .call(axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Add Y axis
    var y = scaleLinear()
    .domain([0, max(numberSent, n => n.value)])
    .range([ innerHeight, 0]);
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
    .attr("height", function(d) { return innerHeight - y(d.value); })
    .attr("fill", "#69b3a2")


    // Console debugging
    const debug = () => {
        var max_val = max(numberSent, n => n.value);
        console.log({numberSent, max_val, data});
    }

    debug()
    return (
        <>
            <svg width={width} height={height}>
                <g transform={`translate(${margin.left}, ${margin.top})`}>
                    <g
                       transform={`translate(0, ${innerHeight})`}
                       textAnchor="end"
                    >{axisBottom(x)}</g>
                    <g></g>
                    {numberSent.map(d => (
                        <rect 
                            key={d.key}
                            x={x(d.key)} 
                            y={y(d.value)} 
                            width={x.bandwidth()} 
                            height={innerHeight - y(d.value)}
                            fill="#69b3a2"
                        />
                    ))}
                </g>
            </svg>
        </>
    )
}
