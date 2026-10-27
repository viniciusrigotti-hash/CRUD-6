import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAlR5JCQntVlpVPsojCiUAxqmXgsaUAMKM",
    authDomain: "api-3-a99a9.firebaseapp.com",
    databaseURL: "https://api-3-a99a9-default-rtdb.firebaseio.com",
    projectId: "api-3-a99a9",
    storageBucket: "api-3-a99a9.firebasestorage.app",
    messagingSenderId: "677838461459",
    appId: "1:677838461459:web:55e61c8e6a82deb2227de6",
    measurementId: "G-ZPQ048023T"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);