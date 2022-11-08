// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcXicgzHSTPKedEiucBUAGbuz60u3K0Sw",
  authDomain: "prueba-tienda-videojuegos.firebaseapp.com",
  projectId: "prueba-tienda-videojuegos",
  storageBucket: "prueba-tienda-videojuegos.appspot.com",
  messagingSenderId: "738716071234",
  appId: "1:738716071234:web:491a59f24550410fa484db"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;