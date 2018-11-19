import React, { Component } from 'react';
import './socialMenu.css'

export default class SocialMenu extends Component {
    render() {
        return (
            <div className="social-menu">
                <a href="https://facebook.com">
                    <img src="images/social/facebook.png"/>
                </a>
                <a href="https://instagram.com">
                    <img src="images/social/instagram.png"/>
                </a>
                <a href="https://twitter.com">
                    <img src="images/social/twitter.png"/>
                </a>
                <a href="https://youtube.com">
                    <img src="images/social/youtube.png"/>
                </a>
                <a href="https://tumblr.com">
                    <img src="images/social/tumblr.png"/>
                </a>
            </div>
        )
    }
}