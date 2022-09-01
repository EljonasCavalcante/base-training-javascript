const frutas = ["Banana", "Abacate", "Pêra", "Uva"];

const every = frutas.every((fruta) => {
  return fruta;
});

console.log("Array :", frutas);
console.log("Const every :", every);

const indexUva = frutas.findIndex((item) => {
  return item === "Uva";
});

console.log("findIndex :", indexUva);

/* O método find() retorna o valor do
 primeiro elemento do array que satisfizer 
 a função de teste provida.
 Caso contrario, undefined é retornado. */

 