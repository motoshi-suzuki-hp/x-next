// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-59c85.firebaseapp.com",
  projectId: "x-next-59c85",
  storageBucket: "x-next-59c85.firebasestorage.app",
  messagingSenderId: "89486945805",
  appId: "1:89486945805:web:1f6e7b2311ee914d376f44",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
