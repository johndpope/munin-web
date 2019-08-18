import React from 'react';
import MemoryCardComponent from './memory-card.component';
import './memory-cards-overview.component.scss';

class MemoryCardsOverview extends React.Component {

    render () {
        const lol = { id: 1, term: "lol\nneste linje", description: "this is desc \n lol da"};
        return <div className="memory-cards-overview" ><MemoryCardComponent card={lol}/></div>
    }
}

export default MemoryCardsOverview;