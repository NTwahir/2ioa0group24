import { nest } from 'd3-collection';
import { ascending, sum } from 'd3';

const DataProcess = (data) => {

    // Filtering out e-mails sent to non existant users
    data = data.filter(v => 
        v.toId !== '136' &&
        v.toId !== '78')


    // something with sentiment
        // TODO

    // average sentiment per email sent
    let groupById = data.filter(v => v.fromId === String(96) && v.messageType === "TO");
    let averageSentiment = sum(groupById, v => v.sentiment) / groupById.length;

    // 10 most negative sent messages
        // TODO

    // Group by message sent per user
    let uniqueNodes = nest().key(d => d.fromId).sortKeys(ascending).entries(data);

    // Processs the dataset into nodes and links
    let nodes = [];
    let links = [];

    uniqueNodes.forEach(n => {
        nodes.push({"name": n.key});
        n.values.forEach(v => {
            links.push({"source": v.fromId, "target": v.toId});
        });
    })
    
    let processedData = {"nodes": nodes, "links": links};

    // Console debug
    console.log({uniqueNodes, processedData});

    return processedData;
}

export default DataProcess;
