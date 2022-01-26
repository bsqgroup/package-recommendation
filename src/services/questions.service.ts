import { IQuestion } from 'interfaces';

export const getQuestions = async () =>
    await fetch('https://recommendation.directus.1stformations.co.uk/items/questions/?fields=*.*.*.*')
    .then((data) => data.json());

export const getQuestionById = (questions: IQuestion[], id: string) => questions.find((q: IQuestion) => q.id === id);
