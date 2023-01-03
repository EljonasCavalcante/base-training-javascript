function imc(altura, peso) {
    return peso / (altura * altura);
  }
  
  const imc180 = imc.bind(null, 1.80);
  
  imc(1.80, 70); // 21.6
  imc180(70); // 21.6
  