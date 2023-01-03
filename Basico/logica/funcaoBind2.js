const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
      return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
  }
  carro.acelerar(100, 20);
  // Ford acelerou 100 em 20
  
  const honda = {
    marca: 'Honda',
  };
  const acelerarHonda = carro.acelerar.bind(honda);
  acelerarHonda(200, 10);
  // Honda acelerou 200 em 10
  

  // um função que reproveita outra funcaçao