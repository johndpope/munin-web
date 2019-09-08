import { MemoryCardCollection } from "../models/memory-card-collection";
import { QuestionType } from "../models/question-type";
import axios from 'axios';

export class MemoryCardService {

    static host = 'http://localhost:5000/memorycardsets';

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