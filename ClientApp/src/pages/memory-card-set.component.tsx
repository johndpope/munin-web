import React, {Component} from 'react';
import { RouteComponentProps } from 'react-router';
import CardComponent from '../common/card.component';
import { MemoryCardSetService } from '../http/memory-card-set.service';
import { MemoryCardCollection } from '../models/memory-card-collection';
import { NavLink } from 'react-router-dom';

class MemoryCardCollectionComponent extends Component<RouteComponentProps<MemoryCardCollectionProps>, MemoryCardCollectionState> {

    constructor(props: RouteComponentProps<MemoryCardCollectionProps>) {
        super(props);

        this.state = { collection: null };
    }

    async componentDidMount() {
        const id = this.props.match.params.id ? parseInt(this.props.match.params.id) : null;

        if (id === null) {
            return;
        }

        const collection = await MemoryCardSetService.getCollection(id);
        this.setState({collection: collection});
    }

    render() {
        const collection = this.state.collection;

        if (collection === null) {
            return <h1>Loading...</h1>
        }

        return  (<div>
                    <h1>{collection.name}</h1>
                    <CardComponent>
                        <p>
                            <NavLink to={`/memory-card-collection/${collection.memoryCardSetId}/edit`}>
                                Edit
                            </NavLink>
                        </p>
                        <p>
                            <NavLink to={`/memory-card-collection/${collection.memoryCardSetId}/classroom`}>
                                Learn
                            </NavLink>
                        </p>
                    </CardComponent>
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
