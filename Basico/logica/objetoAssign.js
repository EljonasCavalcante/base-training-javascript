const funcaoAutomovel = {
    acelerar() {
      return 'acelerou';
    },
    buzinar() {
      return 'buzinou';
    },
  }
  
  const moto = {
    rodas: 2,
    capacete: true,
  }
  
  const carro = {
    rodas: 4,
    mala: true,
  }
  
  Object.assign(moto, funcaoAutomovel);
  Object.assign(carro, funcaoAutomovel);
  
