const dialog = document.querySelector('dialog');
const modal = document.querySelectorAll(".modal");
const button = document.querySelectorAll(".abrir_post");
const button_fechar = document.createElement("button");
button_fechar.classList.add("fechar");


for (let i = 0; i < modal.length; i++) {
    button[i].addEventListener("click", () => {

        dialog.innerHTML = modal[i].innerHTML;
        dialog.appendChild(button_fechar);
        dialog.showModal();
    })

    button_fechar.addEventListener("click", () => {
        console.log(123);
        dialog.close();
    })
}
