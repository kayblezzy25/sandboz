// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEZ4Z5Z-AoiKIV49AMFUp8q0ls39MjId0",
  authDomain: "sandboz-b6493.firebaseapp.com",
  projectId: "sandboz-b6493",
  storageBucket: "sandboz-b6493.firebasestorage.app",
  messagingSenderId: "1003821462428",
  appId: "1:1003821462428:web:b47bc0915d8aece800ce59",
  measurementId: "G-JY9JY45PMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);