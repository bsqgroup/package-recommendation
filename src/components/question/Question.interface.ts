import { DirectusMarkdown, IAnswer } from 'interfaces';

export interface Props {
    id: number;
    name: string;
    question: string;
    answers: IAnswer[];
    info_text: DirectusMarkdown;
    back?: any;
    destinations: any;
    columns: number;
    prev?: boolean;
    activeCode: string;
    setActiveCode: (answer: string) => void;
}
