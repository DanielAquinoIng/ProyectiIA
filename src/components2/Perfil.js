import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  CssBaseline,
} from "@mui/material";
import fondo from "./../assets/images/mine.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "94vh",
  },
  container: {
    // backgroundColor: "black",
    opacity: "1",
    height: "60%",
    marginTop: theme.spacing(25),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 0,
      with: "100%",
      height: "100%",
    },
  },
  div: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    backgroundColor: "white",
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Perfil = (props) => {
  const [edits, setedits] = React.useState(true);
  const [body, setBody] = useState({
    nickname: "",
    name: "",
    lastname: "",
    email: props.user.email,
    password: "",
    repassword: "",
  });
  console.log("Datos dentro de la pestana de perfil", props);
  const classes = useStyles();
  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    const correo = body.email.toString();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.correo) {
    } else {
      // alert("La dirección de email es incorrecta.");
      // <Stack>
      //   <Alert variant="filled" severity="error">
      //     This is an error alert — check it out!
      //   </Alert>
      // </Stack>;
      setBody({
        email: "",
      });
    }
  };

  const editar = () => {
    Swal.fire({
      title: "Quieres editar tus datos?",
      icon: "info",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Editar",
      denyButtonText: `No editar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ya puedes editar tu informacion",
          icon: "warning",
          timer: 1300,
          showConfirmButton: false,
        });
        setedits(false);
      } else if (result.isDenied) {
        Swal.fire({
          title: "Mantendremos tu informacion segura :) ",
          icon: "success",
          timer: 1300,
          showConfirmButton: false,
        });
        setedits(true);
      }
    });
  };

  const cambiarcontra = () => {
    (async () => {
      const { value: email } = await Swal.fire({
        icon: "warning",
        title: "cambiar contra contraseña",
        input: "email",
        confirmButtonText: "Recuperar",
        inputLabel: "Ingresa tu correo para recuperar la contraseña",
        inputPlaceholder: "correo@correo.com",
      });
      if (email) {
        // sendPasswordResetEmail(auth, email)
        //   .then(() => {
        //     Swal.fire({
        //       icon: "success",
        //       title: "Correo enviado",
        //       text: "Por favor revisa tu bandeja de entrada, en la seccion spam",
        //     });
        //   })
        //   .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     Swal.fire({
        //       icon: "error",
        //       title: "Oops...",
        //       text: `Parece ser que el usuario con el correo: ${email} no esta registrado en nuestra pagina :(`,
        //     });
        //     // ..
        //   });
      }
    })();
  };

  const davedata = () => {
    Swal.fire({
      title: "Tus datos ya estan correctos?",
      icon: "question",
      showDenyButton: true,
      confirmButtonText: "Si!",
      denyButtonText: `No estoy seguro...`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            // toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Datos guardados satisfactoriamente :)",
        });
        setedits(true);
      } else if (result.isDenied) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            // toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "warning",
          title: "Revisa bien tus datos",
        });
        setedits(false);
      }
    });
  };

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
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="../assets/images/amo.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Stack>
          <Typography component="h1" variant="h5">
            Perfil
          </Typography>
          <form className={classes.form}>
            <TextField
              disabled={edits}
              fullWidth
              autoFocus
              color="primary"
              margin="dense"
              variant="filled"
              label="Nombre"
              placeholder="Escribe tu Nick:)"
              name="name"
              value={body.name}
              // value="Daniel"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              disabled={edits}
              autoFocus
              color="primary"
              margin="dense"
              variant="filled"
              placeholder="Bruce 'El venganzas'"
              label="Apellido"
              name="lastname"
              value={body.lastname}
              // value="Aquino Villegas"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              disabled={edits}
              autoFocus
              color="primary"
              margin="dense"
              variant="filled"
              label="Correo Electronico"
              type="email"
              placeholder="Wayne"
              name="email"
              value={body.email}
              // value="Correo@correo.com"
              onChange={handleChange}
            />
            {edits ? (
              ""
            ) : (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={cambiarcontra}
              >
                Cambiar contrasena
              </Button>
            )}
            {edits ? (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={editar}
              >
                Editar
              </Button>
            ) : (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={davedata}
              >
                Guardar
              </Button>
            )}
          </form>
        </div>
      </Container>
    </Grid>
  );
};

export default Perfil;
