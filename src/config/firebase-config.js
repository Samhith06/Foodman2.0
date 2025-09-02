// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword ,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVKQp-Qzw92czHxsDq-2hp8uXFm7M_w10",
  authDomain: "food-delivery-c9130.firebaseapp.com",
  projectId: "food-delivery-c9130",
  storageBucket: "food-delivery-c9130.firebasestorage.app",
  messagingSenderId: "1087620173304",
  appId: "1:1087620173304:web:b0e46d4468f2f39be7da0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
auth.languageCode = 'it';
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export default app;

// firebase login
// firebase init
// firebase deploy