const dialog = document.querySelector('dialog');
const modal = document.querySelectorAll(".modal");
const button = document.querySelectorAll(".abrir_post");
const fechar = document.getElementById("fechar");


for (let i = 0; i < modal.length; i++) {
    button[i].addEventListener("click", () => {
        dialog.innerHTML+= modal[i].innerHTML;
        dialog.showModal();
    })
fechar.addEventListener("click", () => {
        dialog.style.display = "none";
    })
   
    
}
 