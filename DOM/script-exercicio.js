// retorne no console apenas as imagens que começaram com a palavra imagem
const pegarPalavraImagens = document.querySelectorAll(".animais img");
console.log(pegarPalavraImagens);

// selecione todos os links internos (onde começa com #)
const selecionarTodosLinks = document.querySelectorAll('[href^="#"]');
console.log(selecionarTodosLinks)

//Selecione o primeiro h2 dentro de .animais-descricao
const pegarH2 = document.getElementsByTagName("h2");
console.log(pegarH2[4]);

// Selecione o último p do site
const pegarUltimoP = document.querySelectorAll("p");
console.log(pegarUltimoP[--pegarUltimoP.length]); // pegar a ultima arry