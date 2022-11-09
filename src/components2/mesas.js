import React from "react";
import "../css/mesas.css";
import { Link } from "react-router-dom";

const Mesas = () => {
    return (
        <div>
            <h1>Selecciona tu mesa</h1>
            <div class="flex-container">
                <Link to="/clientes" style={{ textDecoration: 'none' }}><div className="flex-item">1</div></Link>
                <Link to="/clientes" style={{ textDecoration: 'none' }}><div className="flex-item">2</div></Link>
                <Link to="/clientes" style={{ textDecoration: 'none' }}><div className="flex-item">3</div></Link>
                <Link to="/clientes" style={{ textDecoration: 'none' }}><div className="flex-item">4</div></Link>
                <Link to="/clientes" style={{ textDecoration: 'none' }}><div className="flex-item">5</div></Link>
                <Link to="/clientes" style={{ textDecoration: 'none' }}><div className="flex-item">6</div></Link>
            </div>
        </div>
    );
};

export default Mesas;  