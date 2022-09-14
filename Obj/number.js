console.log(Number.isNaN('ds')) // false
console.log(Number.isInteger('1.990')) // false
console.log(parseFloat('1.990')) // 1.99
console.log(parseInt('1.990')) // 1


const preco = 1.99
console.log(preco.toFixed(4))//1.9900

let valor = 48.49;
valor = valor.toLocaleString('pt-US',{style: 'currency', currency : 'BRL'});
console.log(valor)// R$ 48,49 (string)

Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;