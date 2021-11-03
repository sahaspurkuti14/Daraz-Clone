import React from 'react'
import './App.css';
import Homepage from './Homepage';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Footer from './Footer';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/product_detail/:productId" component={ProductDetails}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/login" component={Login}/>
        <Route path="/Register" component={Register}/>
      </Switch>
      <Footer/>
    </div>
    </Router>

  );
}

export default App;
