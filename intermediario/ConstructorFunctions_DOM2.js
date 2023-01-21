function Dom(seletor){    
    this.element = function() {
        return document.querySelector(seletor) 
    }
    this.ativar = function(classe) {        
        this.element().classList.add(classe);
        
    }
}

const li = new Dom('li'); 
li.ativar('ativar') // li.ativar(colocar nome da classe) retorna para mim <li class= "nome que vc colocou"> </li>

const ul = new Dom('ul'); 
ul.ativar('funcionou')// ul.ativar(colocar nome da classe) retorna para mim <ul class= "nome que vc colocou"> </ul>

const lastLi = new Dom('li:last-child');
lastLi.ativar('novaclasse')