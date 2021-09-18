import React, { useEffect } from "react";
import Modal from "react-modal";

import { CardDetalleInfo } from "../components/cards/CardDetalleInfo";
import "../pages/estilos/modal.css"
import "../pages/estilos/detallePages.css"
import "../components/cards/cardDetalleInfo.css"


Modal.setAppElement("#root");

export function App({
  // detallesPersonaje,
  setIsOpen,
  modalIsOpen,
  episodios,
  personajesInteresantes,
  detallesPersonaje,
}) {
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
  }, [detallesPersonaje, episodios]);

  return (
    <div>
      <Modal className="reacts"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        //style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="fondo-modal">
          <img className="fondo-modal-img" src={process.env.PUBLIC_URL+'/assets/img/fondo-modal.png'} alt="fondo-modal" />
        </div>
        <div className="modal-seccion-perfil"></div>
        {detallesPersonaje !== [] && detallesPersonaje.length > 0 && (
          <>
            <div className="modal-perfil">
              <div className="modal-contenedor-img">
                <img
                  className="modal-img"
                  src={detallesPersonaje[0].image}
                  alt="imagen"
                />
              </div>

              <div className="modal-info-perfil">
                <p className="status-info">{detallesPersonaje[0].status}</p>
                <h6 className="titulo">{detallesPersonaje[0].name}</h6>
                <p className="gender">{detallesPersonaje[0].species}</p>
              </div>
            </div>

            <div className="contenedor-modal">
              <div className="informacion">
                <h5>Informacion</h5>
                <div className="contenedor-info-detalle">
                  <div className="info-detalle">
                    <p>Gender:</p>
                    <p className="gender">{detallesPersonaje[0].gender}</p>
                  </div>
                  <div className="info-detalle">
                    <p>Origin:</p>
                    <p className="origin">{detallesPersonaje[0].origin.name}</p>
                  </div>
                  <div className="info-detalle">
                    <p>Type:</p>
                    <p className="type">{detallesPersonaje[0].type}</p>
                  </div>
                </div>
              </div>
              <div className="episodios">
                <h5>Episodios</h5>
                <div className="contenedor-episodios-detalle">
                  <div className="episodios-detalle">
                    {episodios.length > 0 &&
                      episodios.map((episodio,index) => {
                        return (
                          <div key={index} className="info-episodio">
                            <p className="encabezado">{episodio.name}</p> 
                            <p className="titulo">{episodio.episode}</p>
                            <p className="fecha">{episodio.air_date}</p>
                          </div>
                        );
                      })}
                  </div>
        
                </div>
              </div>
              <div className="personajes-interesantes">
                <h5>Personajes interesantes</h5>

                <div className="card-detalle-info">
                  {personajesInteresantes.map((personaje, index) => {
                    return (
                      <CardDetalleInfo key={index} personaje={personaje} />
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}

        <img
          className="button-modal-close"
          onClick={closeModal}
          src={process.env.PUBLIC_URL+'/assets/img/Vector.png'}
          alt="boton-cerrar"
        />
      </Modal>
    </div>
  );
}
