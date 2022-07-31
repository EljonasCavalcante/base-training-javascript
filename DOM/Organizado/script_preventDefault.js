const animaisList = document.querySelector(".animais-lista");

function callbackList(event) {
  console.log(event.target);
}
animaisList.addEventListener("click", callbackList);

//============= preventDefault======================
const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault(); // server para previr o padrão ou desativar o padrão.
  console.log("clicou");
}

linkExterno.addEventListener("click", handleLinkExterno);
