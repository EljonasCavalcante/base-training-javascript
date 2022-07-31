
const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault(); // previnindo que aconteça o padrão.
    console.log(event, this)// this se refere a primeiro elemento no caso o link externo
    console.log(event.currentTarget)// faz a mesma coisa que o THIS
}

linkExterno.addEventListener('click', handleLinkExterno)
