import React from "react";
import huevoestrellado from "../assets/images/Huevo-estrellado.png";
import jugonaranja from "../assets/images/Jugo-naranja.png";
import aceptar from "../assets/images/sucess.png";
import cancelar from "../assets/images/cancel.png"
import "../css/ordencorrecta.css";


import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from "@material-ui/core";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const ConfirmarOrden = () => {
  return (
    <React.Fragment>
      <h1 className="titulo-orden">¿Es correcto?</h1>
      <Container display="grid" placecontent="center">
        <Box className="caja" borderRadius={12} >
          <Grid container>
            <Grid container className="margenes">
              <img className="img-redonda" src={huevoestrellado} width={"80%"} /><h1 className="platillos">HUEVOS ESTRELLADOS</h1>
            </Grid>
            <Grid container className="margenes">
              <img className="img-redonda" src={jugonaranja} width={"80%"} /><h1 className="platillos">JUGO DE NARANJA</h1>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container >
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={4} marginTop="2%">
          <Button size="large" borderRadius={12} onClick="" type="button"><img className="img-redonda" src={aceptar} /></Button>
          <Button size="large" borderRadius={12} onClick="" type="button"><img className="img-redonda" src={cancelar} /></Button>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default ConfirmarOrden;