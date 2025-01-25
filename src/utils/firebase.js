// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABdVWcZ5ILk0YVipZfGVoNuzL2AdhbE3s",
  authDomain: "netflix-gpt-56a1d.firebaseapp.com",
  projectId: "netflix-gpt-56a1d",
  storageBucket: "netflix-gpt-56a1d.firebasestorage.app",
  messagingSenderId: "725482426120",
  appId: "1:725482426120:web:659d5c93bb95c1895ee6bd",
  measurementId: "G-X31JGP5MY9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
