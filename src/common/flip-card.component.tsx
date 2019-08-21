import React, { ReactNode } from 'react';
import "./flip-card.component.scss";

function FlipCardComponent (props: FlipCardComponentProps) {
    return  (
         <div className="flip-card">
            <div className={"flip-card__inner " + (props.isFlipped ? 'flip-card__inner--flipped' : '')}>
                <div className="flip-card__front">
                    {props.front}
                </div>
                <div className="flip-card__back">
                    {props.back}
                </div>
            </div>
        </div>
    );
}

interface FlipCardComponentProps {
    front: ReactNode;
    back: ReactNode;
    isFlipped: boolean;
}

export default FlipCardComponent;