const carros = ['Ford','Fiat','Honda'];

const NovaArray = carros.map((item, index, array) =>{
    // console.log(item,index, array)
    return item.toUpperCase(); 
}) 


const num = [2 , 4 , 5, 6, 78]
const numX2 = num.map( i => i * 2);

console.log(numX2)
console.log(NovaArray)