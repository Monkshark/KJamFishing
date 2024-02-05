import {getIpAndCity} from './getIpAndCity.js';
import {WRITE_LOG} from "./setting";

const ip = document.querySelector("#ip");
const city = document.querySelector("#city");
getIpAndCity().then(result => {
    if (WRITE_LOG) console.log(`
            result.ip: ${result.ip}
            result.city: ${result.location}
        `);
    ip.textContent = `니IP: ${result.ip}`;
    city.textContent = `니위치: ${result.location}`;
});