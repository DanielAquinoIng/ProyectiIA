import React from "react";
import "../css/mesas.css";
import { Link } from "react-router-dom";

const Mesas = () => {
    return (
        <div>
            <h1>Selecciona tu mesa</h1>
            <div class="flex-container">
                <Link to="/clientes"><div className="flex-item">1</div></Link>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
                <div className="flex-item">4</div>
                <div className="flex-item">5</div>
                <div className="flex-item">6</div>
            </div>
        </div>
    );
};

export default Mesas;  