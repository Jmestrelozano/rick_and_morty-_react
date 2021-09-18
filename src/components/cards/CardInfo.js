import React from "react";
import "../cards/cardInfo.css";
export const CardInfo = ({
  personaje,
  handleView,
  openModal,
  seleccionarFavorito,
  color,
}) => {
  return (
    <div className="card-contenedor">
      <div className="contendor-image">
        <div className="card-img">
          <img src={personaje.image} alt="imagenes" />
        </div>
        <div className="favorito">
          <button
            onClick={(e) => seleccionarFavorito(personaje, e)}
            className="btn-favorito"
          >
            <i className="fas fa-star"></i>
          </button>
        </div>
      </div>

      <div
        onClick={() => {
          handleView(personaje.id);
          openModal();
        }}
        className="card-contenido"
      >
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
