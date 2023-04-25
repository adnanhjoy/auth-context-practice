// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlmbWTBEgeApc4OjfEYw2NBcuAN3JQXUk",
  authDomain: "auth-context-practice-3de8f.firebaseapp.com",
  projectId: "auth-context-practice-3de8f",
  storageBucket: "auth-context-practice-3de8f.appspot.com",
  messagingSenderId: "1043436438493",
  appId: "1:1043436438493:web:38bb60da6b2c38665a6c34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app