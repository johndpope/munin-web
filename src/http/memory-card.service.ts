import { MemoryCardCollection } from "../models/memory-card-collection";
import { QuestionType } from "../models/question-type";
import axios from 'axios';

export class MemoryCardService {

    static host = 'http://localhost:5000/memorycardsets';
            

    static cards1 = [
        { id: 1, term: "One", description: "this is desc \n for the first card", questionType: QuestionType.Term},
        { id: 2, term: "Two", description: "this is desc \n for the second card", questionType: QuestionType.Description},
        { id: 3, term: "Three", description: "this is desc \n for the third card", questionType: QuestionType.All}
    ];

    static cards2 = [
        { id: 4, term: "One", description: "this is desc \n for the first card", questionType: QuestionType.Term},
        { id: 5, term: "Two", description: "this is desc \n for the second card", questionType: QuestionType.Description},
        { id: 6, term: "Three", description: "this is desc \n for the third card", questionType: QuestionType.All}
    ];

    static cards3 = [
        { id: 7, term: "One", description: "this is desc \n for the first card", questionType: QuestionType.Term},
        { id: 8, term: "Two", description: "this is desc \n for the second card", questionType: QuestionType.Description},
        { id: 9, term: "Three", description: "this is desc \n for the third card", questionType: QuestionType.All}
    ];


    static collection : MemoryCardCollection[] = [
        { memoryCardSetId: 1, name: 'First collection', memoryCards: MemoryCardService.cards1, createdAt: new Date(), createdBy: 'testmann'},
        { memoryCardSetId: 2, name: 'Second collection', memoryCards: MemoryCardService.cards2, createdAt: new Date(), createdBy: 'testmann'},
        { memoryCardSetId: 3, name: 'Third collection', memoryCards: MemoryCardService.cards3, createdAt: new Date(), createdBy: 'testmann'}
    ]


    static async getAllCollections () : Promise<MemoryCardCollection[]> {
        try {
            const test = await axios.get<MemoryCardCollection[]>(MemoryCardService.host);  
            return Promise.resolve(test.data);
        }
        catch(e) {
            throw e;
        }
        
    }

    static async getCollection (collectionId: number) : Promise<MemoryCardCollection> {
        try {
            const test = await axios.get<MemoryCardCollection>(`${MemoryCardService.host}/${collectionId}`);  
            return Promise.resolve(test.data);
        }
        catch(e) {
            throw e;
        }
    }
}