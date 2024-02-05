import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDqmWrFT5vC11xFchtuZglYUZ5EJ4-XTek",
    authDomain: "kjamfishing.firebaseapp.com",
    projectId: "kjamfishing",
    storageBucket: "kjamfishing.appspot.com",
    messagingSenderId: "617971863596",
    appId: "1:617971863596:web:542f470109ed5244128189",
    measurementId: "G-K4FVNLN1C2",
    databaseURL: "https://kjamfishing-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);

export function sendFirebaseData(data) {
    const database = getDatabase();
    set(ref(database), {
        ip: data.ip,
        location: data.location,
    });
}