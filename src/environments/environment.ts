import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDBdV6IS5-Xl4tyeaz__ulvDrxRUmCbxzc",
    authDomain: "taskmaster-1e198.firebaseapp.com",
    projectId: "taskmaster-1e198",
    storageBucket: "taskmaster-1e198.appspot.com",
    messagingSenderId: "557620631532",
    appId: "1:557620631532:web:0bf5e5f9344bf9211b52c9",
    measurementId: "G-RLCJ2YY8FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
