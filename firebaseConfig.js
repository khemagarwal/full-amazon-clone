// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSSqidLfSySkFJrLnJe1KieI39bISGkKg",
    authDomain: "khemagarwal-ebhida.firebaseapp.com",
    databaseURL: "https://khemagarwal-ebhida.firebaseio.com",
    projectId: "khemagarwal-ebhida",
    storageBucket: "khemagarwal-ebhida.appspot.com",
    messagingSenderId: "490717222204",
    appId: "1:490717222204:web:7e843e6cc0cdcd543f3a39",
    measurementId: "G-G0GWCZKYDB"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);