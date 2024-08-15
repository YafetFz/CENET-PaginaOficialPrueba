
document.addEventListener("DOMContentLoaded", function() {
    const cargado = document.querySelector(".cargado");
    const puerta1 = document.querySelector(".puerta1");
    const puerta2 = document.querySelector(".puerta2");
    const imagen = document.querySelector(".imagen");
    const porcentaje = document.querySelector(".porcentaje");
    const ptje = document.querySelector(".ptje");
    let valor = 3;

    // Programacion de la animacion de cargado del sitio
    p = setInterval(function(){
        valor++;
        if (valor<=100) {
            ptje.style.width = valor+"%";
        } else {
            clearInterval(p);
        };

    },50);

    setTimeout(function(){
        imagen.style.opacity = "0";
        porcentaje.style.opacity = "0";

    },6000);

    setTimeout(function(){
        puerta1.style.animation = "pt1 0.3s linear forwards";
        puerta2.style.animation = "pt2 0.3s linear forwards";

    },6600);

    setTimeout(function(){
        cargado.style.display = "none";

    }, 7000);

    // Fin de la programacion de la animacion de cargando

    
    // programacion del menu desplegable
    // const mboton = document.querySelector(".mboton");
    // const opciones = document.querySelector(".opciones");
    // let click = 0;
    // mboton.addEventListener("mousedown",function(){
    //     if (click == 0){
    //         click = 1;
    //         opciones.style.width = "0.5%";
    //     } else {
    //         click = 0;
    //         opciones.style.width = "100%";
    //     }
    // });


});