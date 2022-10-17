
/* ====== ACHANDO O NUMERO PAR OU IMPAR */

// Para saber se um dado numero é par ou ímpar a melhor maneira é usando o
//  operador modulus/resto, %. Que retorna o resto da divisão de dois numeros.
// Se n % 2 der resto zero, o numero é par, e impar caso contrário.

var n = 6 // digitar o numero aqui para conferir.
var resultado = n % 2 == 0 ? 'Par' : 'Impar';
console.log(n + ' é ' + resultado)