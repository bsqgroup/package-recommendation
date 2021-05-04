import { IQuestion } from './questions.interface';

export interface IStep {
    id: number;
    name: string;
    slug: string;
    question: IQuestion;
}