import React, {Component} from 'react';
import { RouteComponentProps } from 'react-router';
import CardComponent from '../common/card.component';
import { MemoryCardService } from '../http/memory-card.service';
import ClassroomComponent from './classroom.component';
import { MemoryCardCollection } from '../models/memory-card-collection';

class MemoryCardCollectionComponent extends Component<RouteComponentProps<MemoryCardCollectionProps>, MemoryCardCollectionState> {

    constructor(props: RouteComponentProps<MemoryCardCollectionProps>) {
        super(props);

        this.state = { collection: null };
    }

    componentDidMount() {
        const id = this.props.match.params.id ? parseInt(this.props.match.params.id) : null;

        if (id === null) {
            return;
        }

        MemoryCardService.getCollection(id).then((c) => {
            this.setState({collection: c})
        }).catch(() => {

        })
    }

    render() {
        const collection = this.state.collection;

        if (collection === null) {
            return <h1>Loading...</h1>
        }

        return  (<div>
                    <CardComponent><h1>{collection.name}</h1></CardComponent>
                    {collection ? <ClassroomComponent cards={collection.memoryCards}/> : null}
                </div>);
    }

}



interface MemoryCardCollectionProps {
    id?: string | undefined;
}


interface MemoryCardCollectionState {
    collection: MemoryCardCollection | null
}


export default MemoryCardCollectionComponent;
