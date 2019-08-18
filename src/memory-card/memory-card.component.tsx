import React from 'react';
import FlipCardComponent from '../common/flip-card.component';
import { MemoryCard } from '../models/memory-card';

class MemoryCardComponent extends React.Component<MemoryCardComponentProps, MemoryCardComponentState> {

    constructor(props : MemoryCardComponentProps) {
        super(props);

        this.state = { isFlipped: false};
    }

    render () {
        const card = this.props.card;
        const front = this.splitTextIntoParagraphs(card.term);
        const back = this.splitTextIntoParagraphs(card.description);
        return  <FlipCardComponent  onCardClicked={this.props.onCardClicked}
                                    disableFlip={this.props.disableFlip}
                                    front={front}
                                    back={back}/>
    }

    splitTextIntoParagraphs(s: string) {
        var lines = s.split('\n');
        return lines.map((line, index) => {
            return <p key={index}>{line}</p>
        });
    }
}

interface MemoryCardComponentProps {
    card: MemoryCard;
    disableFlip?: boolean;
    onCardClicked?: () => void;
}

interface MemoryCardComponentState {
    isFlipped: boolean
}

export default MemoryCardComponent;