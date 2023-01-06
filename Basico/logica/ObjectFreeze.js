// Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.

const carro = {
    marca: 'Ford',
    ano: 2018,
  }
  Object.freeze(carro);
  Object.seal(carro);
  Object.preventExtensions(carro);
  
  Object.isFrozen(carro); // true ele vai vericar se está Freeze segue a logica abaixo
  Object.isSealed(carro); // true
  Object.isExtensible(carro); // fase
  