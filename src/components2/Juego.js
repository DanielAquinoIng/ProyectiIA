import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Swal from "sweetalert2/dist/sweetalert2.js";
import firebaseApp from "../components/credenciales";
import { getAuth } from "firebase/auth";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Juego = ({ juego }) => {
  const fecha = new Date();
  const añoActual = fecha.getFullYear();
  const mesActual = fecha.getMonth() + 1;
  const hoy = fecha.getDate();
  const feactual =
    hoy.toString() + "/" + mesActual.toString() + "/" + añoActual.toString();

  // console.log("fecha: ", {
  //   ano: añoActual,
  //   mes: mesActual,
  //   hoys: hoy,
  //   date: feactual,
  // });
  const auth = getAuth(firebaseApp);
  const user = auth.currentUser;

  const dataUser = {
    name: user.displayName,
    email: user.email,
    aidi: user.uid,
  };
  // console.log("Datos del usuario en el AAAAAAAAA: ", {
  //   name: user.displayName,
  //   email: user.email,
  //   aidi: user.uid,
  // });

  const [xbox, setxbox] = React.useState(true);
  const [comprita, setComprita] = React.useState(false);
  const [modal, setModal] = useState(false);
  const handleToggle = () => setModal(!modal);
  // console.log("Datos de los juegos>>>>>>>>>", this.props);

  const subircompra = async () => {
    const consulta = doc(collection(db, "users", dataUser.aidi, "Compras"));
    await setDoc(consulta, {
      Nombre: juego.NombreJuego,
      Imagen: juego.ImagenJuego,
      Descripcion: juego.DescripcionJuego,
      Fecha: feactual,
      Precio: juego.PrecioJuego,
    });
  };

  const abriralert = () => {
    Swal.fire({
      confirmButtonText: "Comprar!",
      backdrop: "rgba(0, 0, 0, 0.85)",
      width: "40%",
      title: juego.NombreJuego,
      text: juego.DescripcionJuego,
      imageHeight: "97%",
      imageWidth: "100%",
      imageUrl: juego.ImagenJuego,

      footer: "$" + juego.PrecioJuego + ".00 mx",
      // html: '<header class="header-card"><p><b>28 de mayo</b></p></header><footer class="footer-card"><div class="imagen-card"><img src="https://cdn-prod.scalefast.com/public/assets/user/122595/image/cdb3282186e2abc6d0b0f610e9ec39c2.png" alt="Elden ring" /></div><div class="datos-card"><h4>Elden Ring</h4><p class="precio"><b>$1,500.00</b></p><p>ELDEN RING, desarrollado por FromSoftware, Inc. y BANDAI NAMCO Entertainment Inc. es un RPG de fantasía, acción y aventura ambientado en un mundo creado por Hidetaka Miyazaki y George R. R. Martin. El peligro y el descubrimiento están en cada giro del juego más grande de FromSoftware hasta la fecha.</p><p>AASAS343434JKDJS3434</p></div></footer>',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        comprarcosas();
      } else if (result.isDenied) {
        setComprita(false);
      }
    });
  };

  const comprarcosas = () => {
    Swal.fire({
      confirmButtonText: "Confirmar!",
      showDenyButton: true,
      denyButtonText: "No quiero",
      backdrop: "rgba(0, 0, 0, 0.85)",
      width: "40%",
      title: juego.NombreJuego,
      text:
        "El precio es de: " +
        "$" +
        juego.PrecioJuego +
        ".00 mx " +
        "Para confirmar la compra presiona el boton 'Confirmar'",
      imageHeight: "97%",
      imageWidth: "100%",
      // html: '<header class="header-card"><p><b>28 de mayo</b></p></header><footer class="footer-card"><div class="imagen-card"><img src="https://cdn-prod.scalefast.com/public/assets/user/122595/image/cdb3282186e2abc6d0b0f610e9ec39c2.png" alt="Elden ring" /></div><div class="datos-card"><h4>Elden Ring</h4><p class="precio"><b>$1,500.00</b></p><p>ELDEN RING, desarrollado por FromSoftware, Inc. y BANDAI NAMCO Entertainment Inc. es un RPG de fantasía, acción y aventura ambientado en un mundo creado por Hidetaka Miyazaki y George R. R. Martin. El peligro y el descubrimiento están en cada giro del juego más grande de FromSoftware hasta la fecha.</p><p>AASAS343434JKDJS3434</p></div></footer>',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        subircompra();
        Swal.fire({
          title: "Gracias por tu compra :)",
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });

        setComprita(true);
      } else if (result.isDenied) {
        Swal.fire({
          title: "Tal vez otro juego sea tu tu agrado :(",
          icon: "warning",
          timer: 2000,
          showConfirmButton: false,
        });
        setComprita(false);
      }
    });
  };

  return (
    <React.Fragment>
      <Grid item xs={2} sm={4} md={4} key={juego.id}>
        <Card
          style={{
            width: "80%",
            height: "80%",
            margin: "auto",
            // marginBottom: "0px",
          }}
          onMouseEnter={{ fontSize: "120%" }}
          className="zoom"
          onClick={abriralert}
        >
          <CardMedia
            component="img"
            height="80%"
            image={juego.ImagenJuego}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {juego.NombreJuego}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              $ {juego.PrecioJuego}.00 mx
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
export default Juego;

// html:
//         "<Box sx={{ maxWidth: 400, flexGrow: 1, margin:'auto' }}>" +
//         "<Paper" +
//         "square" +
//         "elevation={0}" +
//         "sx={{" +
//         "display: 'flex'," +
//         "alignItems: 'center'," +
//         "height: 50," +
//         "pl: 2," +
//         "bgcolor: 'background.default'," +
//         "}}" +
//         ">" +
//         "<Typography><strong>Galeria</strong></Typography>" +
//         "</Paper>" +
//         "<AutoPlaySwipeableViews" +
//         "axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}" +
//         "index={activeStep}" +
//         "onChangeIndex={handleStepChange}" +
//         "enableMouseEvents" +
//         ">" +
//         "{images.map((step, index) => (" +
//         "<div key={step.label}>" +
//         "{Math.abs(activeStep - index) <= 2 ? (" +
//         "<Box" +
//         "component='img'" +
//         "sx={{" +
//         "height: 255," +
//         "display: 'block'," +
//         "maxWidth: 400," +
//         "overflow: 'hidden'," +
//         "width: '100%'," +
//         "}}" +
//         "src={step.imgPath}" +
//         "alt={step.label}" +
//         "/>" +
//         ") : null}" +
//         "</div>" +
//         "))}" +
//         "</AutoPlaySwipeableViews>" +
//         "<MobileStepper" +
//         "steps={maxSteps}" +
//         "position='static'" +
//         "activeStep={activeStep}" +
//         "nextButton={" +
//         "<Button" +
//         "size='small'" +
//         "onClick={handleNext}" +
//         "disabled={activeStep === maxSteps - 1}" +
//         ">" +
//         "Next" +
//         "{theme.direction === 'rtl' ? (" +
//         "<KeyboardArrowLeft />" +
//         ") : (" +
//         "<KeyboardArrowRight />" +
//         ")}" +
//         "</Button>" +
//         "}" +
//         "backButton={" +
//         "<Button size='small' onClick={handleBack} disabled={activeStep === 0}>" +
//         "{theme.direction === 'rtl' ? (" +
//         "<KeyboardArrowRight />" +
//         ") : (" +
//         "<KeyboardArrowLeft />" +
//         ")}" +
//         "Back" +
//         "</Button>" +
//         "}" +
//         "/>" +
//         "</Box>",
