import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAlzffdOf7WMPhZDXP8aXFn_gKClLbS-bM",
  authDomain: "arc-phase1-sevithiran.firebaseapp.com",
  projectId: "arc-phase1-sevithiran",
  storageBucket: "arc-phase1-sevithiran.appspot.com",
  messagingSenderId: "184530392805",
  appId: "1:184530392805:web:b802e927156853bd91e60c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)

