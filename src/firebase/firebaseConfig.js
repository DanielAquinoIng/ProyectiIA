import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcXicgzHSTPKedEiucBUAGbuz60u3K0Sw",
  authDomain: "prueba-tienda-videojuegos.firebaseapp.com",
  projectId: "prueba-tienda-videojuegos",
  storageBucket: "prueba-tienda-videojuegos.appspot.com",
  messagingSenderId: "738716071234",
  appId: "1:738716071234:web:491a59f24550410fa484db",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export {db} ;