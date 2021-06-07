import React from 'react';
import { Graph } from '../Graph';

const Visualizations2 = ({ data }) => {
    return (
        <div>
            <h1>Chord graph of email network</h1>
            <Graph data={data} type={2}/>
        </div>
    )
}

export default Visualizations2;
