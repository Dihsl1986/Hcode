
//Se eu perder o foco dele, ou seja sair da aba/janela vai aparece focus.
//window é a janela
window.addEventListener('focus',  event => {

    console.log("focus");

});


//Aqui se eu clicar dentro da area branco do documento vai aparece click
document.addEventListener("click", event => {

    console.log("click");

});

