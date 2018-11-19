import React, { Component } from 'react';
import './portfolioDetails.css'

export default class PortfolioDetails extends Component {
    render() {
        return (
            <div className="portfolio-details">
                <h3 className="portfolio-title">{this.props.item.name}</h3>
                <div className="portfolio-image" style={ {backgroundImage: `url(images/${this.props.item.image})`} }/>
                <div >Engine: {this.props.item.engine}</div>
                <div>Year: {this.props.item.year}</div>
            </div>
        )
    }
}