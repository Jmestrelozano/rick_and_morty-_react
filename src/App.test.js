
import { getFiltroPersonajes } from "./apis/getFiltroPersonajes";


describe("test functions api´s ", () => {
  // test("Tamaño del array", async () => {
  //   const rate = await getFiltroPersonajes("Rick");
  // console.log(rate)
  //   expect(rate.results.length).toEqual(20);
  //   expect(fetch).toHaveBeenCalledTimes(1);
  // });

  test("Manejando los errores", async () => {
    const rate = await getFiltroPersonajes("jjjjj");
    console.log(rate)
    expect(rate).toEqual(null);
  });
});
