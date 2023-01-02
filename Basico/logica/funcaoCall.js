const carro = {
    marca: 'Ford',
    ano: 2018
  }
  
  function descricaoCarro() {
    console.log(this.marca + ' ' + this.ano);
  }
  
  descricaoCarro() // undefined undefined
  descricaoCarro.call() // undefined undefined
  descricaoCarro.call(carro) // Ford 2018
  