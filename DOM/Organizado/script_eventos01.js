const h1 = document.querySelector('h1');

function handEvent(event) {
    console.log(event.type, event)
}

h1.addEventListener('click' , handEvent)// evento de click
h1.addEventListener('mouseenter' , handEvent) // entra com seta do mouse no lugar definido

window.addEventListener('scroll', handEvent) // evento de scroll
window.addEventListener('reside', handEvent) // evento que motra ativa quando diminue e aumetar a tamanho da tela
window.addEventListener('keydown', handEvent) // evento que ocorre quando aperta qualquer tecla
// (e também identifica a tleca que apertamos)