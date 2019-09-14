import axios from 'axios';
import { MemoryCard } from "../models/memory-card";
import Config from '../config';

export class MemoryCardService {

    static host = `${Config.API_HOSTNAME}/memorycards`;

    static async UpdateMemoryCard(memoryCard: MemoryCard) {
        try {
            await axios.put<void>(this.host, memoryCard);
            return Promise.resolve();
        }
        catch(e) {
            throw e;
        }
    }
}