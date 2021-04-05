import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDJ07PIMG4TiEnvsYYprfZgBtxcxdqPq_s",
    authDomain: "sns-web-6b078.firebaseapp.com",
    projectId: "sns-web-6b078",
    storageBucket: "sns-web-6b078.appspot.com",
    messagingSenderId: "387908366293",
    appId: "1:387908366293:web:27ebfb0ab880cacf6d975c",
    measurementId: "G-WYV8JSBJ4D"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {auth, db, projectStorage, timestamp }