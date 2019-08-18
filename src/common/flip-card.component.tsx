import React, { ReactNode } from 'react';
import "./flip-card.component.scss";

class FlipCardComponent extends React.Component<FlipCardComponentProps, FlipCardComponentState> {

    constructor(props: FlipCardComponentProps) {
        super(props);

        this.state = { isFlipped: false };
    }

    flip = () => {
        if (this.props.disableFlip) {
            return;
        }
        this.setState({isFlipped: !this.state.isFlipped});

        if (this.props.onCardClicked) {
            this.props.onCardClicked();
        }
    }

    render () {
        return <div className="flip-card" onClick={this.flip}>
                    <div className={"flip-card__inner " + (this.state.isFlipped ? 'flip-card__inner--flipped' : '')}>
                        <div className="flip-card__front">
                            {this.props.front}
                        </div>
                        <div className="flip-card__back">
                            {this.props.back}
                        </div>
                    </div>
                </div>
    }
}

interface FlipCardComponentState {
    isFlipped: boolean;
}

interface FlipCardComponentProps {
    front: ReactNode;
    back: ReactNode;
    disableFlip?: boolean;
    onCardClicked?: () => void;
}

export default FlipCardComponent;