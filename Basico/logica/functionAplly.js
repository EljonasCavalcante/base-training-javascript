const numeros = [3,4,6,1,34,44,32];
Math.max.apply(null, numeros); // apply consegue receber uma array
Math.max.call(null, 3, 4, 5, 6, 7, 20); 


// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar
