import React, { useState, useEffect } from "react";
import BarraBusqueda from "./barraBusqueda";
import "../css/historial.css";
import { db } from "../firebase/firebaseConfig";
import nintendo from "../assets/nintendo.jpeg";
import Swal from "sweetalert2";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  setDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

const Historial = (props) => {
  console.log("Aqui empieza el códifgo.");
  const [compras, setCompras] = useState([]);
  const getCompras = async () => {
    onSnapshot(collection(db, "users", props.user.aidi, "Compras"), (data) => {
      console.log("Obtuvimos los documentos.");
      const docs = [];
      data.forEach((item) => {
        docs.push({ ...item.data(), id: item.id });
      });
      console.log("estas son las compras>>>>>>", docs);
      setCompras(docs);
    });
  };

  useEffect(() => {
    getCompras();
  }, []);
  return (
    <div>
      <h1>Historial de compras</h1>
      <div className="card-wrap">
        {compras.map((compra) => (
          <article className="card">
            <header className="header-card">
              <p>
                <b>{compra.Fecha}</b>
              </p>
            </header>
            <footer className="footer-card">
              <div className="imagen-card">
                <img src={compra.Imagen} alt={compra.Nombre} />
              </div>
              <div className="datos-card">
                <h4>{compra.Nombre}</h4>
                <p className="precio">
                  <b>${compra.Precio}</b>
                </p>
                <p>{compra.Descripcion}</p>
                <p>{compra.id}</p>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Historial;
