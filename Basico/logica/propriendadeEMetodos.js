// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.

const frutas = ['Banana', 'Uva'];
frutas.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; // String

//============================================

const _frutas = ['Banana', 'Uva'];

frutas.hasOwnProperty('map'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true
