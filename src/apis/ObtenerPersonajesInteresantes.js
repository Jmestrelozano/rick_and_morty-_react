import { URL_API } from "../global/globales";

export const obtenerPersonajesInteresantes = async () => {
  try {
    let response = await fetch(
      `${URL_API}/character/${numeroAleatorio()},${numeroAleatorio()},${numeroAleatorio()}`
    );
    if (!response.ok) console.error("No se pudo realizar la peticion");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const numeroAleatorio = () => Math.floor(Math.random() * (183 - 1)) + 1;
