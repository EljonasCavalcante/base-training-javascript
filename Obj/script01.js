function Dom(seletor) {
   seletor.element = function() {
      return document.querySelector(seletor);     
   },
   this.ativar = function() {      
      this.element().elementSelcionado.classList.add('ativar'); 
   }
}

const li = new Dom('li')



