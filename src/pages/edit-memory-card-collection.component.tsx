import React, {Component} from 'react';
import { RouteComponentProps } from 'react-router';
import { MemoryCardSetService } from '../http/memory-card-set.service';
import { MemoryCardCollection } from '../models/memory-card-collection';
import { MemoryCard } from '../models/memory-card';
import EditCardComponent from '../common/edit-card.component';
import { MemoryCardService } from '../http/memory-card.service';

class EditMemoryCardCollectionComponent extends Component<RouteComponentProps<EditMemoryCardCollectionProps>, EditMemoryCardCollectionState> {

    constructor(props: RouteComponentProps<EditMemoryCardCollectionProps>) {
        super(props);

        this.state = { collection: { name: '', memoryCards: [], memoryCardSetId: 0} };
    }

    async componentDidMount() {
        const id = this.props.match.params.collectionId ? parseInt(this.props.match.params.collectionId) : null;
        if (id === null) {
            return;
        }

        const collection = await MemoryCardSetService.getCollection(id);
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
                <button onClick={this.createEmptyCard} type="button">+</button>
            </div>
        );

    }

    renderCards(cards : MemoryCard[]) {
        return cards.map(card => {
                return <EditCardComponent   key={card.memoryCardId}
                                            card={card}
                                            onChangeSubmit={this.updateCard}/>
            }
        );
    }

    async updateCard (updatedMemoryCard: MemoryCard) {
        await MemoryCardService.UpdateMemoryCard(updatedMemoryCard);
    }

    createEmptyCard = async () => {
        const newCard = await MemoryCardSetService.AddEmptyMemoryCard(this.state.collection.memoryCardSetId);
        const memCards = [...this.state.collection.memoryCards];
        memCards.push(newCard);
        this.setState(prevState => ({
            collection: {
                ...prevState.collection,
                memoryCards: memCards
            }
        }));
    }

}



interface EditMemoryCardCollectionProps {
    collectionId?: string | undefined;
}


interface EditMemoryCardCollectionState {
    collection: MemoryCardCollection,
    //memoryCards: MemoryCard[]
}


export default EditMemoryCardCollectionComponent;
