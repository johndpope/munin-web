import React from 'react';
import FlipCardComponent from '../common/flip-card.component';

class MemoryCardComponent extends React.Component<MemoryCardComponentProps, MemoryCardComponentState> {

    constructor(props : MemoryCardComponentProps) {
        super(props);

        this.state = { isFlipped: false};
    }

    render () {
        const card = this.props.card;
        const front = this.splitTextIntoParagraphs(card.term);
        const back = this.splitTextIntoParagraphs(card.description);
        return  <FlipCardComponent front={front} back={back}/>
    }

    splitTextIntoParagraphs(s: string) {
        var lines = s.split('\n');
        return lines.map((line, index) => {
            return <p key={index}>{line}</p>
        });
    }
}

interface MemoryCard {
    term: string;
    description: string;
}

interface MemoryCardComponentProps {
    card: MemoryCard
}

interface MemoryCardComponentState {
    isFlipped: boolean
}

export default MemoryCardComponent;