import React from "react";
import { Link } from "react-router-dom";
import { App } from "../pages/detallesPages";
import { CardInfo } from "./cards/CardInfo";
import "../components/seccionFavoritos/favoritos.css";
export const MainVistaPrincipal = ({
  setIsOpen,
  modalIsOpen,
  openModal,
  resultado,
  handleView,
  episodios,
  personajesInteresantes,
  detallesPersonaje,
  seleccionarFavorito,
}) => {
  return (
    <div className="contenedor">
      <div style={{ marginBottom: "1rem" }} className="encabezado-favoritos">
        <h1 className="titulo">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/Principal/Favoritos"}
          >
            Mostrar Favoritos
          </Link>
        </h1>
        <div className="fondo-estrella">
          <img className="logo-estrella" src={process.env.PUBLIC_URL+'/assets/img/start.png'} alt="Estrella-logo" />
        </div>
      </div>

      <App
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        episodios={episodios}
        personajesInteresantes={personajesInteresantes}
        detallesPersonaje={detallesPersonaje}
      />
      <div className="card-info">
        {resultado !== undefined &&
          resultado.map((personaje, index) => {
            return (
              <CardInfo
                key={index}
                personaje={personaje}
                handleView={handleView}
                openModal={openModal}
                seleccionarFavorito={seleccionarFavorito}
                color=""
              />
            );
          })}
      </div>
    </div>
  );
};
