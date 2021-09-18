import { numeroAleatorio } from "../functions/numeroAleatorio";
import { URL_API } from "../global/globales";

export const obtenerPersonajesInteresantes = async () => {
  const [personaje1, personaje2, personaje3] = numeroAleatorio();
  try {
    let response = await fetch(
      `${URL_API}/character/${personaje1},${personaje2},${personaje3}`
    );

    if (!response.ok) {
      console.error("No se pudo realizar la peticion");
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null
  }
};
