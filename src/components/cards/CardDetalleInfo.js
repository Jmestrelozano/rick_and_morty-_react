import React from "react";
import { CardBody } from "./CardBody";

export const CardDetalleInfo = ({ personaje }) => {
  return (
    <div className="card-contenedor">
      <div className="card-img">
        <img src={personaje.image} alt="imagenes" />
      </div>
      <div className="card-contenido">
      <CardBody personaje={personaje}/>
      </div>
    </div>
  );
};
