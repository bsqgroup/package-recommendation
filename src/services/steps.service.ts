export const getSteps = async () =>  {
   return await fetch(`https://recommendation.directus.1stformations.co.uk/items/steps/?fields=*.*.*.*.*`)
   .then(data => data.json());
}