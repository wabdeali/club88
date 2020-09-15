import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: "process.env.REACT.APP.FIREBASE.APP.ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const authentication = firebase.auth();
const db = firebase.firestore();

export { authentication, db };