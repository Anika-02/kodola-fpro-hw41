import React from 'react';

import './smile-list.css';
class SmileList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {smiles, castVote} = this.props;

        return (
            <div className='list-container'>
                {
                    smiles.map((item, index) => (
                        <div className='smile-element' key={index}>
                            <span onClick={() => castVote(index)}> {item.smile} </span>
                            <span> {item.amountVotes} </span>
                        </div>
                    ))}
            </div>
        );
    }
}

export default SmileList;