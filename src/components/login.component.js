import React, { Component } from "react";
import { Link } from "react-router-dom";
// import SignUp from "./signup.component";
import dynamite from '../assets/pngwing.com.png'

export default class Login extends Component {
  render() {
    return (
      <div className="auth-wrapper" style={{marginTop:'5%'}}>
        <div className="auth-inner">
          {/* <img src="../assets/pngwing.com.png" /> */}
          <img src={dynamite} className="img-fluid" />
          <form>
            <h3>Hola, ingresa tus datos:</h3>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Dynamite@Gaming.com"
              />
            </div>
            <div className="mb-3">
              <label>Constraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="********"
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Recuerdame
                </label>
              </div>
            </div>
            <div className="d-grid">
              <Link type="submit" className="btn btn-primary" to="../Catalogo">
                Entrar
              </Link>
            </div>
            <p className="no-cuenta text-right">
              ¿No tienes cuenta? <a href="../sign-up">Registrate</a>
            </p>
            <p className="forgot-password text-right">
              Olvidaste tu <a href="#">contraseña?</a>
            </p>
          </form>
        </div>
      </div>
    )
  }
}
