const numeros = [10, 25 ,30, 3, 54, 33 ,22];

const maiorNumero = numeros.reduce((anterior, atual) => {
    if(anterior > atual)
        return anterior
    else{
        return atual
    }
}, 0)

//pode ser feito assim também OPERADOR TERNÁRIO
// numeros.reduce((anterior, atual) => anterior > atual ? anteior : atual, 0)
console.log(maiorNumero)