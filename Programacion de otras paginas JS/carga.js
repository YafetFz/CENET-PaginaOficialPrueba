
document.addEventListener("DOMContentLoaded", function() {
    const cargado = document.querySelector(".cargado");
    const puerta1 = document.querySelector(".puerta1");
    const puerta2 = document.querySelector(".puerta2");

    setTimeout(function(){
        puerta1.style.animation = "pt1 0.3s linear forwards";
        puerta2.style.animation = "pt2 0.3s linear forwards";

    },1600);

    setTimeout(function(){
        cargado.style.display = "none";

    }, 2600);
});