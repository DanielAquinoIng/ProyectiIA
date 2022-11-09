import React from "react";
import cocinero from "../assets/images/Cocinero.jpg";
import mesero from "../assets/images/Mesero.jpg";
import maestra from "../assets/images/Maestra.jpg";
import "../css/menu.css";

import { Grid } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
  }));

const MenuUsuario = () => {

    
  return (
    <React.Fragment>
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Grid container spacing={3}>
            <Grid xs>
            <Item><img className="boton_cocina" src={cocinero} width={"80%"} href=""/><h3 className="cocina">COCINA</h3></Item>
            </Grid>
            <Grid xs>
            <Item><img className="boton_mesero" src={mesero} width={"80%"} href=""/><h3 className="mesero">MESERO</h3></Item>
            </Grid>
            <Grid xs>
            <Item><img className="boton_maestra" src={maestra} width={"80%"} href=""/><h3 className="maestra">MAESTRA</h3></Item>
            </Grid>
        </Grid>
      </Box>
    </Container>
    </React.Fragment>
  );
};

export default MenuUsuario;