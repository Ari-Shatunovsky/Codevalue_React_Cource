import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class SideMenu extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
            </div>
        );
    }
}