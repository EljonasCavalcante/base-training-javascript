const animaisSection = document.getElementById("animais");
console.log(animais);

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);
const contato = document.getElementsByClassName("grid-section contato");

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento
console.log(gridSection[0]);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

// selecionar o primeiro link interno

const linkInternos = document.querySelector('[href^="#"');
console.log(linkInternos);

// selecionar todos
const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);
