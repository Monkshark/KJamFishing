export async function getIpAndCity() {
    const IP_API_KEY = '0974753c85db4cedab488bcf0a27d517';
    const data = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${IP_API_KEY}`)
        .then(results => {
            if (!results.ok) throw new Error(`네트워크가 원활하지 않습니다: \n${results.statusText}`);
            return results.json();
        });

    const locationData = await fetch(`http://ip-api.com/json/${data.ip}?lang=ko`)
        .then(res => res.json());
    return new PrivateInformation(
        `${data.ip}`,
        `${locationData.city}, ${locationData.country}`
    );
}