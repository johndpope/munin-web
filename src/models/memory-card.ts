import { QuestionType } from "./question-type";

export interface MemoryCard {
    id: number;
    term: string;
    description: string;
    questionType: QuestionType
}