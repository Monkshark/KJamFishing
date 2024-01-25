import {getIpAndCity} from "./getIpAndCity.js"

const ip = document.querySelector("#ip");
const city = document.querySelector("#city");
getIpAndCity().then(result => {
    console.log(`
            result.ip: ${result.ip}
            result.city: ${result.city}
        `);
    ip.textContent = `니IP: ${result.ip}`;
    city.textContent = `니위치: ${result.city}`;
});