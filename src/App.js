import React, { useEffect, useState } from 'react';
import { NodeGraph } from './NodeGraph';
import { csv } from 'd3';

const url = 'https://raw.githubusercontent.com/NTwahir/2ioa0group24/master/data/enron-v1.csv'

function App() {
  const [data, setData] = useState(null)
  
  // Determines how often the dataset gets requested.
  useEffect(() => {
    // Load the csv dataset
    csv(url).then(setData);
  }, []);

  if(!data) return <div>Loading... </div>;

  return (
    <div className="App">
      <h1>Bar Chart of E-mails sent per user</h1>
      <NodeGraph data={data}/>
    </div>
  )
}

export default App;
