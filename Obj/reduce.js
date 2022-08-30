// acumulador

/* .reduce(callback(acumulador, valorAtual, index, array), valorInicial) */

const aulas = [10, 20, 25];

const reduceAulas =  aulas.reduce((acumulador, item, index, array) => {
    console.log(acumulador, item, index, array)
}, 100)

/* 
resolução:
100 10 0 [ 10, 20, 25 ]
undefined 20 1 [ 10, 20, 25 ]
undefined 25 2 [ 10, 20, 25 ] */