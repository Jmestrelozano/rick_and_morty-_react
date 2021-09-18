import { URL_API } from "../global/globales";

export const getFiltroGender = async (gender) => {
  if (gender === "All") {
    try {
      let response = await fetch(`${URL_API}/character`);

      if (!response.ok) console.error("No se pudo realizar la peticion");
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      let response = await fetch(`${URL_API}/character/?gender=${gender}`);

      if (!response.ok) {
        console.error("No se pudo realizar la peticion");
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};
