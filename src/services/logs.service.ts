const getIpAddress = async () => {
    return await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${import.meta.env.VITE_ABSTRACT_KEY}`)
   .then(data => data.json())
   .then(data => data.ip_address);
}

export const postLog = async (packageId: number) => {
    const ipAddress = await getIpAddress();
    return await fetch(`https://recommendation.directus.1stformations.co.uk/items/logs/?fields=*.*.*`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ip_address: ipAddress,
            recommended_package: packageId,
        })
    }).then(data => data.json());
}