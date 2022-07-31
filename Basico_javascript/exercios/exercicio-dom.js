// Retorne o url da página atual utilizando o objeto window
const url = window.location.href
console.log(url) //http://127.0.0.1:5500/DOM/index.html

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.titulo')
console.log(elementoAtivo) // <h1 class= "one"> Hello word </h1>

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem)

// Retorne a largura da janela 
const lagura = window.innerWidth;
console.log(lagura)// mostra no console o tamanho

//===============
const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;
console.log(h1Classes)


//================
function cliqueiComMouseTexto() {
    console.log('clicou em', h1Selecionado.innerText)
}
h1Selecionado.addEventListener('click', cliqueiComMouseTexto)