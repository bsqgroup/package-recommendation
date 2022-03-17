const getIpAddress = async () =>
    await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_ABSTRACT_KEY}`)
    .then((data) => data.json())
    .then((data) => data.ip_address);

export const postLog = async (packageId: string) => {
    const ipAddress = await getIpAddress();
    if (!ipAddress) return;

    return await fetch(
        'https://recommendation.directus.1stformations.co.uk/items/logs/?fields=*.*.*',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ip_address: ipAddress,
                recommended_package: packageId,
            }),
        }
    )
    .then((data) => data.json());
};
