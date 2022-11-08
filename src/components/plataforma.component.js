import React, { Component } from "react";
import nintendo from "../assets/nintendo.jpeg";
import playstation from "../assets/playstation.jpeg";
import steam from "../assets/steam.jpeg";
import xgod from "../assets/xgod.jpeg";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

// className="img-fluid"
// src={nintendo}
// alt="Nintendo"
// style={{borderRadius: 25}}
// width={"320px"}
// height={"180px"}

{
  /* <Link
type="submit"
to="../sign-in"
style={{ margin: 10, cursor: "pointer", boxShadow: "4px 14px 80px black", borderRadius: 25}}
className="zoom"
// onMouseEnter={{fontSize:"150%"}}
>
<img
  className="img-fluid"
  src={nintendo}
  alt="Nintendo"
  style={{borderRadius: 25}}
// width={"320px"}
// height={"180px"}
/>
</Link> */
}

// .boximg{
//   display: flex;
//   flex-direction: row;
//   margin: 0px;
//   padding: 0px;
//   background-color: pink;
//   border-radius: 50px;
//   border-width: 0px;
//   box-shadow: 10px 20px 15px 3px rgba(0, 0, 0, 0.397);
// }

export default class Plataform extends Component {
  render() {
    return (
      <div className="i1">
        <Link
          type="submit"
          to="../sign-in"
          className="zoom"
          // onMouseEnter={{ fontSize: "150%" }}
        >
          <img src={nintendo} />
        </Link>
        <Link
          type="submit"
          to="../sign-in"
          className="zoom"
          onMouseEnter={{ fontSize: "150%" }}
        >
          <img src={xgod} className="i2" />
        </Link>
        <Link
          type="submit"
          to="../sign-in"
          className="zoom"
          onMouseEnter={{ fontSize: "150%" }}
        >
          <img src={playstation} />
        </Link>
        <Link
          type="submit"
          to="../sign-in"
          className="zoom"
          onMouseEnter={{ fontSize: "150%" }}
        >
          <img src={steam} />
        </Link>
      </div>
    );
  }
}
