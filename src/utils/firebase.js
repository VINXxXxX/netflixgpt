// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBUxUkurIutQOu1e9rE3aAaOMk5uT4Pehk",
  authDomain: "netflixgpt-10d42.firebaseapp.com",
  projectId: "netflixgpt-10d42",
  storageBucket: "netflixgpt-10d42.appspot.com",
  messagingSenderId: "538667023513",
  appId: "1:538667023513:web:380703791f7813026e4c08",
  measurementId: "G-M3S8YTCQRJ"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { db };
export const auth = getAuth();
