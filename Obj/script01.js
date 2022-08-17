
const Dom  = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor);
    },
    ativar() {
        const elementoSelecionado = document.querySelector(this.seletor);
        elementoSelecionado.classList.add('ativar');
    }

}