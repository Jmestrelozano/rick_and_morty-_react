import React from "react";

export const CardDetalleInfo = ({ personaje }) => {
  return (
    <div className="card-contenedor">
      <div className="card-img">
        <img src={personaje.image} alt="imagenes" />
      </div>
      <div className="card-contenido">
        <p className="gender">
          {personaje.status} - {personaje.species}
        </p>
        <h4 className="titulo">{personaje.name}</h4>

        <p className="localizacion">first seen in</p>
        <p className="titulo-localizacion">{personaje.origin.name}</p>

        <p className="descripcion">last know location</p>
        <p className="titulo-descripcion">{personaje.location.name}</p>
      </div>
    </div>
  );
};