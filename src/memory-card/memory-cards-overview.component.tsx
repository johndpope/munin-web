import React from 'react';
import MemoryCardComponent from './memory-card.component';
import './memory-cards-overview.component.scss';

class MemoryCardsOverview extends React.Component {

    render () {
        const lol = { term: "lol", description: "this is desc"};
        return <MemoryCardComponent card={lol}/>
    }
}

export default MemoryCardsOverview;