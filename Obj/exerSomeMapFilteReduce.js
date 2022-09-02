// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll("section");
const arrayCursos = Array.from(cursos);

const objetosCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aula = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  return {
    titulo,
    descricao,
    aula,
    horas,
  };
});
console.log("Primeiro exercicio :", objetosCursos);
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numerosMaiores100 = numeros.filter((n) => n > 100);
console.log("Numeros maior que 100: ", numerosMaiores100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const fazparte = instrumentos.some((item) => {
  return item === "Baixo";
});
console.log("Terceiro exercicio :", fazparte);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

// colocando sinal de mais (+) '+item.preco.replace' transforma em numereo
const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace("R$", "").replace(",", ".");

  return acumulador + precoLimpo;
}, 0);

console.log(valorTotal);