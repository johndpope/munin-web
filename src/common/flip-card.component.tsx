import React from 'react';
import "./flip-card.component.scss";

class FlipCardComponent extends React.Component<any, FlipCardComponentState> {

    constructor(props: any) {
        super(props);

        this.state = { isFlipped: false };
    }

    flip = () => {
        console.log('Is flipped:', this.state.isFlipped);
        this.setState({isFlipped: !this.state.isFlipped});
    }

    render () {
        return <div className="flip-card" onClick={this.flip}>
                    <div className={"flip-card__inner " + (this.state.isFlipped ? 'flip-card__inner--flipped' : '')}>
                        <div className="flip-card__front">
                            FRONTD
                        </div>
                        <div className="flip-card__back">
                            BACK
                        </div>
                    </div>
                </div>
    }
}

interface FlipCardComponentState {
    isFlipped: boolean;
}

export default FlipCardComponent;