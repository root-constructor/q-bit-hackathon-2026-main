// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNC7GQhcouio1a-nKIgkJSmP12eAYlloE",
  authDomain: "qbithackathon.firebaseapp.com",
  projectId: "qbithackathon",
  storageBucket: "qbithackathon.firebasestorage.app",
  messagingSenderId: "502637904904",
  appId: "1:502637904904:web:d31c43c2ff07f808d83dbd",
  measurementId: "G-2RQJ97ECSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
