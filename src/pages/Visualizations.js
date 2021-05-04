import React from 'react';
import NodeGraph from '../NodeGraph';

const Visualizations = ({ data }) => {
    return (
        <div>
            <h1>Bar Chart of E-mails sent per user</h1>
            <NodeGraph data={data}/>
        </div>
    )
}

export default Visualizations;
