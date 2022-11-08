import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { Grid, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import fondo from "./../assets/images/amo.jpg";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

//
import firebaseApp from "../components/credenciales";
import { getAuth, signOut } from "firebase/auth";

//Barra busqueda
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import XboxGames from "./Xboxgames";
import Nintendogames from "./Nintendogames";
import Playgames from "./Playgames";
import Steamgames from "./Steamgames";
import Perfil from "./Perfil";
import Historial from "./Historial";

//

//Estilos con el makeStyle
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

const pages = ["XBOX", "NINTENDO", "PLAY STATION", "STEAM"];
const settings = ["Perfil", "Compras", "Salir"];

export const Catalogo = () => {
  const auth = getAuth(firebaseApp);
  const user = auth.currentUser;

  const dataUser = {
    name: user.displayName,
    email: user.email,
    aidi: user.uid,
  };
  console.log("Datos del usuario en el catalogo: ", {
    name: user.displayName,
    email: user.email,
    aidi: user.uid,
  });

  // const { user, isAuthenticated, isLoading, logout } = useAuth0();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [xbox, setxbox] = React.useState(true);
  const [nintendo, setnintendo] = React.useState(false);
  const [play, setplay] = React.useState(false);
  const [steam, setsteam] = React.useState(false);
  const [perfil, setperfil] = React.useState(false);
  const [historial, sethistorial] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    // console.log("Event handleOpenNavMenu", event.currentTarget, event.target.value);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    console.log("Event handleOpenNavMenu");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //Setear para xbox
  const xboxContent = () => {
    setxbox(true);
    setplay(false);
    setnintendo(false);
    setsteam(false);
    setperfil(false);
    sethistorial(false);
    setAnchorElNav(null);
    console.log("Xbox", xbox, play, nintendo, steam);
  };

  //Setear para play
  const playContent = () => {
    setxbox(false);
    setplay(true);
    setnintendo(false);
    setsteam(false);
    setperfil(false);
    sethistorial(false);
    setAnchorElNav(null);
    console.log("play", xbox, play, nintendo, steam);
  };

  //Setear para nintendo
  const nintendoContent = () => {
    setxbox(false);
    setplay(false);
    setnintendo(true);
    setsteam(false);
    setperfil(false);
    sethistorial(false);
    setAnchorElNav(null);
    console.log("nintendo", xbox, play, nintendo, steam);
  };

  //Setear para steam
  const steamContent = () => {
    setxbox(false);
    setplay(false);
    setnintendo(false);
    setsteam(true);
    setperfil(false);
    sethistorial(false);
    setAnchorElNav(null);
    console.log("steam", xbox, play, nintendo, steam);
  };

  //Setear para perfil
  const perfilContent = () => {
    setxbox(false);
    setplay(false);
    setnintendo(false);
    setsteam(false);
    setperfil(true);
    sethistorial(false);
    setAnchorElUser(null);
    console.log("steam", xbox, play, nintendo, steam);
  };

  //Setear para compras
  const comprarContent = () => {
    setxbox(false);
    setplay(false);
    setnintendo(false);
    setsteam(false);
    setperfil(false);
    sethistorial(true);
    setAnchorElUser(null);
    console.log("steam", xbox, play, nintendo, steam);
  };

  //componente loading
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    // isAuthenticated && (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}

            <Typography
              variant="h6"
              noWrap
              // component="a"
              // href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              DYNAMITE GAMING
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            {/* <Typography
                variant="h5"
                noWrap
                component="a"
                // href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                key={0}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={xboxContent}
              >
                {pages[0]}
              </Button>
              <Button
                key={1}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={nintendoContent}
              >
                {pages[1]}
              </Button>
              <Button
                key={2}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={playContent}
              >
                {pages[2]}
              </Button>
              <Button
                key={3}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={steamContent}
              >
                {pages[3]}
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Abrir Opciones">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                    sx={{ width: 46, height: 46 }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key={0} onClick={perfilContent}>
                  <Typography textAlign="center">{settings[0]}</Typography>
                </MenuItem>
                <MenuItem key={1} onClick={comprarContent}>
                  <Typography textAlign="center">{settings[1]}</Typography>
                </MenuItem>
                <MenuItem key={2} onClick={() => signOut(auth)}>
                  <Typography textAlign="center">{settings[2]}</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Grid container component="main" className={useStyles.root}>
        <CssBaseline />
      </Grid>
      {xbox ? <XboxGames user={dataUser} /> : ""}
      {nintendo ? <Nintendogames user={dataUser} /> : ""}
      {play ? <Playgames user={dataUser} /> : ""}
      {steam ? <Steamgames user={dataUser} /> : ""}
      {perfil ? <Perfil user={dataUser} /> : ""}
      {historial ? <Historial user={dataUser} /> : ""}
    </>
    // )
  );
};
export default Catalogo;
