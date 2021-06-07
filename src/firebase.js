import firebase from "firebase/app";
import "firebase/auth";

const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCtNHa0cRE1A--lXujLe4z5L0NU8YJCksE",
    authDomain: "chatapp1-150d0.firebaseapp.com",
    projectId: "chatapp1-150d0",
    storageBucket: "chatapp1-150d0.appspot.com",
    messagingSenderId: "441142247660",
    appId: "1:441142247660:web:9594157c78f8608efae5c9",
  })
  .auth();

export default auth;
