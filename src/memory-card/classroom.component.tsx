import React from 'react';
import { MemoryCard } from '../models/memory-card';
import MemoryCardComponent from './memory-card.component';
import './classroom.component.scss'
import TermCardComponent from './term-card.component';

class ClassroomComponent extends React.Component<ClassRoomProps, ClassRoomState> {

    constructor(props: ClassRoomProps) {
        super(props);

        this.state = { currentCardIndex: 0, isCardFlipped: true, answer: '' };
    }

    render() {
        const cards = this.props.cards;
        const currentCardIndex = this.state.currentCardIndex;
        if (currentCardIndex >= cards.length) {
            return  <div className="classroom">
                        <p>Done!</p>
                    </div>
        }
        return  <div className="classroom">
                    <TermCardComponent  key={currentCardIndex}
                                        card={cards[currentCardIndex]}
                                        onSubmittedAnswer={this.goToNextCard}
                    />
                </div>
    }

    goToNextCard = () => {
        this.setState({currentCardIndex: this.state.currentCardIndex+1});
    }

}

interface ClassRoomProps {
    cards: MemoryCard[];
}

interface ClassRoomState {
    currentCardIndex: number;
    isCardFlipped: boolean;
    answer: string;
}

export default ClassroomComponent;