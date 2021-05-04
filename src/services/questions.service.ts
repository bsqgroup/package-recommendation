export const getQuestions = async () =>  {
   return await fetch(`http://directus.bsqgroup.co.uk/items/questions/?fields=*.*.*`)
   .then(data => data.json());
}

export const getQuestionById = (questions: any, id: number) => {
   return questions.find((q: any) => q.id === id);
}