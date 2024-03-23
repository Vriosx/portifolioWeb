const botaoVer = document.querySelector('.botao-receita');

let alet = Math.floor(Math.random() * 3);
console.log(alet)

botaoVer.addEventListener('click', function() {
    const ingredientePrincipal = document.querySelector('input[name="prototipo"]:checked');
    const acompanhamento = document.getElementById('acompanhamento').value;
    const opcao = document.querySelector('input[name="opcao"]:checked');

    if (!opcao) {
        alert("Por favor, selecione uma opção.");
        return;
    }

    if (!ingredientePrincipal) {
        alert("Por favor, selecione um ingrediente principal.");
        return;
    }

    if (opcao.id === "opcao_nao") {
        alert("Ótimo! Caso precise, selecione a opção 'sim, preciso'.");
        return;
    }


    // Opção Carne e ovo
    if (ingredientePrincipal && acompanhamento === "0" && opcao && alet === 0) window.location.href = "https://www.youtube.com/watch?v=hX9paxVgkaA&pp=ygULQ2FybmUgZSBvdm8%3D"; 
    else if (ingredientePrincipal && acompanhamento === "0" && opcao && alet === 1) window.location.href = "https://www.youtube.com/watch?v=MXvDzKbbtw8&pp=ygULQ2FybmUgZSBvdm8%3D"; 
    else if (ingredientePrincipal && acompanhamento === "0" && opcao && alet === 2) window.location.href = "https://www.youtube.com/watch?v=iBRLO2FPpCw&t=2s&pp=ygULQ2FybmUgZSBvdm8%3D";

    // Opção carne e arroz
    if (ingredientePrincipal && acompanhamento === "1" && opcao && alet === 0) window.location.href = "https://www.youtube.com/watch?v=iYYD56U_qHU&pp=ygUNY2FybmUgZSBhcnJveg%3D%3D";
    else if (ingredientePrincipal && acompanhamento === "1" && opcao && alet === 1) window.location.href = "https://www.youtube.com/watch?v=B28TWWlxT8A&pp=ygUNY2FybmUgZSBhcnJveg%3D%3D ";
    else if (ingredientePrincipal && acompanhamento === "1" && opcao && alet === 2) window.location.href = "https://www.youtube.com/watch?v=mPpvzpInIAE&pp=ygUNY2FybmUgZSBhcnJveg%3D%3D";

    // Opção carne e batata
    if (ingredientePrincipal && acompanhamento === "2" && opcao && alet === 0) window.location.href = "https://www.youtube.com/watch?v=sJrCuNFS-2s&pp=ygUOY2FybmUgZSBiYXRhdGE%3D ";
    else if (ingredientePrincipal && acompanhamento === "2" && opcao && alet === 1) window.location.href = "https://www.youtube.com/watch?v=uCkBryRI1eQ&pp=ygUXY2FybmUgZSBiYXRhdGEgcmVjZWl0YXM%3D ";
    else if (ingredientePrincipal && acompanhamento === "2" && opcao && alet === 2) window.location.href = " https://www.youtube.com/watch?v=0fq-sewLzaY&pp=ygUXY2FybmUgZSBiYXRhdGEgcmVjZWl0YXM%3D";

    // Opção carne e salada
    if (ingredientePrincipal && acompanhamento === "3" && opcao && alet === 0) window.location.href = "https://www.youtube.com/watch?v=cJ2v84lzNBQ&pp=ygUOY2FybmUgZSBzYWxhZGE%3D";
    else if (ingredientePrincipal && acompanhamento === "3" && opcao && alet === 1) window.location.href = "https://www.youtube.com/watch?v=zfg7KfReSGQ&pp=ygUOY2FybmUgZSBzYWxhZGE%3D";
    else if (ingredientePrincipal && acompanhamento === "3" && opcao && alet === 2) window.location.href = "https://www.youtube.com/watch?v=WRCpNuAM3Bw&pp=ygUOY2FybmUgZSBzYWxhZGE%3D";

    // Opção carne e legumes
    if (ingredientePrincipal && acompanhamento === "4" && opcao && alet === 0) window.location.href = "https://www.youtube.com/watch?v=eXeosXs7-8U&pp=ygUPY2FybmUgZSBsZWd1bWVz";
    else if (ingredientePrincipal && acompanhamento === "4" && opcao && alet === 1) window.location.href = "https://www.youtube.com/watch?v=WPgSSXzTTMk&pp=ygUPY2FybmUgZSBsZWd1bWVz";
    else if (ingredientePrincipal && acompanhamento === "4" && opcao && alet === 2) window.location.href = "https://www.youtube.com/watch?v=QioRXajQLAk&pp=ygUPY2FybmUgZSBsZWd1bWVz"; 

    
     
    if (ingredientePrincipal && ingredientePrincipal.id === "prototipo_nao") {
        //Opção Massa e ovo
  if(ingredientePrincipal  && acompanhamento === "0" && opcao && alet === 0) window.location.href = "https://www.youtube.com/watch?v=w8JH7ZC90iU&pp=ygULTWFzc2EgZSBvdm8%3D";
  else if(ingredientePrincipal  && acompanhamento === "0" && opcao && alet === 1) window.location.href = "https://www.youtube.com/watch?v=Z1nsmgpBV7o&pp=ygULTWFzc2EgZSBvdm8%3D";
  else if(ingredientePrincipal  && acompanhamento === "0" && opcao && alet === 2) window.location.href = "https://www.youtube.com/watch?v=KtXcCHw7bj4&pp=ygULTWFzc2EgZSBvdm8%3D";

   // Opção massa e arroz
  if (ingredientePrincipal  && acompanhamento === "1" && opcao && alet === 0) window.location.href = "https://www.youtube.com/watch?v=75NoQ2QG3pE&pp=ygUYIG1hc3NhIGUgYXJyb3ogIHJlY2VpdGFz";
  else if (ingredientePrincipal  && acompanhamento === "1" && opcao && alet === 1) window.location.href = "https://www.youtube.com/watch?v=NOiaA0ZVspA&pp=ygUYIG1hc3NhIGUgYXJyb3ogIHJlY2VpdGFz";
  else if (ingredientePrincipal  && acompanhamento === "1" && opcao && alet === 2) window.location.href = "https://www.youtube.com/watch?v=AH8M5gQuF1I&pp=ygUYIG1hc3NhIGUgYXJyb3ogIHJlY2VpdGFz";

  // Opção massa e batata
  if (ingredientePrincipal  && acompanhamento === "2" && opcao && alet === 0) window.location.href = "https://www.youtube.com/watch?v=B1O1tuuJlpk&pp=ygURbWFjYXJyYW8gZSBiYXRhdGE%3D";
  else if (ingredientePrincipal  && acompanhamento === "2" && opcao && alet === 1) window.location.href = "https://www.youtube.com/watch?v=ZYqasW94oGI&pp=ygURbWFjYXJyYW8gZSBiYXRhdGE%3D";
  else if (ingredientePrincipal  && acompanhamento === "2" && opcao && alet === 2) window.location.href = "https://www.youtube.com/watch?v=ug_lQq7k0nk&pp=ygURbWFjYXJyYW8gZSBiYXRhdGE%3D";

  // Opção massa e salada
  if (ingredientePrincipal  && acompanhamento === "3" && opcao && alet === 0) window.location.href = "https://www.youtube.com/watch?v=X1VMszRU2Mw&pp=ygURbWFjYXJyYW8gZSBzYWxhZGE%3D";
  else if (ingredientePrincipal  && acompanhamento === "3" && opcao && alet === 1) window.location.href = "https://www.youtube.com/watch?v=QhV38G84sEs&pp=ygUObWFzc2EgZSBzYWxhZGE%3D";
  else if (ingredientePrincipal  && acompanhamento === "3" && opcao && alet === 2) window.location.href = "https://www.youtube.com/watch?v=NusmVzLe3JU&pp=ygUObWFzc2EgZSBzYWxhZGE%3D";

  // Opção massa e legumes
  if (ingredientePrincipalMassa && acompanhamento === "4" && opcao && alet === 0) window.location.href = "https://www.youtube.com/watch?v=z9iAibMpHLA&pp=ygUPbWFzc2EgZSBsZWd1bWVz";
  else if (ingredientePrincipalMassa && acompanhamento === "4" && opcao && alet === 1) window.location.href = "https://www.youtube.com/watch?v=D0EXd7II0UE&pp=ygUPbWFzc2EgZSBsZWd1bWVz";
  else if (ingredientePrincipalMassa && acompanhamento === "4" && opcao && alet === 2) window.location.href = "https://www.youtube.com/watch?v=RG0fgOjn34c&pp=ygUPbWFzc2EgZSBsZWd1bWVz"; 

  }
    
});
