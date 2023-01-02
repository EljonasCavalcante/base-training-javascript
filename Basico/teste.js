function Dom(seletor) {
    this.element = document.querySelector(seletor)
}

const ul = new Dom('ul')
console.log(ul)