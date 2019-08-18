import { MemoryCardCollection } from "../models/memory-card-collection";

export class MemoryCardService {
    static cards1 = [
        { id: 1, term: "Cards1 - One", description: "this is desc \n for the first card"},
        { id: 2, term: "Cards1 - Two", description: "this is desc \n for the second card"},
        { id: 3, term: "Cards1 - Three", description: "this is desc \n for the third card"}
    ];

    static cards2 = [
        { id: 4, term: "Cards2 - One", description: "this is desc \n for the first card"},
        { id: 5, term: "Cards2 - Two", description: "this is desc \n for the second card"},
        { id: 6, term: "Cards2 - Three", description: "this is desc \n for the third card"}
    ];

    static cards3 = [
        { id: 7, term: "Cards3 - One", description: "this is desc \n for the first card"},
        { id: 8, term: "Cards3 - Two", description: "this is desc \n for the second card"},
        { id: 9, term: "Cards3 - Three", description: "this is desc \n for the third card"}
    ];


    static collection : MemoryCardCollection[] = [
        { id: 1, name: 'First collection', memoryCards: MemoryCardService.cards1, createdAt: new Date(), createdBy: 'testmann'},
        { id: 2, name: 'Second collection', memoryCards: MemoryCardService.cards2, createdAt: new Date(), createdBy: 'testmann'},
        { id: 3, name: 'Third collection', memoryCards: MemoryCardService.cards3, createdAt: new Date(), createdBy: 'testmann'}
    ]


    static getAllCollections = () : Promise<MemoryCardCollection[]> => {
        return Promise.resolve(MemoryCardService.collection);
    }

    static getCollection = (collectionId: number) : Promise<MemoryCardCollection | undefined> => {
        return Promise.resolve(MemoryCardService.collection.find(mcs => mcs.id === collectionId));
    }
}