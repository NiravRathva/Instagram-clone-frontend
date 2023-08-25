// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import dotenv from "dotenv";

dotenv.config();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: "instagram-clone-88112.firebaseapp.com",
  projectId: "instagram-clone-88112",
  storageBucket: "instagram-clone-88112.appspot.com",
  messagingSenderId: "177291247331",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-NJLK5JVZLE",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
