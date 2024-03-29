import React from 'react';
import './memory-card-sets-overview.component.scss';
import { MemoryCardCollection } from '../models/memory-card-collection';
import { MemoryCardSetService } from '../services/memory-card-set.service';
import CardComponent from '../common/card.component';
import { NavLink } from 'react-router-dom';

class MemoryCardCollectionsOverview extends React.Component<any, MemoryCardCollectionsOverviewState> {

    constructor(props: any) {
        super(props);

        this.state = { memoryCardCollections: [] };
    }

    async componentDidMount() {
        var collections = await MemoryCardSetService.getAllCollections();

        if (collections) {
            this.setState({memoryCardCollections: collections});
        }
    }

    render () {
        const list = this.renderCollectionList();
        return  <div className="memory-card-collections-overview">
                    <div className="memory-card-collections-overview__list">
                        {list}
                    </div>
                </div>
    }

    renderCollectionList = () => {
        const collections = this.state.memoryCardCollections;

        if (collections.length === 0) {
            return <h2>No collections found.</h2>
        }
        return collections.map(collection =>
            <div key={collection.memoryCardSetId} className="memory-card-collections-overview__list-entry">
                <CardComponent key={collection.memoryCardSetId}>
                    <NavLink to={`/memory-card-collection/${collection.memoryCardSetId}`}>
                        <h3>{collection.name}</h3>
                    </NavLink>
                </CardComponent>
            </div>
        );
    }
}

interface MemoryCardCollectionsOverviewState {
    memoryCardCollections: MemoryCardCollection[];
}

export default MemoryCardCollectionsOverview;