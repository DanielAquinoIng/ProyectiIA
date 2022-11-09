import React from "react";
import { ItemMenu } from "./ItemMenu";
import ConsultaMenu from "./ConsultaMenu";

import "../css/vistasBD.css"

export const ListaPlatillos = () => {
  const platillos = ConsultaMenu("platillos");

  return (
    <>
      <div>
        <ul className="lista-items">
            {platillos.map((platillo) => (
              <li><ItemMenu item={platillo} /></li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ListaPlatillos;