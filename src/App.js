import React, { useEffect, useState } from 'react';
import { csv } from 'd3';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Visualizations2 from './pages/Visualizations2';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

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
      <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Visualizations" render={() => (
                <Visualizations2 data={data} />)}/>
          </Switch>
      </Router>
      <Footer/>
    </div>
  )
}

export default App;
