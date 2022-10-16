//O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true


// && Compara se uma expressão e a outra é verdadeira 
// ELE RETORNA O PRIMEIRO FALSE E SE ELE ENTRACONTRA DOIS TRUE E RETORNARÁ O ULTIMO TRUE
//  A MISSÃO DO && É ACHA  O FALSE
// TBM RETORNA O VALOR SE NÃO FOR UMA CONDIÇÃO

true && true; // true
true && false; // false 
false && true; // false
'Gato' && 'Cão'; // 'Cão' ELE ACHOU DOIS TRUE ENTÃO ELE RETORNA O ULTIMO VALOR.
(5 - 5) && (5 + 5); // 0 ELE RETORNA A PRIMEIRA OPERAÇÃO FALSE QUE NO CASO É ZERO
'Gato' && false; // false 
(5 >= 5) && (3 < 6); // true


// || Compara se uma expressão ou outra é verdadeira 
// ELE RETORNA O PRIMEIRO TRUE E SE ENCONTRAR DOIS FALSE ELE VAI RETORNA O ULTIMO FALSE

//  A MISSÃO DO && É ACHA  O TRUE
// TBM RETORNA O VALOR SE NÃO FOR UMA CONDIÇÃO

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

