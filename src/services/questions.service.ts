export const getQuestions = async () =>
    await fetch('https://recommendation.directus.1stformations.co.uk/items/questions/?fields=*.*.*.*')
    .then((data) => data.json());

export const getQuestionById = (questions: any, id: number) => questions.find((q: any) => q.id === id);
