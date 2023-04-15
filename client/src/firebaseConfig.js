// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf_gTbst4LmQh3oWY0HYhUqDzyjHtqgR0",
  authDomain: "sevithiran.firebaseapp.com",
  projectId: "sevithiran",
  storageBucket: "sevithiran.appspot.com",
  messagingSenderId: "673878153675",
  appId: "1:673878153675:web:6f2c55b162738fc926fe4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);