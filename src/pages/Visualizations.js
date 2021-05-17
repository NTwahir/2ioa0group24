import React from 'react';
import { Graph } from '../Graph'

const Visualizations = ({ data }) => {
    return (
        <div>
            <h1>Node-edge graph of email network</h1>
            <Graph data={data} />
        </div>
    )
}

export default Visualizations;
