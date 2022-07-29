
//======= exercicios===========

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]')// pegando o elemento

function hadleLink(event) {
   event.preventDefault();// previnido que não faça o padrão
   linksInternos.forEach((link) => {
    link.classList.remove('ativo');
   })

   event.addEventListener.classList.add('ativo') // adicionando classe ativo

}

linksInternos.forEach((link) => {
    link.addEventListener('click', hadleLink);
})



// Selecione todos os elementos do site começando a partir dobody,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *') // selecionando todos os elemento body

function handleElement(evento) {
    console.log(evento.currentTarget);
}


todosElementos.forEach((elemento) => {
    elemento.addEventListener.apply('click', handleElement)
})
console.log(todosElementos)



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// Se o usuário clicar na tecla (t), aumente todo o texto do site.