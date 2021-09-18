import { URL_API } from "../global/globales";

export const getFiltroPersonajes = async (name) => {
  try {
    // const personaje = JSON.parse(localStorage.getItem("PersonajesFiltro"))
    let response = await fetch(`${URL_API}/character/?name=${name}`);

    if (!response.ok) console.error("No se pudo realizar la peticion");

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
