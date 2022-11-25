import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuj2Va4D_j9S1bEojfUJ48mKapEaRIRWk",
  authDomain: "hotel-d0d30.firebaseapp.com",
  projectId: "hotel-d0d30",
  storageBucket: "hotel-d0d30.appspot.com",
  messagingSenderId: "126493562229",
  appId: "1:126493562229:web:ae383da00bc9d937fc6f3c",
  measurementId: "G-XL0V7H16VH",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
