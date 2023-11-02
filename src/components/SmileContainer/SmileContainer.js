import React from 'react';

import SmileList from "../SmileList/SmileList";

import './smile-container.css';

class SmileContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smiles: [
                {
                    smile: '😂',
                    amountVotes: 0,
                },
                {
                    smile: '🥰',
                    amountVotes: 0,
                },
                {
                    smile: '😭',
                    amountVotes: 0,
                },
                {
                    smile: '🤨',
                    amountVotes: 0,
                },
                {
                    smile: '😴',
                    amountVotes: 0,
                },
            ],
            winningSmile: null,
        }
    }

    castVote = (index) => {
        const updatedSmiles = this.state.smiles.map((smile, i) => {
            if (i === index) {
                return { ...smile, amountVotes: smile.amountVotes + 1 };
            }
            return smile;
        });

        this.setState({ smiles: updatedSmiles });
    }

    showResults = () => {
        const winningSmile = this.state.smiles.reduce((prev, current) => (prev.amountVotes > current.amountVotes) ? prev : current);
        this.setState({ winningSmile });
    }

    render() {
        return (
            <div className='smile-container'>
                <SmileList
                    smiles = {this.state.smiles}
                    castVote={this.castVote}
                />
                <button className='show-result-btn' onClick={this.showResults}>Show Results</button>
                {
                    this.state.winningSmile && (
                        <div className='winning-smile'>Winning Smile: {this.state.winningSmile.smile}</div>
                    )
                }
            </div>
        );
    }
}

export default SmileContainer;