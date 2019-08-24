import React, { Component } from 'react';
import { MemoryCard } from '../models/memory-card';
import CardComponent from '../common/card.component';
import './term-card.component.scss';

class TermCardComponent extends Component<TermCardComponentProps, TermCardComponentState> {

    constructor(props: TermCardComponentProps) {
        super(props);
        this.state = {hasSubmitted: false, answer: ''};
    }

    render() {
        const card = this.props.card;
        const description = splitTextIntoParagraphs(card.description);
        return  (
            <div className="term-card">
                <CardComponent>
                    <div className="term-card__description">{description}</div>
                    <div className="term-card__term">{card.term}</div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Term:
                            <input type="text" name="term" value={this.state.answer} onChange={this.handleChange}/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </CardComponent>
            </div>
        );
    }

    handleSubmit = (event: any) => {
        this.setState({hasSubmitted: true})
        event.preventDefault();
    }

    handleChange = (event: any) => {
        this.setState({answer: event.target.value})
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
}

interface TermCardComponentState {
    hasSubmitted: boolean;
    answer: string;
}

export default TermCardComponent;