// .animais-lista -> selecionei a classe container que pegar ul/li/a=img


const animaisList = document.querySelector('.animais-lista');
function callbackList(event) {
    console.log('currentTarget', event.currentTarget)// mostra a lista toda independente de onde eu clicar na lista.
    console.log('target',event.target)// mostrar examente onde eu cliquei na lista
    console.log('type',event.type)// mostra o evento usado
}

animaisList.addEventListener('click', callbackList)