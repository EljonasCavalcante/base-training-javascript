// Retorne um número aleatório
// entre 1050 e 2000

let aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(aleatorio)

// Retorne o maior número da lista abaixo

const numeros = '4, 5, 20, 8, 9';
const arrayNum = numeros.split(', ')
console.log(...arrayNum)//4 5 20 8 9
console.log('Nnumero Maximo: ',Math.max(...arrayNum))//Nnumero Maximo: 20




// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

