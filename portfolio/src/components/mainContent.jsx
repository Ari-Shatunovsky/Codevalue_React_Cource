import portfolio from './../data/portfolio.json';
import PortfolioElement from './portfolioElement.jsx';
import PortfolioDetails from './portfolioDetails.jsx';
import React, { Component } from 'react';
import './mainContent.css'

export default class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null
        }
    }

    handleClick(e, item) {
        e.stopPropagation();
        // console.log(item.id);
        this.setState((prevState, curProps) => ({
            selectedItem: item,
        }));
    }

    render() {
        let innerElement;

        if (!this.state.selectedItem) {
            innerElement = portfolio.items.map(p => {
                return <div onClick={((e) => this.handleClick(e, p))} key={`portfolioItem${p.id}`}>
                    <PortfolioElement item={p} />
                </div>

            });
        } else {
            innerElement =
                <div>
                    <span className="back-button" onClick={((e) => this.handleClick(e, null))} >Back</span>
                    <PortfolioDetails item={this.state.selectedItem} />
                </div>
        }

        return (
            <div className="main-content">
                {
                    innerElement
                }
            </div>
        )
    }
}