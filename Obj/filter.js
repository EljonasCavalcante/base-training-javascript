/* O método filter() cria um novo array 
com todos os elementos que passaram no teste 
implementado pela função fornecida. */

const frutas = ["Banana", undefined, null, "", "Pêra", "Uva"];

const arrayFrutas = frutas.filter((item) => {
  console.log('item :',item)
  return item 
})

console.log('Const arrayFrutas :', arrayFrutas)

 const aulas = [
   {
     nome: "HTML 1",
     min: 15,
   },
   {
     nome: "HTML 2",
     min: 10,
   },
   {
     nome: "CSS 1",
     min: 20,
   },
   {
     nome: "JS 1",
     min: 25,
   },
 ];

 const maior15 = aulas.filter((aula) => {
  console.log(aula.min)
  return aula.min >= 15;
 })

 console.log('Const maior15 :',maior15)
