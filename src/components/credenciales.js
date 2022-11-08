// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6IKkhRs3zd4Tsi7Jst_XWwvIXHT7A_uw",
  authDomain: "proyecto-ia-abb41.firebaseapp.com",
  projectId: "proyecto-ia-abb41",
  storageBucket: "proyecto-ia-abb41.appspot.com",
  messagingSenderId: "120081486842",
  appId: "1:120081486842:web:8fe00f4292dfbe06b38a43"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;