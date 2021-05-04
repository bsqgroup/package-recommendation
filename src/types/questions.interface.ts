import { IAnswer } from 'types/answers.interface';

export interface IQuestion {
    id: number;
    question: string;
    answers: IAnswer[];
}