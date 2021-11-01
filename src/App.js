import React from 'react'
import './App.css';
import Homepage from './Homepage';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/product_detail/:productId" component={ProductDetails}/>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
