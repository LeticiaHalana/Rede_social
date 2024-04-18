
const coracao_desativado = document.querySelectorAll("#cinza");
const coracao_ativado = document.querySelectorAll("#vermelho");
let like = document.querySelectorAll(".like_number");

for (let i = 0; i < coracao_desativado.length; i++) {

    coracao_desativado[i].addEventListener("click", () => {

        let cont = parseInt(like[i].innerHTML) + 1;
        like[i].innerHTML = cont;

        coracao_ativado[i].classList.remove("desativado");
        coracao_desativado[i].classList.remove("ativado");
        coracao_ativado[i].classList.add("ativado");
        coracao_desativado[i].classList.add("desativado");

    });

    coracao_ativado[i].addEventListener("click", () => {
        let cont = parseInt(like[i].innerHTML) - 1;
        like[i].innerHTML = cont;
        coracao_ativado[i].classList.remove("ativado");
        coracao_desativado[i].classList.remove("desativado");
        coracao_ativado[i].classList.add("desativado");
        coracao_desativado[i].classList.add("ativado");
    })

}

