const tabMenu = document.querySelectorAll('.js-tabmenu li');
console.log(tabMenu)
const tabContent = document.querySelectorAll('.js-tabcontent section');
console.log(tabContent)

if(tabMenu.length && tabContent.length) {

    //faz texto sempre ficar ativo no iniciar.
tabContent[0].classList.add('ativo')

function activeTab(index) {
    tabContent.forEach((section)=>{  // fazendo um loop para remover a classe desejada  
        section.classList.remove('ativo');// removendo classe
    })
    tabContent[index].classList.add('ativo');// adcionando classe
}


tabMenu.forEach((itemMenu,index) => { // fazendo um loop argumento, itemMenu e o index que seria a array
    itemMenu.addEventListener('click', () => { // em cada item eu adicono um evento de click
        activeTab(index)// quando o click for clicado ele ativa a função que recebe o index
    })
})
}
