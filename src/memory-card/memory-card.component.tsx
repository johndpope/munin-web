import React from 'react';
import CardComponent from '../common/card.component';
import FlipCardComponent from '../common/flip-card.component';

class MemoryCardComponent extends React.Component<MemoryCardComponentProps, MemoryCardComponentState> {

    constructor(props : MemoryCardComponentProps) {
        super(props);

        this.state = { isFlipped: false};
    }

    render () {
        const card = this.props.card;
        return  <FlipCardComponent>
                    
                </FlipCardComponent>
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