import React from "react";
import { ItemMenu } from "./ItemMenu";
import ConsultaMenu from "./ConsultaMenu";

import "../css/vistasBD.css"

export const ListaBebidas = () => {
  const bebidas = ConsultaMenu("bebidas");

  return (
    <>
      <div>
        <ul className="lista-items">
            {bebidas.map((bebida) => (
              <li><ItemMenu item={bebida} /></li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ListaBebidas;