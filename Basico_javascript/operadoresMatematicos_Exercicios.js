var total = 10 + 5 * 2 / 2 + 20; //35
console.log(total)
// Crie duas expressões que retornem NaN
var testNAN = "oi" /2
var testNAN2 = "oi" - 2
console.log(testNAN, testNAN2)
// Somar a string '200' com o número 50 e retornar 250
var num1 = "200";
var num2 = +"50";
var soma = Number(num1) + (num2)
console.log(soma)//250

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5
x++
console.log(x) //6

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

console.log(pesoPorDois)