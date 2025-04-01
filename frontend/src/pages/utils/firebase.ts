// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjt7PF_PtocixQFnTP-MR4WTzK1aORpws",
  authDomain: "leetcode-clone-86cb0.firebaseapp.com",
  projectId: "leetcode-clone-86cb0",
  storageBucket: "leetcode-clone-86cb0.firebasestorage.app",
  messagingSenderId: "601835756653",
  appId: "1:601835756653:web:4f46c0c8a5719a6d2db364",
  measurementId: "G-S95B51MVT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
