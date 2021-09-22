import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { getFiltroGender } from "../apis/getFiltroGender";
import { getFiltroPersonajes } from "../apis/getFiltroPersonajes";
import {  getObtenerPersonajeEspecifico } from "../apis/getObtenerPersonajeEspecifico";
import { getTodoPersonajesPaginacion } from "../apis/getObtenerTodosPersonajesPaginacion";
import { obtenerPersonajes } from "../apis/obtenerPersonajes";
import { obtenerPersonajesInteresantes } from "../apis/ObtenerPersonajesInteresantes";
import { BuscadorFiltro } from "../components/buscadorFiltro/BuscadorFiltro";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { MainVistaPrincipal } from "../components/MainVistaPrincipal";
import { BtnPaginador } from "../components/paginador/BtnPaginador";
import { TabsFiltros } from "../components/tabsFiltros/TabsFiltros";
import { useForm } from "../hooks/useForm";

let page = JSON.parse(localStorage.getItem("Page")) || 1;

export const RickyMortyPages = () => {
  const history = useHistory();
  const location = useLocation();
  const filterPersonaje = location.search.split("?q=");

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
    let results = await obtenerPersonajes();
    setGuardarPersonaje(results.results);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);

    const results = await getFiltroPersonajes(search);

    if (results !== null) {
      setGuardarPersonaje(results.results);
    }

    setReset();
  };

  const selectFilter = async (e) => {
    const filtro = e.target.textContent;
    const results = await getFiltroGender(filtro);

    if (results !== null && results !== undefined) {
      setGuardarPersonaje(results.results);
    }
  };

  const recordarFiltro = async () => {
    if (filterPersonaje[1] !== "") {
      const resultsPersonaje = await getFiltroPersonajes(filterPersonaje[1]);

      if (resultsPersonaje !== null) {
        setGuardarPersonaje(resultsPersonaje.results);
      }
    }
  };

  const handleView = (id) => {
    selectDetallesPersonaje(id);
  };
  const selectDetallesPersonaje = async (id) => {
    if (id !== undefined) {
      const results = await getObtenerPersonajeEspecifico(id);
      if (results !== null) {
        mostrarEpisodiosInfo(results);
        setDetallesPersonaje([results]);
      }
    }

    mostrarPersonajesInteresantes();
  };

  const mostrarEpisodiosInfo = async (detallePersonaje) => {
    setGuardarEpisodios([]);
    if (detallePersonaje !== undefined) {
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
    if (result !== null) {
      setGuardarPersonajesInteresantes(result);
    }
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const mostrarTodosPersonajesPaginas =async() =>{
    let results = await getTodoPersonajesPaginacion()
    setGuardarPersonaje(results.results);
  }

  const next = () => {
    setPaginador(paginador + 1 === 35 ? paginador : paginador + 1);
    localStorage.setItem(
      "Page",
      paginador + 1 === 35 ? paginador : paginador + 1
    );
    history.push(`?q=`);
    mostrarTodosPersonajesPaginas()
  };

  const previous = () => {
    setPaginador(paginador - 1 === 0 ? 1 : paginador - 1);
    localStorage.setItem("Page", paginador - 1 === 0 ? 1 : paginador - 1);
    history.push(`?q=`);
    mostrarTodosPersonajesPaginas()
  };

  const seleccionarFavorito = (data, e) => {
    const name =
      e.target.parentElement.parentElement.parentElement.parentElement
        .children[1].children[1].textContent;
    favoritos.push(data);
    idFavoritos.push(data.id);
    
    const dataArr = new Set(favoritos);

    let result = [...dataArr];
    localStorage.setItem("idFavoritos", JSON.stringify(idFavoritos));
    localStorage.setItem("favoritos", JSON.stringify(result));

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
    if (filterPersonaje[1] !== undefined) {
      recordarFiltro();
    }

  }, []);

  useEffect(() => {
    mostrarTodosPersonajesPaginas()
  },[])
  
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
      <BtnPaginador previous={previous} next={next} />
      <Footer />
    </>
  );
};
