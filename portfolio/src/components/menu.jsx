import React, { Component } from 'react';
import './menu.css';

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="menu-item">Home</div>
                <div className="menu-item">Our motorcycles</div>
                <div className="menu-item">Jobs</div>
                <div className="menu-item">Contacts</div>
            </div>
        )
    }
}