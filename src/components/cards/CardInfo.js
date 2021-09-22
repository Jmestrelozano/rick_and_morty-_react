import React from "react";
import "../cards/cardInfo.css";
import { CardBody } from "./CardBody";
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
      <CardBody personaje={personaje}/>
      </div>
    </div>
  );
};
