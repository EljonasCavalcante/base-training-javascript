// agora vou fazer um evento que estará em lista. Para isso vou usar forEach para fazer o loop.


// selecionando todas as imagens
const imgs = document.querySelectorAll('img');


function hadleImg(event) {
    console.log(event.target)
    console.log(event.target.getAttribute('src'))
}

// fazer um loop de todas as imagens
imgs.forEach((img) => {
   img.addEventListener('click', hadleImg)
})