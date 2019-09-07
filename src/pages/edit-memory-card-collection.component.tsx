import React, {Component} from 'react';
import { RouteComponentProps } from 'react-router';
import { MemoryCardService } from '../http/memory-card.service';
import { MemoryCardCollection } from '../models/memory-card-collection';
import { MemoryCard } from '../models/memory-card';
import CardComponent from '../common/card.component';

class EditMemoryCardCollectionComponent extends Component<RouteComponentProps<EditMemoryCardCollectionProps>, EditMemoryCardCollectionState> {

    constructor(props: RouteComponentProps<EditMemoryCardCollectionProps>) {
        super(props);

        this.state = { collection: null };
    }

    async componentDidMount() {
        const id = this.props.match.params.collectionId ? parseInt(this.props.match.params.collectionId) : null;
        if (id === null) {
            return;
        }

        const collection = await MemoryCardService.getCollection(id);
        this.setState({collection: collection});
    }

    render() {
        const collection = this.state.collection;

        if (collection === null) {
            return <h1>Loading...</h1>
        }

        return  (
            <div>
                <h1>{collection.name}</h1>
                {this.renderCards(collection.memoryCards)}
            </div>
        );
        
    }

    renderCards(cards : MemoryCard[]) {
        return cards.map(card => 
            <CardComponent key={card.memoryCardId}>
                <p>{card.term}</p>
                <p>{card.description}</p>
            </CardComponent>                
        );
    }

}



interface EditMemoryCardCollectionProps {
    collectionId?: string | undefined;
}


interface EditMemoryCardCollectionState {
    collection: MemoryCardCollection | null
}


export default EditMemoryCardCollectionComponent;
