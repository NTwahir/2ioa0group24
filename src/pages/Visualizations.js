import React from 'react';
import { Graph } from '../Graph'

const Visualizations = ({ data }) => {
    return (
        <div>
            <h1>Bar Chart of E-mails sent per user</h1>
            <Graph data={data} />
        </div>
    )
}

export default Visualizations;
