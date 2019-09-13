import { MemoryCardCollection } from "../models/memory-card-collection";
import axios from 'axios';
import { MemoryCard } from "../models/memory-card";
import Config from "../config";

export class MemoryCardSetService {

    static host = `${Config.API_HOSTNAME}/memorycardsets`;

    static async getAllCollections () : Promise<MemoryCardCollection[]> {
        try {
            return Promise.resolve((await axios.get<MemoryCardCollection[]>(MemoryCardSetService.host)).data);
        }
        catch(e) {
            throw e;
        }
    }

    static async getCollection (collectionId: number) : Promise<MemoryCardCollection> {
        try {
            return Promise.resolve((await axios.get<MemoryCardCollection>(`${MemoryCardSetService.host}/${collectionId}`)).data);
        }
        catch(e) {
            throw e;
        }
    }

    static async AddEmptyMemoryCard(memoryCardSetId: number) {
        const memoryCard = {memoryCardId: 0, term: '', description: ''};
        try {
            return Promise.resolve((await axios.post<MemoryCard>(`${this.host}/${memoryCardSetId}`, memoryCard)).data);
        }
        catch(e) {
            throw e;
        }
    }
}