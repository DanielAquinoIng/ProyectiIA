import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup.component";
import Register from "./components/register";
import Plataforma from "./components/plataforma.component";
import Catalogo from "./components/catalogo.component";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        {/* <div>
          <div> */}
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/Plataform" element={<Plataforma />} />
          {/* <Route path="/Catalogo" element={<Catalogo />} /> */}
        </Routes>
        {/* </div>
        </div> */}
      </div>
    </Router>
  );
}
export default App;
