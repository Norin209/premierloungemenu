// src/_utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your configuration from the screenshot
const firebaseConfig = {
  apiKey: "AIzaSyAgzsd35x5IRakHBcdNM57pXWJwYnx0NR8",
  authDomain: "glistenlounge-f217f.firebaseapp.com",
  projectId: "glistenlounge-f217f",
  storageBucket: "glistenlounge-f217f.firebasestorage.app",
  messagingSenderId: "1032321641646",
  appId: "1:1032321641646:web:411362c32c0d1e67c3913f",
  measurementId: "G-6QR1M74ERB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (The Database)
export const db = getFirestore(app);