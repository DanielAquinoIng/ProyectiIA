import React from "react";
import "../css/clientes.css";
import uno from '../assets/images/unapersona.png'
import dos from '../assets/images/dospersonas.png'
import tres from '../assets/images/trespersonas.png'
import cuatro from '../assets/images/cuatropersonas.png'
import cinco from '../assets/images/cincopersonas.png'
import seis from '../assets/images/seispersonas.png'

const Clientes = () => {
    return (
        <div>
            <h1>¿Cuántas personas hay?</h1>
            <div class="flex-container-clientes">
                <div class="flex-item-personas">
                    <div className="numero">1</div>
                    <div className="content-img"><img src={uno} /></div>
                </div>
                <div class="flex-item-personas">
                    <div className="numero">2</div>
                    <div className="content-img"><img src={dos} /></div>
                </div>
                <div class="flex-item-personas">
                    <div className="numero">3</div>
                    <div className="content-img"><img src={tres} /></div>
                </div>
                <div class="flex-item-personas">
                    <div className="numero">4</div>
                    <div className="content-img"><img src={cuatro} /></div>
                </div>
                <div class="flex-item-personas">
                    <div className="numero">5</div>
                    <div className="content-img"><img src={cinco} /></div>
                </div>
                <div class="flex-item-personas">
                    <div className="numero">6</div>
                    <div className="content-img"><img src={seis} /></div>
                </div>
            </div>
        </div>
    );
};

export default Clientes;  