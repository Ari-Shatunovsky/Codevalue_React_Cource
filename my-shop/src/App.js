import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './components/home';
import About from './components/about';
import './App.css';
import SideMenu from './components/side-menu';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Products  from './components/products';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideMenu></SideMenu>
        <Router>
          <Switch>
            <Route component={Home} path="/"></Route>
            <Route component={About} path="/about"></Route>
            <Route component={Products} path="/products"></Route>
            <Route component={Contact} path="/contact"></Route>
            <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="products">Products</Link>
                <Link to="contact">Contact</Link>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
