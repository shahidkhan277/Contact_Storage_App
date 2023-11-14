// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs-W1EuMl_g7vqdhZK6shSl89eyNAHRqA",
  authDomain: "first-firbase-project-542cc.firebaseapp.com",
  projectId: "first-firbase-project-542cc",
  storageBucket: "first-firbase-project-542cc.appspot.com",
  messagingSenderId: "810621953839",
  appId: "1:810621953839:web:8b6017dce5e4cd10d8e3da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);