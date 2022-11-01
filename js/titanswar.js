let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("ataque")
    sectionSeleccionarAtaque.style.display = "none" //style.display none me permite ocultar la seccion en cuestion.

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonTitan = document.getElementById("boton-titan")
    botonTitan.addEventListener("click", seleccionarTitan)//Probabkemente el codigo no carga, ya que addeventlistnere se carga antes de que el documento html sea leido

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarTitan() {
    let sectionSeleccionarAtaque = document.getElementById("ataque")
    sectionSeleccionarAtaque.style.display = "flex" // style.display = block me permite volver a ver la seccion en cuestion

    let sectionSeleccionarTitan = document.getElementById("seleccion-titan")
    sectionSeleccionarTitan.style.display = "none"

    let inputAquaman = document.getElementById("femenina")
    let inputLodin = document.getElementById("tataque")
    let inputCarboncillo = document.getElementById("acorazado")
    let inputSable = document.getElementById("bestia")
    let inputBarrilete = document.getElementById("colosal")
    let titanJugador = document.getElementById("titan-jugador")
    

    if (inputAquaman.checked) {
       titanJugador.innerHTML = "Femenina"
    } else if (inputLodin.checked) {
        titanJugador.innerHTML = "Ataque"
    } else if (inputCarboncillo.checked) {
        titanJugador.innerHTML = "Acorazado"
    } else if (inputSable.checked) {
        titanJugador.innerHTML = "Bestia"
    } else if (inputBarrilete.checked) {
        titanJugador.innerHTML = "Colosal"
    } else {
        alert("Te falta seleccionar mi brother")
    }
    
    seleccionarTitanEnemigo()
    
}

function seleccionarTitanEnemigo() {
    let titanAleatorio = aleatorio(1,5)
    let titanEnemigo = document.getElementById("titan-enemigo")

    if (titanAleatorio == 1) {
        titanEnemigo.innerHTML = "Femenina" //Aquaman
    } else if (titanAleatorio == 2) {
        titanEnemigo.innerHTML = "Ataque"//Lodin
    } else if (titanAleatorio == 3) {
        titanEnemigo.innerHTML = "Acorazado"
    } else if (titanAleatorio == 4) {
        titanEnemigo.innerHTML = "Bestia"
    } else {
        titanEnemigo.innerHTML = "Colosal"
    }
}

function ataqueFuego() {
    ataqueJugador = "BOLA DE FUEGO"
    ataqueAleatorioEnemigo()
    
}

function ataqueAgua() {
    ataqueJugador = "ESQUILA DE HIELO"
    ataqueAleatorioEnemigo()
    
}

function ataqueTierra() {
    ataqueJugador = "TERREMOTO"
    ataqueAleatorioEnemigo()
    
}



function ataqueAleatorioEnemigo() {
    let  ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "BOLA DE FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "ESQUILA DE HIELO"
    } else {
        ataqueEnemigo = "TERREMOTO"
    }

    combate()

}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueJugador == ataqueEnemigo) {
        resultadocombate = "¡Empate! 😑"
    } else if((ataqueJugador == "BOLA DE FUEGO" && ataqueEnemigo == "TERREMOTO") || (ataqueJugador == "ESQUILA DE HIELO" && ataqueEnemigo == "BOLA DE FUEGO") || (ataqueJugador == "TERREMOTO" && ataqueEnemigo == "ESQUILA DE HIELO")) {
        resultadocombate = "¡Ganaste! 😀🏋️"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        resultadocombate = "¡Perdiste! 🥲"
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    crearMensaje()

    //RevisarVidas
    revisarVidas()
}

function revisarVidas() { 
    if (vidasEnemigo == 0) {
        crearMensajeFinal("Felicitaciones, eres el ganador!")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Perdiste la partida, lo siento mucho!")
    }
    
}

function crearMensaje() {
    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

    
   
    let nuevoAtaqueDelJugador= document.createElement("p")
    let nuevoAtaqueDelEnemigo= document.createElement("p")

    sectionMensajes.innerHTML = resultadocombate
    nuevoAtaqueDelJugador.innerHTML =  ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML =  ataqueEnemigo
    /* let parrafo= document.createElement("p")
    parrafo.innerHTML = "Tu titan atacó con " + ataqueJugador + ", el titan del enemigo atacó con " + ataqueEnemigo + ", " + resultadocombate //parrafoCombate es la variable para el primer parrafo. */

    

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) { 
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"

    let sectionMensajes = document.getElementById("resultado")

    let parrafo= document.createElement("p")
    sectionMensajes.innerHTML = resultadoFinal
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true // Este atributo me permite desabilitar los botones
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    /* sectionMensajes.appendChild(parrafo)//appendchild me permite mostrar el parrafo creado en mi html */
}

function reiniciarJuego() {//location.reload se refiere a la ubicacion en la que nos encontramos ahora, y que nos permite recargar la pagina.
    location.reload ()
}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load", iniciarJuego)