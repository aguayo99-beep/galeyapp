import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAS3R6HYzaw18UzXUj7LTqw3zbqczzkfqg",
  authDomain: "galeriaaguayo.firebaseapp.com",
  projectId: "galeriaaguayo",
  storageBucket: "galeriaaguayo.appspot.com",
  messagingSenderId: "805697189241",
  appId: "1:805697189241:web:df302509c7b0b27bb6aba8",
  measurementId: "G-9EDM2VQTEW"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

