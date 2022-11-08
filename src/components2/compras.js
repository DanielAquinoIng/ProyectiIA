// import React from "react";
import Juego from "./Juego";
import ConsultaJuegos from "../global/consultaJuegos";
// import { Col } from "reactstrap";
import React from "react";
import Grid from "@mui/material/Grid";
import "../css/plataforma.css";

export const Compras = () => {
  return (
    <div className="fondoxbox">
      <Grid
        container
        justify="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        textAlign="center"
        className="Grid"
      >
        <h1>Compras</h1>
        {/* {juegos.map((juego, index) => (
          <Juego key = {index} juego={juego} />
        ))} */}
      </Grid>
    </div>
  );
};
export default Compras;
