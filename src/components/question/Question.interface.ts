import { IAnswer } from 'types/answers.interface';

export interface Props {
    id: number;
    question: string;
    answers: Answer[];
    destinations: any;
    columns: number;
    progress: number;
}

export interface Answer {
    id: number;
    name: string;
    answer: string;
    next_step: string;
}
