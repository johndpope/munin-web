import React from 'react';
import { MemoryCard } from '../models/memory-card';
import MemoryCardComponent from './memory-card.component';
import './classroom.component.scss'

class ClassroomComponent extends React.Component<ClassRoomProps, ClassRoomState> {

    constructor(props: ClassRoomProps) {
        super(props);

        this.state = { currentCardIndex: 0, isCardFlipped: true, answer: '' };
    }

    handleSubmit = (event: any) => {
        console.log("Submit!");
        this.setState({isCardFlipped: !this.state.isCardFlipped})
        console.log('Is correct', this.state.answer === this.props.cards[this.state.currentCardIndex].term);
        event.preventDefault();
    }

    handleChange = (event: any) => {
        this.setState({answer: event.target.value})
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
                    <MemoryCardComponent card={cards[currentCardIndex]} isFlipped={this.state.isCardFlipped}/>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Term:
                            <input type="text" name="term" value={this.state.answer} onChange={this.handleChange}/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
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