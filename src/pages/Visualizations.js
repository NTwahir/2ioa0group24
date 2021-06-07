import React from 'react';
import { Graph } from '../Graph';

const Visualizations = ({ data }) => {
    return (
        <div>
            <h1>Node-edge graph of email network</h1>
            <Graph data={data} type={1} />
        </div>
    )
}

export default Visualizations;
