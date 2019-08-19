import React, {Component} from 'react';
import { RouteComponentProps } from 'react-router';
import CardComponent from '../common/card.component';

class MemoryCardCollectionComponent extends Component<RouteComponentProps<MemoryCardCollectionProps>> {

    constructor(props: RouteComponentProps<MemoryCardCollectionProps>) {
        super(props);
        console.log(this.props)
    }

    render() {
        return <CardComponent><h1>Hei {this.props.match.params.id}</h1></CardComponent>
    }

}



interface MemoryCardCollectionProps {
    id?: string | undefined;
}

export default MemoryCardCollectionComponent;
