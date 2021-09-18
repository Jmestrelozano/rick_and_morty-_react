import { URL_API } from "../global/globales";

export const getTodoPersonajes = async () => {
  try {
    const obtenerPage = localStorage.getItem("Page")|| 1
    let response = await fetch(`${URL_API}/character/?page=${obtenerPage}`);
    if (!response.ok) console.error("No se pudo realizar la peticion");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
