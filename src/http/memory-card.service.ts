import { MemoryCardCollection } from "../models/memory-card-collection";
import { QuestionType } from "../models/question-type";

export class MemoryCardService {
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
        { id: 1, name: 'First collection', memoryCards: MemoryCardService.cards1, createdAt: new Date(), createdBy: 'testmann'},
        { id: 2, name: 'Second collection', memoryCards: MemoryCardService.cards2, createdAt: new Date(), createdBy: 'testmann'},
        { id: 3, name: 'Third collection', memoryCards: MemoryCardService.cards3, createdAt: new Date(), createdBy: 'testmann'}
    ]


    static getAllCollections = () : Promise<MemoryCardCollection[]> => {
        return Promise.resolve(MemoryCardService.collection);
    }

    static getCollection = (collectionId: number) : Promise<MemoryCardCollection> => {
        const collection = MemoryCardService.collection.find(mcs => mcs.id === collectionId)
        if (collection === undefined) {
            return Promise.reject();
        }
        return Promise.resolve(collection);

    }
}