
/* transversing => Serve para navegar pelo DOM */

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement); // elemento pai
console.log(lista.parentElement.parentElement);// elemento pai do pai
console.log(lista.nextElementSibling); // pega o proximo elemento abaixo dele.
console.log(lista.previousElementSibling);// pega o elemento posterior

console.log(lista.children[0]); // ele é coleção pegar atraves array
console.log(lista.children[--lista.children.length]);// --lista.children.length => pegar o último elemento
console.log(lista.querySelector('li:last-child')); // pela ultimo elemento do selecionador css