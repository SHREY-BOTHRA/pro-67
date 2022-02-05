import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0wLbIUthkjOZ7g26JxtsTZN_XIaRR0xs",
  authDomain: "election-app-16471.firebaseapp.com",
  databaseURL: "https://election-app-16471-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "election-app-16471",
  storageBucket: "election-app-16471.appspot.com",
  messagingSenderId: "545924328595",
  appId: "1:545924328595:web:a60721353aaf0ea7eff166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();