import React from 'react';
import { nest } from 'd3-collection';
import { ascending, sum } from 'd3';

const DataProcess = (data) => {

    // Parse the data if needed


    // something with sentiment
    // average sentiment per email sent
    // 10 most negative sent messages

    // Group by message sent per user
    let groupById = data.filter(v => v.fromId === String(96) && v.messageType === "TO");
    let averageSentiment = sum(groupById, v => v.sentiment) / groupById.length;
    let uniqueNodes = nest().key(d => d.fromId).sortKeys(ascending).entries(data);
    let nodes = [];
    let links = [];

    let id = 1;
    uniqueNodes.forEach(n => {
        nodes.push({"name": n.key});
        n.values.forEach(v => {
            links.push({"source": v.fromId, "target": "10"});
        });
    })
    let processedData = {"nodes": nodes, "links": links}

    // Console debug
    console.log(processedData);
    console.log(uniqueNodes);

    return [uniqueNodes, processedData];
}

export default DataProcess;
