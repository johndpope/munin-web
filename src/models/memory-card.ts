import { QuestionType } from "./question-type";

export interface MemoryCard {
    memoryCardId: number;
    term: string;
    description: string;
    //questionType: QuestionType
}