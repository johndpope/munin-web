import React from 'react';
import { MemoryCard } from '../models/memory-card';
import './classroom.component.scss'
import TermCardComponent from './term-card.component';
import { RouteComponentProps } from 'react-router';
import { MemoryCardService } from '../http/memory-card.service';
import CardComponent from '../common/card.component';

class ClassroomComponent extends React.Component<RouteComponentProps<ClassRoomProps>, ClassRoomState> {

    readonly DELAY_BEFORE_NEXT_CARD = 1000;

    constructor(props: RouteComponentProps<ClassRoomProps>) {
        super(props);

        this.state = { cards: [], currentCardIndex: 0, answer: '', nofCorrectAnswers: 0 };
    }

    componentDidMount() {
        const id = this.props.match.params.collectionId ? parseInt(this.props.match.params.collectionId) : null;

        if (id === null) {
            console.error('Route does not contain required route parameter.');
            return;
        }

        MemoryCardService.getCollection(id).then((c) => {
            console.log(c);
            this.setState({cards: c.memoryCards})
        }).catch(() => {

        })
    }

    render() {
        const cards = this.state.cards;
        const currentCardIndex = this.state.currentCardIndex;
        if (currentCardIndex >= cards.length) {
            return  <div className="classroom">
                        <CardComponent>
                            <p>Done!</p>
                            <p>{`${this.state.nofCorrectAnswers}/${this.state.cards.length}`} correct.</p>
                        </CardComponent>
                    </div>
        }
        return  <div className="classroom">
                    <TermCardComponent  key={currentCardIndex}
                                        card={cards[currentCardIndex]}
                                        onSubmittedAnswer={this.goToNextCard}
                    />
                </div>
    }

    goToNextCard = (wasCorrect: boolean) => {
        if (wasCorrect) {
            this.setState({nofCorrectAnswers: this.state.nofCorrectAnswers + 1});
        }
        setTimeout(() => this.setState({currentCardIndex: this.state.currentCardIndex + 1}), this.DELAY_BEFORE_NEXT_CARD);
    }

}

interface ClassRoomProps {
    collectionId: string | undefined;
}

interface ClassRoomState {
    cards: MemoryCard[];
    currentCardIndex: number;
    answer: string;
    nofCorrectAnswers: number;
}

export default ClassroomComponent;