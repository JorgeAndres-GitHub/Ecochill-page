import React from "react";
import "../css/Muestra.css";
import imagen from "../assets/muestra.jpg"; 

export function Muestra() {
  return (
    <div className="fondo-negro">
      <div className="contenedor-imagen">
        <img src={imagen} alt="Animada" className="imagen-animada" />
      </div>
    </div>
  );
}