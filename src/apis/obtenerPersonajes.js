import { URL_API } from "../global/globales";

export const obtenerPersonajes = async () => {
  try {
    // const personaje = JSON.parse(localStorage.getItem("PersonajesFiltro"))
    let response = await fetch(`${URL_API}/character`);

    if (!response.ok){
      console.error("No se pudo realizar la peticion");
      
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null
  }
};
