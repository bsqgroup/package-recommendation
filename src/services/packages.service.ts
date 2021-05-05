export const getPackages = async () =>  {
   return await fetch(`https://recommendation.directus.1stformations.co.uk/items/packages/?fields=*.*.*`)
   .then(data => data.json());
}