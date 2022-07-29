// é boa prática separar a função callback do addEventListener,
// seja, declarar uma função ao invés de passar diretamente um fução anonima

const img = document.querySelector('img');
function callback() {
    console.log('Clicou')
}

img.addEventListener('click', callback);
img.addEventListener('click', callback()); // não use assim,undefined
img.addEventListener('click', function() {
    console.log('clicou');
})

img.addEventListener('click', () => {
    console.log('clicou')
})