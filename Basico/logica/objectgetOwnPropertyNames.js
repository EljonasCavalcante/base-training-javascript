// Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carro);
// ['marca', 'ano']
