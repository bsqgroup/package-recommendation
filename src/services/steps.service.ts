export const getSteps = async () =>  {
   return await fetch(`http://directus.bsqgroup.co.uk/items/steps/?fields=*.*.*`)
   .then(data => data.json());
}