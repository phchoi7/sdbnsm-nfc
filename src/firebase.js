// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCxkIGqRhOz6aM7gSkVyiDFUIIInSDNzU",
  authDomain: "sdbnsm-nfc.firebaseapp.com",
  projectId: "sdbnsm-nfc",
  storageBucket: "sdbnsm-nfc.appspot.com",
  messagingSenderId: "1051078973550",
  appId: "1:1051078973550:web:e2416434897fc7a3f46e7f",
  measurementId: "G-NQ08TPLSPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
