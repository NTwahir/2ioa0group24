import React from 'react';
import ChordGraph from '../ChordGraph';

const Visualizations2 = ({ data }) => {
    return (
        <div>
            <h1>Chord graph of email network</h1>
            <ChordGraph data={data} />
        </div>
    )
}

export default Visualizations2;
