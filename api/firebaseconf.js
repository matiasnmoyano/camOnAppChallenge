// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4_keqZzvHRfyxTDqT7OB-iX9dYnsn06c",
  authDomain: "movieschallenge-59dfd.firebaseapp.com",
  projectId: "movieschallenge-59dfd",
  storageBucket: "movieschallenge-59dfd.appspot.com",
  messagingSenderId: "1052364397262",
  appId: "1:1052364397262:web:89820e83e93427692b4e9f",
  measurementId: "G-LNTCYSBHY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);
console.log(storageRef)

export {storage}