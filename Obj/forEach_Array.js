const carros = ['Ford','Fiat','Honda'];

carros.forEach((item, index, array) => {
    array[index] = 'teste'
    console.log(item, index, array);
})

// console.log(carros);