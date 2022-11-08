import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class SignUp extends Component {
  render() {
    return (
      <div className="auth-wrapper" style={{marginTop:'5%'}}>
        <div className="auth-inner">
        <form>
          <h3>Registro</h3>
          <div className="mb-3">
            <label>Nombre(s)</label>
            <input
                type="text"
              className="form-control"
              placeholder="Walter Fitzroy"
            />
          </div>
          <div className="mb-3">
            <label>Apellido materno</label>
            <input type="text" className="form-control" placeholder="Aquino" />
          </div>
          <div className="mb-3">
            <label>Apellido paterno</label>
            <input type="text" className="form-control" placeholder="Villegas" />
          </div>
          <div className="mb-3">
            <label>Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="Dynamite@Gaming.com"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="********"
            />
          </div>
          <div className="d-grid">
              <Link to='../Catalogo' style={{textAlign:"center"}}>
                <button type="submit" className="btn btn-primary">
                  Registrarse
                </button>
              </Link>
          </div>
          <p className="forgot-password text-right">
            Ya tienes cuenta? <Link to="../sign-in">Inicia sesion!</Link>
          </p>
        </form>
        </div>
      </div>
    );
  }
}
