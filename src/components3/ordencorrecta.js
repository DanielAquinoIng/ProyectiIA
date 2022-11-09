import React from "react";
import huevoestrellado from "../assets/images/Huevo-estrellado.png";
import jugonaranja from "../assets/images/Jugo-naranja.png";
import "../css/ordencorrecta.css";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { borderRadius } from "@mui/system";
import { Grid } from "@material-ui/core";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";



const  ConfirmarOrden= () => {    
  return (
    <React.Fragment>
      <h1 className="titulo-orden">¿Es correcto?</h1>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#ee4036', height: 'auto' }} />
        <ListItem>
          <ListItemAvatar><Avatar src={huevoestrellado}/></ListItemAvatar>
          <ListItemText>HUEVO ESTRELLADO</ListItemText>
        </ListItem>
      </Container>
    </React.Fragment>
  );
};

export default ConfirmarOrden;