import React from 'react';
import { NodeGraph } from '../NodeGraph';

const Visualizations = ({ data }) => {
    return (
        <div>
            <h1>Node-edge graph of email network</h1>
            <NodeGraph data={data}/>
        </div>
    )
}

export default Visualizations;
