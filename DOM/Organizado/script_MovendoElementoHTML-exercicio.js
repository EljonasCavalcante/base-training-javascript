// duplique o menu e adicione ele no copy (no footer)
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu)


// selecione p priomeiro DT da dl de faq
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');

console.log(primeiroDt)

//selecione o DD referenteao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD)

// susbtitua o conteúdo html de .faq pelo .animais
const animais = document.querySelector('.animais')
faq.innerHTML = animais.innerHTML

