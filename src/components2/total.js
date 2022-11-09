import React from "react";
import "../css/total.css";

const Total = () => {
    return (
        <body className="body-total">
            <div>
                <h1 className="Encabezado-Total">Tienes que cobrar</h1>
                <h1 className="Precio-Total">$120</h1>

                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </body>
    );
};

export default Total;  