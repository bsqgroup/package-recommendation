import { IAnswer } from 'interfaces';

export interface Props {
    id: number;
    name: string;
    question: string;
    answers: IAnswer[];
    back?: any;
    destinations: any;
    columns: number;
    prev?: boolean;
    activeCode: string;
    setActiveCode: (answer: string) => void;
}
