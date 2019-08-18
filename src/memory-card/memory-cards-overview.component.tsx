import React from 'react';
import './memory-cards-overview.component.scss';
import MemoryCardsRotatorComponent from './memory-cards-rotator.component';

class MemoryCardsOverview extends React.Component {

    render () {
        const cards = [
            { id: 1, term: "One", description: "this is desc \n for the first card"},
            { id: 2, term: "Two", description: "this is desc \n for the second card"},
            { id: 3, term: "Three", description: "this is desc \n for the third card"}
        ];
        return <div className="memory-cards-overview" ><MemoryCardsRotatorComponent cards={cards}/></div>
    }
}

export default MemoryCardsOverview;