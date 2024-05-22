// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXI8QG5jighJWdMwV63K5ohi-xlb-kU5g",
  authDomain: "codesprout-593fc.firebaseapp.com",
  projectId: "codesprout-593fc",
  storageBucket: "codesprout-593fc.appspot.com",
  messagingSenderId: "659565565944",
  appId: "1:659565565944:web:01a61c0d0c759ebc45e80d",
  measurementId: "G-Q3FP14VX8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
 export const db = getFirestore(app);
export const storage = getStorage(app)