import { MemoryCard } from "./memory-card";

export interface MemoryCardCollection {
    id: number;
    name: string;
    memoryCards: MemoryCard[];
    createdAt: Date;
    createdBy: string;
}