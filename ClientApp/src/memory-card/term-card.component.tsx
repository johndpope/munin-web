import React, { Component } from 'react';
import { MemoryCard } from '../models/memory-card';
import CardComponent from '../common/card.component';
import './term-card.component.scss';

class TermCardComponent extends Component<TermCardComponentProps, TermCardComponentState> {

    constructor(props: TermCardComponentProps) {
        super(props);
        this.state = {hasSubmitted: false, isCorrectAnswer: false, answer: ''};
    }

    render() {
        const card = this.props.card;
        const description = splitTextIntoParagraphs(card.description);
        return  (
            <div className="term-card">
                <CardComponent>
                    <div className="term-card__description">{description}</div>
                    {this.state.hasSubmitted ? this.getResultView() : null }
                    {!this.state.hasSubmitted ?
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="term" value={this.state.answer} onChange={this.handleChange}/>
                            <input type="submit" value="Submit"/>
                        </form> : null}
                </CardComponent>
            </div>
        );
    }

    handleSubmit = (event: any) => {
        const isCorrectAnswer = this.props.card.term === this.state.answer;
        this.setState({hasSubmitted: true})
        this.setState({isCorrectAnswer: isCorrectAnswer})
        event.preventDefault();

        this.props.onSubmittedAnswer(isCorrectAnswer)
    }

    handleChange = (event: any) => {
        this.setState({answer: event.target.value})
    }

    getResultView() {
        if (this.state.isCorrectAnswer) {
            return <div className="term-card__result term-card__result--correct">Correct!</div>
        }
        return (
            <div className="term-card__result term-card__result--incorrect">
                Wrong answer.<br/>
                Correct: {this.props.card.term}
            </div>
        );

    }
}

function splitTextIntoParagraphs(s: string) {
    var lines = s.split('\n');
    return lines.map((line, index) => {
        return <p key={index}>{line}</p>
    });
}

interface TermCardComponentProps {
    card: MemoryCard;
    onSubmittedAnswer: (isCorrectAnswer: boolean) => void
}

interface TermCardComponentState {
    hasSubmitted: boolean;
    isCorrectAnswer: boolean;
    answer: string;
}

export default TermCardComponent;