// Retorne o url da página atual utilizando o objeto window
const url = window.location.href
console.log(url) //http://127.0.0.1:5500/DOM/index.html

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.one')
console.log(elementoAtivo) // <h1 class= "one"> Hello word </h1>

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem)

// Retorne a largura da janela 
const lagura = window.innerWidth;
console.log(lagura)