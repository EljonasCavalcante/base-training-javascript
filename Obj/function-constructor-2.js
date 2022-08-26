/* Transforme o obejeto em um constructor function*/
const pessoa ={
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + 'andou')
    }
}

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.andar = function() {
        console.log(this.nome + ' andou')
    }
}



/* crie 3 pesssoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos*/
const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 15);


/* Crie um constructor function (Dom) para manipulação de lista de elemnto
do Dom. Deve conter as sequintes propriedades e método:
elements, retorna NodeList com elementos selecionados, addClass(class),
adiciona a  classe a todos elementos , removerClasse(classe), remover todas
as classes */

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.addClass
        })
    }   
}


const listaItens = new Dom('li');

