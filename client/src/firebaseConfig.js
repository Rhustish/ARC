import {getAuth} from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtmjFCoorweH6d0Dc5ExMhGZGYE85W2Xw",
  authDomain: "arc-2-d43f7.firebaseapp.com",
  projectId: "arc-2-d43f7",
  storageBucket: "arc-2-d43f7.appspot.com",
  messagingSenderId: "720230307779",
  appId: "1:720230307779:web:3eb52c7b445adcd4e6cf76",
  measurementId: "G-65MSXDEHG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

