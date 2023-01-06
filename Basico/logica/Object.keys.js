// Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.

Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro = {
  marca: 'Ford',
  ano: 2018,
}
Object.keys(carro);
// ['marca', 'ano']
Object.values(carro);
// ['Ford', 2018]
Object.entries(carro);
// [['marca', 'Ford'], ['ano', 2018]]
