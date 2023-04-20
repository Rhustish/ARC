import {getAuth} from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvgN8qnYdG7zXWHKPp9U_paNQgv5gi_OM",
  authDomain: "arc-phase1.firebaseapp.com",
  projectId: "arc-phase1",
  storageBucket: "arc-phase1.appspot.com",
  messagingSenderId: "1097429318429",
  appId: "1:1097429318429:web:24ed7191206e11e6c23ff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);