var profissao = 'Designer';

// não consigo acessar variavel dentro de um escorpo de um função
function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(profissao)
console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//console.log(outrosDados()); // retorna um erro
