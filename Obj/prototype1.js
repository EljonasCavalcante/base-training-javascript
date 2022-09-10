

const lista = document.querySelectorAll('li');

const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

[1,2,3].slice(); // existe
[1,2,3].from(); // não existe


const verOqueTem = Object.getOwnPropertyNames(Array)
const verOqueTem1 = Object.getOwnPropertyNames(Array.prototype)
console.log(verOqueTem)// 6 metodos
console.log(verOqueTem1) // 36 metodos

