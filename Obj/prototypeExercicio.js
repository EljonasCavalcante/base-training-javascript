// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`}

const eljonas = new Pessoa( 'Eljonas', 'Cavalcante', 30)

// console.log(eljonas)
// console.log(eljonas.nomeCompleto())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
const verificar1 = Object.getOwnPropertyNames(NodeList.prototype)
// console.log('NodeList :',verificar1)

const verificar2 = Object.getOwnPropertyNames(HTMLAllCollection.prototype)
// console.log('HTMLCollection :',verificar2)

const verificar3 = Object.getOwnPropertyNames(Document.prototype)
// console.log('Document :',verificar3)


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // li.constructor.name = "HTMLLIElement"
li.click; // li.click.constructor.name = "function"
li.innerText; // li.innerText.constructor.name = "String"
li.value;// Number
li.hidden; // Boolean
li.offsetLeft;//Numeber
li.click(); // undefined

// Qual o construtor do dado abaixo:
 li.hidden.constructor.name;
 // String
