import React, { useEffect, useState } from 'react';
import { csv } from 'd3';
import Home from './pages/Home';
import About from './pages/About';
import Visualizations from './pages/Visualizations';

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
      <Home/>
      <Visualizations data={data}/>
      <About/>
    </div>
  )
}

export default App;
