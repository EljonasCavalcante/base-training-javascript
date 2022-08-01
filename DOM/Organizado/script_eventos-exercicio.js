/* Quando o usuário clicar nos links internos do site,
 adicione a classe ativo ao item clicado e remova dos
 demais itens caso eles possuam a mesma. Previna
 o comportamento padrão desses links */

const linkInterno = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();
    linkInterno.forEach((link) => {
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo')
}

linkInterno.forEach((link) =>{    
    link.addEventListener('click', handleLink)
})

 /* Selecione todos os elementos do site começando a partir do body,
 ao clique mostre exatamente quais elementos estão sendo clicados */

const elemetosHtml = document.querySelectorAll('body *');
function handleHtml(event) {   
    console.log(event.currentTarget);
}

elemetosHtml.forEach((itens) => {   
    itens.addEventListener('click', handleHtml)
})

/* Utilizando o código anterior, ao invés de mostrar no console,
remova o elemento que está sendo clicado, o método remove() remove um elemento
*/ 

// function handleHtml(event) {   
//     event.currentTarget.remove()
// }


/* Se o usuário clicar na tecla (t), aumente todo o texto do site. */
function handleClikT(event) {
    console.log(event.key)
    if(event.key === 't') {
        document.documentElement.classList.toggle('textoMaior');// documentElemente você está falando diretamente com elemento HTML
        // vale lembra que toggle add class se não e remove se tiver a classe da mesma.
    }
}

window.addEventListener('keydown', handleClikT)