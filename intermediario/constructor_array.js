
const carros = new Array('Ford', 'Fiat', 'Honda');

carros[2] = 'Ferrari'
console.log(carros)  //(3) ['Ford', 'Fiat', 'Ferrari']
carros[3] = 'kia'
console.log(carros)  //(4) ['Ford', 'Fiat', 'Ferrari','kia']

console.log(carros.length)// 4

//==========Array From

const li = document.querySelectorAll('li'); // retorna uma NodeList
const arrayLi = Array.from(li); // retorna uma Array


//----- outro exemplo------
const obj = {
    0: 'Andre',
    1: 'Rafael',
    2: 'Teste',
    length: 3,
}

const objArray = Array.from(obj);
console.log(objArray)

//Verifica se o valor passado é uma array e retorna um valor booleano.
Array.isArray(li); // false

li = Array.from(li); // Array
Array.isArray(li); // true

//A palavra chave new não é necessária para utilizar o construtor Array.
Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1,2,3,4); // [1,2,3,4]