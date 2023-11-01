// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mungai-estate.firebaseapp.com",
  projectId: "mungai-estate",
  storageBucket: "mungai-estate.appspot.com",
  messagingSenderId: "738564748320",
  appId: "1:738564748320:web:d339d51f6c7e908b283845"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);