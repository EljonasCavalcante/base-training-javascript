/* Some() , se pelo menos um return da iteração For truthy. ele retorna true */

const frutas = ['Batana', 'Pêra','Uva'];

const temUva = frutas.some((item) => {
    console.log(item) //Batana  Pêra   Uva 
    return item === 'Uva';
})

console.log(temUva)// true