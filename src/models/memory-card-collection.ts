import { MemoryCard } from "./memory-card";

export interface MemoryCardCollection {
    memoryCardSetId: number;
    name: string;
    memoryCards: MemoryCard[];
    createdAt: Date;
    createdBy: string;
}