import { URL_API } from "../global/globales";

export const getObtenerPersonajeEspecifico = async (id) => {
  if (id !== 0) {
    try {
      let response = await fetch(`${URL_API}/character/${id}`);

      return await response.json();
    } catch (error) {
      console.error(error);
      return null
    }
  }
};
