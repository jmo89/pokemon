
//1 - Pegando no JS o elemento HTML que corresponde ao botão trocar tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//2 - Pegando no JS o elemento HTML que corresponde ao body

const body = document.querySelector("body");
const imagemBotaoTrocarDeTema = document.querySelector(".imagem-botao")

//3 - Identificar o clique do usuario no botão de troca de tema
botaoAlterarTema.addEventListener("click", ()=>{

    //6 - Verificar se o body possui a classe modo escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    
    body.classList.toggle("modo-escuro");
    if (modoEscuroEstaAtivo) {
      
        //8 - Trocando a imagem do botão de alterar tema, de lua para sol
        imagemBotaoTrocarDeTema.setAttribute("src", "./src/img/sun.png")

    } else{
    
    //5 - Trocando a imagem do botão de alterar tema, de sol para lua
        imagemBotaoTrocarDeTema.setAttribute("src", "./src/img/lua.png")

    //Objetivo 2 - Clicando no botão de alterar tema, caso o body ja tenha modo escuro, remover a classe para mudar para o modo claro, muidando a imagem para o sol
    }
});