const img = document.querySelector('img');

img.getAttribute('src'); //valor do src
img.setAttribute('alt', 'texto alternativo');//Muda o alt
img.hasAttribute('id');//true/false
img.removeAttribute('alt'); // remove o alt

img.hasAttribute(); //true / se tem algum atributo

const menu = document.querySelector('.menu');
menu.classList.add('ativo')
menu.classList.remove('azul')

// console.log(menu.classList)

console.log(img.getAttribute('src'))//img/imagem1.jpg
