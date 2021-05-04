const token = import.meta.env.VITE_DIRECTUS_TOKEN;

export const getPackages = async () =>  {
   return await fetch(`http://directus.bsqgroup.co.uk/items/packages/?access_token=${token}`)
   .then(data => data.json());
}