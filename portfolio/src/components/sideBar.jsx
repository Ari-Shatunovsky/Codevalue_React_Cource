import React, { Component } from 'react';
import Menu from './menu.jsx';
import SocialMenu from './socialMenu.jsx';
import './sideBar.css';

export default class MainContent extends Component {

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-logo">
                    <h2>Sons Of Steel</h2>
                    <h3>custom motorcycles workshop</h3>
                </div>
                <Menu />
                <SocialMenu/>
            </div>
        )
    }
}