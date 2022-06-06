import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxVEiuE4AqpG4GtbK5OL7jdnHw-nf7t-o",
  authDomain: "e-ride-f33ea.firebaseapp.com",
  projectId: "e-ride-f33ea",
  storageBucket: "e-ride-f33ea.appspot.com",
  messagingSenderId: "430462623602",
  appId: "1:430462623602:web:c39175d2944c0620cec7eb",
  measurementId: "G-2Y73X5SJ0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
