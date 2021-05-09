import React from 'react';
import NodeGraph from '../NodeGraph';
import { Graph } from '../Graph'

const Visualizations = ({ data }) => {
    return (
        <div>
            <h1>Bar Chart of E-mails sent per user</h1>
            {/* <NodeGraph container={containerRef} data={data}/> */}
            <Graph data={data} />
        </div>
    )
}

export default Visualizations;
