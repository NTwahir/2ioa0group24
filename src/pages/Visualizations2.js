import React from 'react';
import { Graph } from '../Graph';
import CSS from '../CSS/NodeLink.module.css';

const { gridContainer, titles, node, chord, info, bar } = CSS;

const Visualizations2 = ({ data }) => {
    return (
        <div className={gridContainer}>
            <h1 id="one" className={`${titles} ${node}`}>Node-edge graph of email network</h1>
            <Graph data={data} type={1} />
            <div className={info} id="nodeDescription">
                <h1>Node Information:</h1>
                <p id="nodeName">Name: </p>
                <p id="nodeTitle">Job title: </p>
                <p id="nodeUserID">User ID: </p>
                <p id="nodeEmailsSent">Number of Emails sent: </p>
                <p id="nodeEmailAddress">Email: </p>
                <p id="nodeMeanSentiment">Average sentiment: </p>
                {/* <div className={bar}>
                    <Graph data={data} type={3}/>
                </div> */}
            </div>
            <h1 id="two" className={`${titles} ${chord}`}>Chord graph of email network</h1>
            <Graph data={data} type={2}/>
        </div>
    )
}

export default Visualizations2;
