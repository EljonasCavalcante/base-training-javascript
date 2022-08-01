const h1 = document.querySelector('h1');
const animaisList = document.querySelector('.animais-descricao ');

//h1.innerHTML = '<p>mudando texto</p>' // innerHTML coloca dentro do HTML
h1.outerHTML = '<p>mudando texto</p>' // outerHTML substuir 
console.log(h1.innerHTML);
console.log(h1.outerHTML);



console.log(animaisList.innerHTML);