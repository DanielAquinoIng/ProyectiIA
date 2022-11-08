import React from "react";
import Juego from "./Juego";
import ConsultaJuegos from "../global/consultaJuegos";
import Grid from "@mui/material/Grid";
import "../css/plataforma.css";

export const Steamgames = (props) => {
  const juegos = ConsultaJuegos("PcGames");
  console.log("Datos dentro de la pestana steam", props.user);

  return (
    <div className="fondosteam">
      <Grid
        container
        justify="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        textAlign="center"
        className="Grid"
      >
        {juegos.map((juego) => (
          <Juego juego={juego} user={props.user} />
        ))}
      </Grid>
    </div>
  );
};
export default Steamgames;
