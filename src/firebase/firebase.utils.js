// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create an instance of the Google provider object:
const providerForGoogle = new firebase.auth.GoogleAuthProvider();
const providerForTwitter = new firebase.auth.TwitterAuthProvider();

// Optional: Specify additional custom OAuth provider parameters that you want to send with the OAuth request.
// To add a custom parameter, call setCustomParameters on the initialized provider with
// an object containing the key as specified by the OAuth provider documentation and the corresponding value.
providerForGoogle.setCustomParameters({ prompt: "select_account" });
providerForTwitter.setCustomParameters({ prompt: "select_account" });

// To sign in with a pop-up window, call signInWithPopup:
export const signInWithGoogle = () => auth.signInWithPopup(providerForGoogle);
export const signInWithTwitter = () => auth.signInWithPopup(providerForTwitter);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// In case we want the whole library:
export default firebase;
