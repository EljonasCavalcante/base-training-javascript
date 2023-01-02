function Dom(seletor) {
    this.element = document.querySelector(seletor); //selecionando elemento
  };

  
  Dom.prototype.ativo = function(classe) {
    this.element.classList.add(classe); // adcionando nova classe
  };
  
  const lista = new Dom('ul');
  lista.ativo('ativar');
  console.log(lista);
  