import React, { useEffect, useState } from "react";
import { getFiltroGender } from "../apis/getFiltroGender";
import { getFiltroPersonajes } from "../apis/getFiltroPersonajes";
import { getObtenerPersonaje } from "../apis/getObtenerPersonaje";
import { getTodoPersonajes } from "../apis/getObtenerTodosPersonajes";
import { obtenerPersonajesInteresantes } from "../apis/ObtenerPersonajesInteresantes";
import { BuscadorFiltro } from "../components/buscadorFiltro/BuscadorFiltro";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { MainVistaPrincipal } from "../components/MainVistaPrincipal";
import { TabsFiltros } from "../components/tabsFiltros/TabsFiltros";
import { useForm } from "../hooks/useForm";

let page = JSON.parse(localStorage.getItem("Page")) || 1;
//let personajes = JSON.parse(localStorage.getItem("PersonajesFiltro"));

export const RickyMortyPages = () => {
 
  const [modalIsOpen, setIsOpen] = useState(false);
  const [personaje, setGuardarPersonaje] = useState([]);
  const [value, inputValue, setReset] = useForm({
    search: "",
  });
  const [episodios, setGuardarEpisodios] = useState([]);
  const [personajesInteresantes, setGuardarPersonajesInteresantes] = useState(
    []
  );
  const [detallesPersonaje, setDetallesPersonaje] = useState([]);
  const [paginador, setPaginador] = useState(page);
  const [favoritos] = useState([]);
  const [idFavoritos] = useState([]);
  const { search } = value;


  const mostrarTodoPersonajes = async () => {
    let { info, results } = await getTodoPersonajes();
    setGuardarPersonaje(results);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { info, results } = await getFiltroPersonajes(search);
    setGuardarPersonaje(results);
    localStorage.setItem("PersonajesFiltro", JSON.stringify(results));
    setReset();
  };

  const selectFilter = async (e) => {
    const filtro = e.target.textContent;
    const { info, results } = await getFiltroGender(filtro);
    setGuardarPersonaje(results);
  };

  const handleView = (id) => {
    // setIdDetalle(id);
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
  const openModal = () => {
    setIsOpen(true);
  };

  const next = () => {
    setPaginador(paginador + 1 === 35 ? paginador : paginador + 1);
    localStorage.setItem(
      "Page",
      paginador + 1 === 35 ? paginador : paginador + 1
    );
  };

  const previous = () => {
    setPaginador(paginador - 1 === 0 ? 1 : paginador - 1);
    localStorage.setItem("Page", paginador - 1 === 0 ? 1 : paginador - 1);
  };

  const seleccionarFavorito = (data, e) => {
    const name =
      e.target.parentElement.parentElement.parentElement.parentElement
        .children[1].children[1].textContent;
    favoritos.push(data);
    idFavoritos.push(data.id);
    localStorage.setItem("idFavoritos", JSON.stringify(idFavoritos));
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    // setFavoritos(favoritos =>[...favoritos,data])

    if (name === data.name) {
      e.target.classList.add("active-color");
    } else {
      e.target.classList.remove("active-color");
    }
  };

  useEffect(() => {
    mostrarEpisodiosInfo();
    mostrarTodoPersonajes();
    selectDetallesPersonaje();
  }, [paginador]);

  return (
    <>
      <Header>
        <BuscadorFiltro
          inputValue={inputValue}
          search={search}
          handleSubmit={handleSubmit}
        />
      </Header>
      <TabsFiltros selectFilter={selectFilter} />

      <MainVistaPrincipal
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        resultado={personaje}
        handleView={handleView}
        episodios={episodios}
        personajesInteresantes={personajesInteresantes}
        detallesPersonaje={detallesPersonaje}
        seleccionarFavorito={seleccionarFavorito}
      />
      <div className="paginador-main">
        <button className="paginador-boton" onClick={previous}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="paginador-boton" onClick={next}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      <Footer />
    </>
  );
};
