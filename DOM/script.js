// adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('ativo');
})




// remova a classe ativo a todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
    item.classList.remove('ativo');
})

itensMenu[0].classList.add('ativo')

// verifique se as imagens possuem o atributos alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(imgs, possuiAtributo)
})


// Modifique o href do link no menu

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'http://www.google.com/');
console.log(link)