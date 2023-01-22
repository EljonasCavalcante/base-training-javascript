// Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.

const pais = 'Brasil';
const cidade = new String('Rio');

console.log(pais.charAt(0)); // B
console.log(cidade.charAt(0)); // R
 
const listadeAnimais = ['cão', 'gato', 'cavalo']; // array


// ====== outro exemplo de transformar array
const lista = document.querySelectorAll('li');
console.log(lista) //NodeList(3) [li, li, li]

const listaArray1 = Array.prototype.slice.call(lista)//vira umaArray

//from não tem acesso ao constructor
const listaArray2 = Array.from(lista)// vira uma Array
console.log(listaArray1)//Array (3) [li, li, li]
console.log(listaArray2)//Array (3) [li, li, li]
