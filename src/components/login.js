import React, { useState, Image } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./loginbutton";
import { LogoutButton } from "./logoutbutton";
import { Profile } from "./catalogo.component";
import icono from "../assets/images/icono.png";
import {
  Grid,
  Container,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import fondo from "./../assets/images/amo.jpg";
import { LockOpenOutlined as LockOutlinedIcon } from "@material-ui/icons";
import Carrousel from "./carrusel";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },
  container: {
    opacity: "1",
    height: "30%",
    marginTop: theme.spacing(30),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 0,
      with: "100%",
      height: "100%",
    },
  },
  div: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const [body, setBody] = useState({
    nickname: "",
    password: "",
  });
  const classes = useStyles();
  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    console.log(body);
  };

  const { isAuthenticated } = useAuth0();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Container
        component={Paper}
        elevation={5}
        maxWidth="xs"
        className={classes.container}
      >
        <div className={classes.div}>
          <Avatar className={classes.avatar}>
            {/* <Image src={icono} /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicia sesión
          </Typography>
          <form className={classes.form}>
            <LoginButton />
            <Carrousel />
            <Profile />
            <LogoutButton />
          </form>
        </div>
      </Container>
    </Grid>
  );
};

export default Login;
