import React from "react";
import { TarjetaMesero } from "./TarjetaMesero";
import ConsultaMeseros from "./ConsultaMeseros";

import "../css/vistasBD.css"

export const ListaMeseros = () => {
  const meseros = ConsultaMeseros();

  return (
    <>
      <div>
        <ul className="lista-items">
            {meseros.map((mesero) => (
              <li><TarjetaMesero mesero={mesero} /></li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ListaMeseros;
