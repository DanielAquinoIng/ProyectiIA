import React from "react";

import "../css/vistasBD.css";

export function ItemMenu({ item }) {
  return (
    <>
      <div className="contenedor-item" key={item.IdItem}>
        <img src={item.Foto} alt={item.Nombre} className="imagen-item" />
        <div className="contenedor-nombre">
          <p className="nombre-item">{item.Nombre}</p>
        </div>
      </div>
    </>
  );
}