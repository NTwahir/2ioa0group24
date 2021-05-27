import { nest } from 'd3-collection';
import { ascending } from 'd3';
import _ from 'lodash';

const DataProcess = (data) => {
    
    // Filtering out e-mails sent to non existant users
    data = data.filter(v => 
        v.toId !== '136' &&
        v.toId !== '78')
    
    // links: (source, target, thickness)
    // Thickness = count # toId's per fromId

    // something with sentiment
        // TODO

    // average sentiment per email sent
    // let groupById = data.filter(v => v.fromId === String(96) && v.messageType === "TO");
    // let averageSentiment = sum(groupById, v => v.sentiment) / groupById.length;

    // 10 most negative sent messages
        // TODO

    // Group by message sent per user
    let uniqueNodes = nest().key(d => d.fromId).sortKeys(ascending).entries(data);

    // Processs the dataset into nodes and links
    let nodes = [];
    let links = [];
    let linkInfo = [];


    // Assigning colors to job titles
    let jobs = [];
    let colors = [
        "#003f5c",
        "#2f4b7c",
        "#665191",
        "#a05195",
        "#d45087",
        "#f95d6a",
        "#ff7c43",
        "#ffa600",
        "#488f31",
        "#de425b",
        "#69b3a2"
    ];
    let uniqJob = _.uniqBy(uniqueNodes, e => e.values[0].fromJobtitle);
    uniqJob.forEach(v => jobs.push(v.values[0].fromJobtitle));
    let jobColor = _.zipObject(jobs, colors);

    uniqueNodes.forEach(n => {
        // Creating the nodes and links object
        let jobName = n.values[0].fromJobtitle;
        let userName = [];

        // Creating Array of usernames
        let userEmail = n.values[0].fromEmail;
        let arr = userEmail.substring(0, userEmail.lastIndexOf("@"));
        arr = arr.split(".").filter(el => el !== "");
        userName.push(arr);

        // Adding capital letters to each first and surname.
        userName.forEach(subArray => {
            subArray.forEach((el, i) => {
                subArray[i] = (el.charAt(0).toUpperCase() + el.substring(1));
            })
            userName = subArray.join(" ");
        })
        
        nodes.push({
            "id": n.key, 
            "name": userName,
            "email": userEmail,
            "job": {
                "name": jobName, 
                "color": jobColor[jobName]
            }
        });

        linkInfo.push({
            "id": n.key, 
            "job": jobName, 
            "thickness": n.values.length
        });

        n.values.forEach(v => {

            let hasVal = _.some(links, ['target', v.toId])          // Prevent duplicate links between nodes
            if(!hasVal) {
                links.push({
                    "source": v.fromId, 
                    "target": v.toId
                });
            }
        });
    })


    let processedData = {"nodes": nodes, "links": links, "jobs": jobs};
    // TODO: get the count of msgs and append to links.thickness

    // Console debug
    console.log({uniqueNodes, processedData, data, linkInfo});


    return processedData;
}

export default DataProcess;