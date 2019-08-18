import React from 'react';
import { MemoryCard } from '../models/memory-card';
import MemoryCardComponent from './memory-card.component';
import './memory-cards-rotator.component.scss'

class MemoryCardsRotatorComponent extends React.Component<MemoryCardRotatorProps, MemoryCardRotatorState> {

    constructor(props: MemoryCardRotatorProps) {
        super(props);

        this.state = { currentCardIndex: 0, isCardFlipped: false };
    }

    cardClickedHandler = () => {
        if (this.state.isCardFlipped) {
            this.setState({isCardFlipped: false, currentCardIndex: this.state.currentCardIndex+1})
        }
        else {
            this.setState({isCardFlipped: true})
        }
    }

    render() {
        const cards = this.props.cards;
        const currentCardIndex = this.state.currentCardIndex;
        if (currentCardIndex >= cards.length) {
            return  <div className="memory-cards-rotator">
                        <p>Done!</p>
                    </div>
        }
        return  <div className="memory-cards-rotator">
                    <MemoryCardComponent onCardClicked={this.cardClickedHandler} card={cards[currentCardIndex]}/>
                </div>
    }

}

interface MemoryCardRotatorProps {
    cards: MemoryCard[];
}

interface MemoryCardRotatorState {
    currentCardIndex: number;
    isCardFlipped: boolean;
}

export default MemoryCardsRotatorComponent;