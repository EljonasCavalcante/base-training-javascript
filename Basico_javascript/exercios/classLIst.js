const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de clase
menu.classList.add('ativo');
menu.classList.add('ativo','mobile'); // add duas classe ou mais
menu.classList.remove('ativo');
menu..toggle('ativo'); //se tiver a classe ele remove e se não tive ele adiciona
menu.classList.contains('ativo');
menu.classList.replace('ativo','inativo'); // serve para substuir uma classe exemplo seria substituir um ativa por uma inativa


