// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3Kny3bm7z2TfN18Ku7Dp9N7mrKdFveF0",
  authDomain: "tourney-app-2.firebaseapp.com",
  projectId: "tourney-app-2",
  storageBucket: "tourney-app-2.appspot.com",
  messagingSenderId: "1028235762057",
  appId: "1:1028235762057:web:82f47ee9953f35bd77e958",
  measurementId: "G-LN35V44R1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
export default app
const analytics = getAnalytics(app);

