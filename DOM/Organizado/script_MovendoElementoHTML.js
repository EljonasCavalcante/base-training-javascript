const lista = document.querySelector('.animais-lista');
const contato= document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const animais = document.querySelector('.animais');



//contato.insertBefore(animais,titulo);// ele mover animais para antes do titulo
//contato.removeChild(titulo)// ele remover o elemento selecionado

/*Criando um novo elemento html pelo javascript */
const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo titulo';
novoH1.classList.add('titulo');

titulo.appendChild(novoH1);