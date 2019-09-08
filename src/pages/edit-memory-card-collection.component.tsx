import React, {Component} from 'react';
import { RouteComponentProps } from 'react-router';
import { MemoryCardService } from '../http/memory-card.service';
import { MemoryCardCollection } from '../models/memory-card-collection';
import { MemoryCard } from '../models/memory-card';
import CardComponent from '../common/card.component';
import EditCardComponent from '../common/edit-card-component';

class EditMemoryCardCollectionComponent extends Component<RouteComponentProps<EditMemoryCardCollectionProps>, EditMemoryCardCollectionState> {

    constructor(props: RouteComponentProps<EditMemoryCardCollectionProps>) {
        super(props);

        this.state = { collection: { name: '', memoryCards: [], memoryCardSetId: 0}, memoryCards: [] };
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

        if (collection.memoryCardSetId === 0) {
            return <h1>Loading...</h1>
        }

        return  (
            <div className="edit-memory-card-collection">
                <h1>{collection.name}</h1>
                {this.renderCards(collection.memoryCards)}
            </div>
        );
        
    }

    renderCards(cards : MemoryCard[]) {        
        return cards.map(card => {
                return <EditCardComponent   key={card.memoryCardId} 
                                            card={card}
                                            onChangeSubmit={this.submitCard}/>
            }            
        );
    }

    submitCard = (updatedMemoryCard: MemoryCard) => {
        console.log(updatedMemoryCard);
        this.setState(prevState => ({
                memoryCards: {
                    ...prevState.collection.memoryCards,
                    [prevState.collection.memoryCards[0].term]: 'lolda'
                }
        }));
        
    }

}



interface EditMemoryCardCollectionProps {
    collectionId?: string | undefined;
}


interface EditMemoryCardCollectionState {
    collection: MemoryCardCollection,
    memoryCards: MemoryCard[]
}


export default EditMemoryCardCollectionComponent;
