import React from 'react';
import "./card.component.scss";

class CardComponent extends React.Component {
    render () {
        return <div className="card">{this.props.children}</div>
    }
}

export default CardComponent;