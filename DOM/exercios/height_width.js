// Estas são propriedade e métodos dos obejtos ELEMENT e HTMLelement,
// A maioria são Readonly -->O readonlyatributo é um atributo booleano.

const section = document.querySelectorAll('.animais');

section.clientHeight; // height + padding
section.offsetHeight;// height + padding + border
section.scroollHeight;// height total, mesmo dento do scroll

//Exercicio

// verifique a distância da primeira imagem
// em relação ao top´da página
const img = document.querySelector('img');
const imgTop = img.affsetTop;
 console.log(imgTop);


// Retorne a soma da largura de todas as imagens

// Verifique se o links da pag possuel o mínimo recomenda
// para telas utilizadas para o dedo.(48px/48px de acordo com o google)


// Se o Browser for menor que 720px, adicione a classe menu-mobile ao menu