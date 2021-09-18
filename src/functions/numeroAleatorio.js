export const numeroAleatorio = () => {
  let arrayNum = [];

  for (let i = 1; i <= 3; i++) {
    arrayNum.push(Math.floor(Math.random() * (183 - 1)) + 1);
  }

  return arrayNum;
};
