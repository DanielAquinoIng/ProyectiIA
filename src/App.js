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

//Importaciones de react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Prueba para componente mesas
import Mesas from "./components2/mesas";
import Clientes from "./components2/numeroClientes";
import Total from "./components2/total";

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
    <Router>
      <div className="fondosign">
      {usuarioGlobal ? (
        <>
          <Routes>
            <Route path="/" element={<Mesas/>} />
            <Route path="/clientes" element={<Clientes/>} />
            <Route path="/total" element={<Total/>} />
          </Routes>
        </>
      ) : (
        <div className="listoEntrar">
          {/* <h1>Bienvenido a Dynamite Gaming</h1>
          <h1>Estas listo para entrar?</h1> */}
          <Sign />
        </div>
      )}
    </div>
    </Router>
  );
}

export default App;
