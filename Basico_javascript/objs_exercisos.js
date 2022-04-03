// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var pessoais = {
    nome: 'Eljonas',
    sobrenome: 'Cavalcante'
}
console.log(pessoais)



// Crie um método no objeto anterior, que mostre o seu nome completo

pessoais.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}
console.log(pessoais.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',  
} 

carro.preco = 3000

  console.log(carro)
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  var cao ={
      raca: 'labrador',
      cor: 'preto',
      idade: 10,
      latir(pessoa) {
        if(pessoa === 'homem'){
            return 'latir';
        } else {
            return 'nada';
        }
      }
  }

  console.log(cao.latir('homem')) // latir
  console.log(cao.latir('mulher')) // nada