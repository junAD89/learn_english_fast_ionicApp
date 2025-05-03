// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbij11kH8Y9s0CC7wmzfQWFZIPZowdEX8",
  authDomain: "fast-english-3c5a0.firebaseapp.com",
  projectId: "fast-english-3c5a0",
  storageBucket: "fast-english-3c5a0.firebasestorage.app",
  messagingSenderId: "963040992548",
  appId: "1:963040992548:web:28dd928a1cf94ccc2ca7b1",
  measurementId: "G-62B28F60SE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;