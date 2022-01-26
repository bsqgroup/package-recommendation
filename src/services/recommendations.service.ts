import { IRecommendation } from 'interfaces';

export const getRecommendations = async () =>
    await fetch('https://recommendation.directus.1stformations.co.uk/items/recommendations/?fields=*.*.*')
    .then((data) => data.json());

export const getRecommendationByName = (recommendations: IRecommendation[], name: string) =>
    recommendations.find((q: IRecommendation) => q.name === name);
