import { MemoryCard } from "../models/memory-card";
import ApiService from './api.service';

export class MemoryCardService {

    static basePath = 'memorycards'

    static async UpdateMemoryCard(memoryCard: MemoryCard) {
        return ApiService.put<void>(this.basePath, memoryCard);
    }
}