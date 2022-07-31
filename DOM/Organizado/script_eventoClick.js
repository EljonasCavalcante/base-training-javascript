const img = document.querySelector('img');
console.log(img) // conferindo que está pegando o que eu realmente quero

function callback(event) {
    console.log(event)
}
img.addEventListener('click', callback)
