import React from 'react';
import { MemoryCard } from "../models/memory-card";
import CardComponent from './card.component';

class EditCardComponent extends React.Component<EditCardProps, EditCardState> {    
    constructor(props: EditCardProps) {
        super(props);

        this.state = { term: props.card.term, description: props.card.description };
    }

    render() {
        const termId = `term-${this.props.card.memoryCardId}`;
        const descriptionId  = `description-${this.props.card.memoryCardId}`;
        return <CardComponent key={this.props.card.memoryCardId}>
                    <label htmlFor={termId}>
                        Term
                        <input  id={termId} 
                                name={'term'} 
                                value={this.state.term} 
                                onChange={this.handleChange} 
                                onBlur={this.handleSubmit}
                                onKeyPress={this.handleKeyPress}/>
                    </label>
                    <label htmlFor={descriptionId}>
                        Description
                        <input  id={descriptionId} 
                                name={'description'} 
                                value={this.state.description} 
                                onChange={this.handleChange}
                                onBlur={this.handleSubmit}
                                onKeyPress={this.handleKeyPress}/> 
                    </label>
                </CardComponent>
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
        if (e.target.name === 'term')  {
            this.setState({ term : e.target.value});
        }            
        else if (e.target.name === 'description') {
            this.setState({ description : e.target.value});
        }
        else {
            console.error('Trying to update noexisting field', e.target.name);
        }        
    }
    

    handleSubmit = () => {
        if (this.hasChanged()) {
            this.props.onChangeSubmit({
                memoryCardId: this.props.card.memoryCardId,
                term: this.state.term,
                description: this.state.description
            })
        }        
    }

    handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            this.handleSubmit();
        }
    }

    hasChanged = () => {
        return this.state.term !== this.props.card.term || this.state.description !== this.props.card.description;
    }
}

interface EditCardProps {
    card: MemoryCard;
    onChangeSubmit: (updatedCard: MemoryCard) => void
}

interface EditCardState {
    term: string;
    description: string;
}

export default EditCardComponent;