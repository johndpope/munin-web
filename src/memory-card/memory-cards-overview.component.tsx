import React from 'react';
import MemoryCardComponent from './memory-card.component';
import './memory-cards-overview.component.scss';

class MemoryCardsOverview extends React.Component {

    render () {
        const lol = { term: "lol\nneste linje", description: "this is desc \n lol da"};
        return <MemoryCardComponent card={lol}/>
    }
}

export default MemoryCardsOverview;