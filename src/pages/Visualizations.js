import React from 'react';
import { NodeGraph } from '../NodeGraph';
import NodeLink from '../NodeLink';

const Visualizations = ({ data }) => {
    return (
        <div>
            <h1>Bar Chart of E-mails sent per user</h1>
            {/* <NodeGraph data={data}/> */}
            <NodeLink data={data}/>
        </div>
    )
}

export default Visualizations;
