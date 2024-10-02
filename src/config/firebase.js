// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApWguDz6bgXhcSkRgwOGgHw5ps9VqqRWE",
  authDomain: "contact-book-77c37.firebaseapp.com",
  projectId: "contact-book-77c37",
  storageBucket: "contact-book-77c37.appspot.com",
  messagingSenderId: "306989035183",
  appId: "1:306989035183:web:ed812db634a096eefcae5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database  = getFirestore(app);