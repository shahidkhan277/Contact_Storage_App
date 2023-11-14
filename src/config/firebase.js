// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "first-firbase-project-542cc",
  storageBucket: "first-firbase-project-542cc.appspot.com",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);