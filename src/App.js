import React, { useState } from 'react'
import NodeGraph from './NodeGraph'
import { csv } from 'd3'

const url = 'https://raw.githubusercontent.com/NTwahir/2ioa0group24/master/data/enron-v1.csv'

function App() {
  const [data, setData] = useState(["placeholder data"])
  
  csv(url).then(data => {
    console.log(data);
    setData(data);
  });
  
  return (
    <>
    <div>{data}</div>
    <NodeGraph />
    </>
  )
}

export default App;
