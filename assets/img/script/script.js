const botaoVer = document.querySelector('.botao-receita');

let alet = Math.floor(Math.random() *3);
console.log(alet)

botaoVer.addEventListener('click', function() {
    const ingredientePrincipal = document.querySelector('input[name="prototipo"]:checked');
    const acompanhamento = document.getElementById('acompanhamento').value;
    const opcao = document.querySelector('input[name="opcao"]:checked');

    //Opção Carne e ovo
    if     (ingredientePrincipal && acompanhamento === "0" && opcao && alet === 0) window.location.href = "https://www.youtube.com/watch?v=qrDHQADFVHQ"; 
    else if(ingredientePrincipal && acompanhamento === "0" && opcao && alet === 1) window.location.href = "https://www.youtube.com/watch?v=B6StbXYv5cU"; 
    else if(ingredientePrincipal && acompanhamento === "0" && opcao && alet === 2) window.location.href = "https://www.youtube.com/watch?v=u36jvFtl5BM";

    //Opção carne e arroz
    if(ingredientePrincipal && acompanhamento === "1" && opcao && alet === 0) window.location.href = "https://www.youtube.com/watch?v=5qz0IHzBlPQ";
    else if(ingredientePrincipal && acompanhamento === "1" && opcao && alet === 1) window.location.href = " ";
    else if(ingredientePrincipal && acompanhamento === "1" && opcao && alet === 2) window.location.href = " ";

    //Opção carne e batata
    if(ingredientePrincipal && acompanhamento === "2" && opcao && alet === 0) window.location.href = " ";
    else if(ingredientePrincipal && acompanhamento === "2" && opcao && alet === 1) window.location.href = " ";
    else if(ingredientePrincipal && acompanhamento === "2" && opcao && alet === 2) window.location.href = " ";

    //Opção carne e salada
    if(ingredientePrincipal && acompanhamento === "3" && opcao && alet === 0) window.location.href = " ";
    else if(ingredientePrincipal && acompanhamento === "3" && opcao && alet === 1) window.location.href = " ";
    else if(ingredientePrincipal && acompanhamento === "3" && opcao && alet === 2) window.location.href = " ";

    //Opção carne e legumes
    if(ingredientePrincipal && acompanhamento === "4" && opcao && alet === 0) window.location.href = " ";
    else if(ingredientePrincipal && acompanhamento === "4" && opcao && alet === 1) window.location.href = " ";
    else if(ingredientePrincipal && acompanhamento === "4" && opcao && alet === 2) window.location.href = " "; 
     



}
);
