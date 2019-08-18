import React from 'react';
import './memory-cards-overview.component.scss';
import { MemoryCardCollection } from '../models/memory-card-collection';
import { MemoryCardService } from '../http/memory-card.service';
import CardComponent from '../common/card.component';

class MemoryCardCollectionsOverview extends React.Component<any, MemoryCardCollectionsOverviewState> {

    constructor(props: any) {
        super(props);

        this.state = { memoryCardCollections: [] };
    }

    async componentDidMount() {
        var collections = await MemoryCardService.getAllCollections();

        if (collections) {
            this.setState({memoryCardCollections: collections});
        }
    }

    render () {
        const list = this.renderCollectionList();
        return  <div className="memory-card-collections-overview">
                    {list}
                </div>
    }

    renderCollectionList = () => {
        const collections = this.state.memoryCardCollections;

        if (collections.length === 0) {
            return <h2>No collections found.</h2>
        }

        return collections.map(collection =>
            <CardComponent key={collection.id}>
                    <h3>{collection.name}</h3>
            </CardComponent>
        );
    }
}

interface MemoryCardCollectionsOverviewState {
    memoryCardCollections: MemoryCardCollection[];
}

export default MemoryCardCollectionsOverview;