const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];


console.log(instrumentos) //(3) ['Guitarra', 'Baixo', 'Violão']
console.log(instrumentos[2]) //Violão
console.log(precos) //(4) [49, 99, 69, 89]
console.log(precos[3]) //89

//======================super importante abaixo


const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}],
 function andar(nome) { console.log(nome) }];

 //====== acessando os valores acima
console.log(dados) //(3) [String, Array(3), ƒ]
console.log(dados[0])//'Tipo 1'
console.log(dados[1])//(3) ['Carro', 'Portas', {…}]
console.log(dados[1][0])//carro
console.log(dados[1][1])//porta
console.log(dados[1][2]) //{cor: 'Azul', preco: 2000}
console.log(dados[1][2].cor)// azul
console.log(dados[1][2].preco) // 2000
console.log(dados[2]) // ƒ andar(nome) { console.log(nome)





