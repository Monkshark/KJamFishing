export async function getIpAndCity() {
    const data = await fetch('https://api.ipify.org?format=json')
        .then(results => results.json());
    const locationData = await fetch(`http://ip-api.com/json/${data.ip}?lang=ko`)
        .then(res => res.json());
    const ip = data.ip;
    const city = `${locationData.city}, ${locationData.country}`;
    return ({
        "ip" : ip,
        "city" : city,
    });
}