let puntos = 0;


// Iniciar juego
function empezar(){

    document.getElementById("inicio").classList.add("oculto");

    document.getElementById("pregunta1").classList.remove("oculto");


    let musica = document.getElementById("musica");

    if(musica){
        musica.play().catch(()=>{
            console.log("Música bloqueada por navegador");
        });
    }

}



// Pasar a siguiente pregunta
function siguiente(numero){

    puntos++;

    cambiarPantalla("pregunta" + numero);

}



// Respuesta incorrecta
function incorrecto(){

    alert("Casi Xiomarita ❤️ Esa no era la respuesta.");

}



// Mostrar final
function final(){

    puntos++;

    cambiarPantalla("final");


    let resultado = document.getElementById("resultado");

    if(resultado){

        resultado.innerHTML =
        "Ganaste el juego con " + puntos + "/10 ❤️";

    }


}



// Aceptar anillo
function aceptar(){

    cambiarPantalla("aceptado");

}



// Cambiar pantallas
function cambiarPantalla(id){

    document.querySelectorAll(".pantalla").forEach(function(pantalla){

        pantalla.classList.add("oculto");

    });


    document.getElementById(id).classList.remove("oculto");

}



// Crear corazones
function crearCorazon(){

    let corazon = document.createElement("div");


    corazon.className = "corazon";


    corazon.innerHTML = "❤️";


    corazon.style.left = Math.random() * 100 + "vw";


    corazon.style.fontSize =
    (Math.random() * 20 + 20) + "px";


    corazon.style.animationDuration =
    (Math.random() * 3 + 3) + "s";


    document.body.appendChild(corazon);



    setTimeout(function(){

        corazon.remove();

    },6000);

}



// Corazones siempre activos

setInterval(crearCorazon,400);