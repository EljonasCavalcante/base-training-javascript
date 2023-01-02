function areaQuadrado(lado) {
    return lado * lado;
  }
  
  const perimetroQuadrado = new Function('lado', 'return lado * 4');
  