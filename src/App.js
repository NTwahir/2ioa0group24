import React, { useEffect, useState } from 'react';
import { csv } from 'd3';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Visualizations from './pages/Visualizations';
import Visualizations2 from './pages/Visualizations2';
import NavBar from './NavBar';
import Footer from './Footer';

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
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/visualizations" render={() => (
        <Visualizations data={data} />)}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/Visualizations2" render={() => (
        <Visualizations2 data={data} />)}/>
      <Footer/>
    </div>
  )
}

export default App;
