import React from 'react';
import { Graph } from '../Graph';
import { Link } from 'react-router-dom';
import CSS from '../CSS/NodeLink.module.css';

const { gridContainer, titles, node, chord, info, vis1, vis2, SvgThree, introduction, important } = CSS;

const Visualizations2 = ({ data }) => {
    return (
        <div className={gridContainer}>
            <h1 id="one" className={`${titles} ${node}`}>Node-edge graph of email network</h1>
            <div className={vis1}>
                <Graph data={data} type={1} />
            </div>
            <div className={introduction} id="toolIntro" style={{display: "block"}}>
                <h1>Welcome to CSVIZ!</h1>
                <p>This interactive visualisation tool provides you with two visualisations of dynamic network data.</p>
                <p>The dataset comes from Enron, which, if you're interested, is covered in more depth in our <Link to="/" > homepage.</Link></p>
                <p>With this tool, you can: </p>
                    <ul>
                        <li><span className={important}>Drag</span>: Simply click and drag to move the graph around.</li>
                        <li><span className={important}>Double click or scroll</span>: Double clicking or scrolling will zoom in on the graph. Clicking again will reset it to its original position.</li>
                        <li><span className={important}>Node click</span>: Click on a node to zoom into the node, and display some information about the user the node represents, 
                            as well as a bar graph that contains the user's average email sentiment value per day.<br />
                            Additionally, on the node diagram to your left, clicking on a node will also highlight incoming and outgoing edges, 
                            and hide all other edges not connected to the node, allowing you to see who this user has emailed, and who has emailed this user.<br />
                            Red edges represent emails the user sent, while green edges represent emails the user received. </li>
                        <li><span className={important}>Hover</span>: If you hover over a node, the same summary will be displayed in a small tooltip.<br />
                            Additionally, on the chord diagram to your right, hovering on a node will also highlight all edges the user has 
                            with other users, representing the users who they have emailed.</li>
                    </ul>
                <p>We hope you enjoy using this tool!</p>
            </div>
            <div className={info} id="nodeDescription" style={{display: "none"}}>
                <h1>Node Information:</h1>
                <p id="nodeName">Name: </p>
                <p id="nodeTitle">Job title: </p>
                <p id="nodeUserID">User ID: </p>
                <p id="nodeEmailsSent">Number of Emails sent: </p>
                <p id="nodeEmailAddress">Email: </p>
                <p id="nodeMeanSentiment">Average sentiment: </p>
                {/* <div className={SvgThree}>
                    <Graph data={data} type={3}/>
                </div> */}
            </div>
            <h1 id="two" className={`${titles} ${chord}`}>Chord graph of email network</h1>
            <div className={vis2}>
                <Graph data={data} type={2}/>
            </div>
        </div>
    )
}

export default Visualizations2;
