import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './pages/home/home';
import About from './pages/about/about';
import './App.css';
import SideMenu from './pages/side-menu/side-menu';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Products from './components/products/products';
import Contact from './pages/contact/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <SideMenu></SideMenu>
            <Switch>
              <Route exact component={Home} path="/"></Route>
              <Route component={About} path="/about"></Route>
              <Route component={Products} path="/products"></Route>
              <Route component={Contact} path="/contact"></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
