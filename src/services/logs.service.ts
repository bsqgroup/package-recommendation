const getIpAddress = async () =>
    await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${import.meta.env.VITE_ABSTRACT_KEY}`)
    .then((data) => data.json())
    .then((data) => data.ip_address);

export const postLog = async (packageId: string, email: string) => {
    const ipAddress = await getIpAddress();

    if (!ipAddress && !email) return;

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
                email_address: email,
            }),
        }
    )
    .then((data) => data.json());
};
