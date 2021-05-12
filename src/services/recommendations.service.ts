export const getRecommendations = async () =>
    await fetch('https://recommendation.directus.1stformations.co.uk/items/recommendations/?fields=*.*.*')
    .then((data) => data.json());

export const getRecommendationByName = (recommendations: any, name: string) =>
    recommendations.find((q: any) => q.name === name);
