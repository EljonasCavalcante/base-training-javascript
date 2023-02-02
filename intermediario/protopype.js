//prototype está sempre liagado o função
  
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}


// adcionando método
Pessoa.prototype.andar = function() {
    return this.nome + ' pessoa andou'
}

// adcionando método
Pessoa.prototype.nadar = function() {
    return this.nome + ' pessoa nadou muito'
}

//acesso ao prototype
const andre = new Pessoa('André', 28);
console.log(typeof andre) // object
console.log(andre.toString()) // [objet Object]
console.log(andre.isPrototypeOf()) //false
console.log(andre.valueOf()) // Pessoa{nome:'andré,idade: 28}
andre.nome;
andre.idade;
andre.andar();
andre.nadar();

