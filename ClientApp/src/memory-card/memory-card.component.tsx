import React from 'react';
import FlipCardComponent from '../common/flip-card.component';
import { MemoryCard } from '../models/memory-card';

function MemoryCardComponent (props: MemoryCardComponentProps) {
    const card = props.card;
    const front = splitTextIntoParagraphs(card.term);
    const back = splitTextIntoParagraphs(card.description);
    return  (
        <FlipCardComponent  isFlipped={props.isFlipped}
                            front={front}
                            back={back}/>
    );
}

function splitTextIntoParagraphs(s: string) {
    var lines = s.split('\n');
    return lines.map((line, index) => {
        return <p key={index}>{line}</p>
    });
}

interface MemoryCardComponentProps {
    card: MemoryCard;
    isFlipped: boolean;
}

export default MemoryCardComponent;