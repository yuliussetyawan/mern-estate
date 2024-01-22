// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1c93a.firebaseapp.com",
  projectId: "mern-estate-1c93a",
  storageBucket: "mern-estate-1c93a.appspot.com",
  messagingSenderId: "253327329595",
  appId: "1:253327329595:web:1e21d31a0e36bd02b88f1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);