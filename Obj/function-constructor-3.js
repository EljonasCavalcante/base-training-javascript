
// Um método no protótipo que retorne o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}


Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const andre = new Pessoa('Andre', 'Cavalcante', 28);
