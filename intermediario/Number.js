const ano = 2018;
const preco = new Number(99);

//isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é uma integral.
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false


//integer = intergral é valor decimal
Number.isInteger(20); // true
Number.isInteger(23.6); // false


//parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100


//Arredonda o número com base no total de casas decimais do argumento.
const carro = 1000.455;
carro.toFixed(2) // 1000.46
const preco1 = 2.99;
preco.toFixed(); // 3

//Formata o número de acordo com a língua e opções passadas.
const preco2 = 59.49;
preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49

//==================
//abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número integral mais próximo.
//==================

Math.abs(-5.5); // 5.5 trasforma negativo em positivo
Math.ceil(4.8334); // 5 aredonda para cima
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4  aredonda para baixo
Math.floor(4.3); // 4
Math.round(4.8334); // 5 aredondad para o numero intero mais proximo
Math.round(4.3); // 4


//======================
//max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.
//=====================

Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100 aletatórios
Math.floor(Math.random() * 500);  // entre 0 e 500 aletatórios

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; // aletatórios entre o numero e outro
Math.floor(Math.random() * (max - min + 1)) + min;// aletatórios entre o numero e outro
