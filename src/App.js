import Catalogo from "./components2/catalogo";
import { useAuth0 } from "@auth0/auth0-react";
import Fondito from './assets/images/fondito.jpg'
import Dynamite from './assets/images/pngwing.com.png'
import Sign from "./components2/sign"
import React, {useState,useEffect} from 'react';
///Prueba
import Menu from "./components3/menu";
import ConfirmarOrden from "./components3/ordencorrecta"

import firebaseApp from "./components/credenciales";
import{getAuth,onAuthStateChanged} from "firebase/auth"

const auth=getAuth(firebaseApp);

function App() {

  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  
  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase)
    {
      setUsuarioGlobal(usuarioFirebase);
    }
    else
    {
      setUsuarioGlobal(null);
    }
  });
  return (
    <div className="fondosign">
      {usuarioGlobal ? (
        <>
          <ConfirmarOrden/>
        </>
      ) : (
        <div className="listoEntrar">
          {/* <h1>Bienvenido a Dynamite Gaming</h1>
          <h1>Estas listo para entrar?</h1> */}
          <Sign/>
        </div>
      )}
    </div>
  );
}

export default App;
