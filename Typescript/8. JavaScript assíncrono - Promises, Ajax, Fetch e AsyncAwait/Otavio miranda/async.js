const aleatorio = function (min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};
const esperaAi = function (msg, tempo) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
};

async function AsyncWait() {
  try {
    console.log(await esperaAi("frase 1", aleatorio()));
    console.log(await esperaAi("frase 2", aleatorio()));
    console.log(await esperaAi("frase 3", aleatorio()));
  } catch (error) {
    console.log(error);
  }
}
AsyncWait();

// esperaAi("frase 1", aleatorio())
//   .then(function (response) {
//     console.log(response);
//     return esperaAi("frase 2", aleatorio());
//   })
//   .then(function (response) {
//     console.log(response);
//     return esperaAi("frase 3", aleatorio());
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
