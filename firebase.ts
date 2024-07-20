// Import the functions you need from the SDKs you need
// import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGcLcLC-RQpz0qsy7suuTVwhzw6tzmZMo",
  authDomain: "miniproject-17c49.firebaseapp.com",
  projectId: "miniproject-17c49",
  storageBucket: "miniproject-17c49.appspot.com",
  messagingSenderId: "337959616514",
  appId: "1:337959616514:web:422ad720d44aaca15c271b"
};

// Initialize Firebase
const app = getApps().length===0 ? initializeApp(firebaseConfig) : getApp()
const db=getFirestore(app);

export {db};