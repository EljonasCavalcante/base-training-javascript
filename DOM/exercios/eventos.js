const img = document.querySelector('img');

function callback(event) {
    console.log(event)
}

img.addEventListener('click', callback)
