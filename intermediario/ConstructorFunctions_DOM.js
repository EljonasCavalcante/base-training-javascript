const Dom = {
    seletor : 'li',
    element() {
        return document.querySelector(this.seletor) // <li> item 1 </li>
    },
    ativar() {        
        this.element().classList.add('ativar');
        // colocou uma classe no li
    }
}

Dom.ativar(); // ativando o li


Dom.seletor = 'ul'; // aqui ele colocar um classe no ul
Dom.ativar() // ativando o ul

Dom.seletor = 'body';
Dom.ativar() // ativando o body