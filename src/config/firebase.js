// Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth"
import "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRBhsKFqD51c0zXXdAsHl9I4SS0EyJ1uM",
  authDomain: "chat-app-6d17d.firebaseapp.com",
  projectId: "chat-app-6d17d",
  storageBucket: "chat-app-6d17d.appspot.com",
  messagingSenderId: "205635708427",
  appId: "1:205635708427:web:54ad890acf51026eedc90e",
  measurementId: "G-J1BE65D4EV"
};

// Initialize Firebase
var Firebase = initializeApp(firebaseConfig);
export default Firebase;
