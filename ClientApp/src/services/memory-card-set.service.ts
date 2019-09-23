import { MemoryCardCollection } from "../models/memory-card-collection";
import { MemoryCard } from "../models/memory-card";
import ApiService from "./api.service";

export class MemoryCardSetService {

    private static basePath = 'memorycardsets';

    static async getAllCollections () : Promise<MemoryCardCollection[]> {
        return ApiService.get<MemoryCardCollection[]>(MemoryCardSetService.basePath);
    }

    static async getCollection (collectionId: number) : Promise<MemoryCardCollection> {
        return ApiService.get<MemoryCardCollection>(`${MemoryCardSetService.basePath}/${collectionId}`);
    }

    static async AddEmptyMemoryCard(memoryCardSetId: number) {
        const memoryCard = {memoryCardId: 0, term: '', description: ''};
        return await ApiService.post<MemoryCard>(`${this.basePath}/${memoryCardSetId}`, memoryCard);
    }
}