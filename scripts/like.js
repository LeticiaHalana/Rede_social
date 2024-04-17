const coracao_desativado = document.querySelectorAll("#cinza");
const coracao_ativado = document.querySelectorAll("#vermelho");

for (let i = 0; i < coracao_desativado.length; i++) {

    coracao_desativado[i].addEventListener("click", () => {
        coracao_ativado[i].classList.toggle("desativado");
        coracao_desativado[i].classList.toggle("ativado");
        coracao_ativado[i].classList.toggle("ativado");
        coracao_desativado[i].classList.toggle("desativado");

    });

    coracao_ativado[i].addEventListener("click", () => {
        coracao_ativado[i].classList.toggle("ativado");
        coracao_desativado[i].classList.toggle("desativado");
        coracao_ativado[i].classList.add("desativado");
        coracao_desativado[i].classList.add("ativado");
    })
}
