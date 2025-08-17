// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcou6tlWqj3-sX-vSsPDVLQ2WjzqOSg6M",
  authDomain: "chatapp-e2f3d.firebaseapp.com",
  projectId: "chatapp-e2f3d",
  storageBucket: "chatapp-e2f3d.firebasestorage.app",
  messagingSenderId: "979273267798",
  appId: "1:979273267798:web:209f4b5d5b425863f399f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();