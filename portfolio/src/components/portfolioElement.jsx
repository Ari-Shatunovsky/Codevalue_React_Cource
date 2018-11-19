import React, { Component } from 'react';
import './portfolioElement.css'

export default class PortfolioElement extends Component {
    render() {
        return (
            <div className="portfolio-element">
                <h3 className="portfolio-title">{this.props.item.name}</h3>
                <div className="portfolio-image" style={ {backgroundImage: `url(images/${this.props.item.image})`} }/>
            </div>
        )
    }
}