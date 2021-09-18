import React from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

import "../seccionFavoritos/favoritos.css";
import { CardInfo } from "../cards/CardInfo";
import { useState } from "react/cjs/react.development";
import { App } from "../../pages/detallesPages";
import { getObtenerPersonaje } from "../../apis/getObtenerPersonaje";
import { obtenerPersonajesInteresantes } from "../../apis/ObtenerPersonajesInteresantes";
import { useHistory } from "react-router";
export const Favoritos = () => {
  const [OpenModal, setOpenModal] = useState(false);
  const favoritos = JSON.parse(localStorage.getItem("favoritos"));
  const [detallesPersonaje, setDetallesPersonaje] = useState([]);
  const [episodios, setGuardarEpisodios] = useState([]);
  const [personajesInteresantes, setGuardarPersonajesInteresantes] = useState(
    []
  );
  const history = useHistory();
  const openModal = () => {
    setOpenModal(true);
  };
  const handleView = (id) => {
    console.log(id);
    selectDetallesPersonaje(id);
  };

  const selectDetallesPersonaje = async (id) => {
    if (id !== undefined) {
      const results = await getObtenerPersonaje(id);
      mostrarEpisodiosInfo(results);
      setDetallesPersonaje([results]);
    }

    mostrarPersonajesInteresantes();
  };

  const mostrarEpisodiosInfo = async (detallePersonaje) => {
    setGuardarEpisodios([]);
    if (detallePersonaje !== undefined) {
      //console.log(detallePersonaje,"episodios para mostrat")

      const paginacion_visible = 6;
      let numeroPagina;
      let paginaLista = [];
      const getNumberOfPages = () => {
        return Math.ceil(detallePersonaje.episode.length / paginacion_visible);
      };
      numeroPagina = getNumberOfPages();

      let inicio = (1 - 1) * numeroPagina;
      let fin = inicio + numeroPagina;
      paginaLista = detallePersonaje.episode.slice(inicio, fin);

      for (const episodio of paginaLista) {
        let response = await fetch(episodio);
        let result = await response.json();
        setGuardarEpisodios((episodios) => [...episodios, result]);
      }
    }
  };
  const mostrarPersonajesInteresantes = async () => {
    let result = await obtenerPersonajesInteresantes();

    setGuardarPersonajesInteresantes(result);
  };
  return (
    <>
      <Header></Header>
      <div className="contenedor">
        <div className="encabezado-favoritos">
          <h1 className="titulo">Mostrar Favoritos</h1>
          <div className="fondo-estrella">
            <img className="logo-estrella" src={process.env.PUBLIC_URL+'/assets/img/start.png'} alt="Estrella-logo" />
          </div>
        </div>
        <a onClick={() => history.goBack()}>Regresar</a>
        <App
          setIsOpen={setOpenModal}
          modalIsOpen={OpenModal}
          episodios={episodios}
          personajesInteresantes={personajesInteresantes}
          detallesPersonaje={detallesPersonaje}
        />
        <div style={{ marginTop: "1rem" }} className="card-info">
          {favoritos.map((favorito, index) => {
            return (
              <CardInfo
                key={index}
                personaje={favorito}
                handleView={handleView}
                openModal={openModal}
                seleccionarFavorito={[]}
                color="#F2994A"
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
