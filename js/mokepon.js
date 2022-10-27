let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("ataque")
    sectionSeleccionarAtaque.style.display = "none" //style.display none me permite ocultar la seccion en cuestion.

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascota = document.getElementById("boton-mascota")
    botonMascota.addEventListener("click", seleccionarMascota)//Probabkemente el codigo no carga, ya que addeventlistnere se carga antes de que el documento html sea leido

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascota() {
    let sectionSeleccionarAtaque = document.getElementById("ataque")
    sectionSeleccionarAtaque.style.display = "block" // style.display = block me permite volver a ver la seccion en cuestion

    let sectionSeleccionarMascota = document.getElementById("seleccion-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let inputAquaman = document.getElementById("aquaman")
    let inputLodin = document.getElementById("lodin")
    let inputCarboncillo = document.getElementById("carboncillo")
    let inputSable = document.getElementById("sable")
    let inputBarrilete = document.getElementById("barrilete")
    let mascotaJugador = document.getElementById("mascota-jugador")
    

    if (inputAquaman.checked) {
       mascotaJugador.innerHTML = "Aquaman"
    } else if (inputLodin.checked) {
        mascotaJugador.innerHTML = "Lodin"
    } else if (inputCarboncillo.checked) {
        mascotaJugador.innerHTML = "Carboncillo"
    } else if (inputSable.checked) {
        mascotaJugador.innerHTML = "Sable"
    } else if (inputBarrilete.checked) {
        mascotaJugador.innerHTML = "Barrilete"
    } else {
        alert("Te falta seleccionar mi brother")
    }
    
    seleccionarMascotaEnemigo()
    
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,5)
    let mascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatorio == 1) {
        mascotaEnemigo.innerHTML = "Aquaman" //Aquaman
    } else if (mascotaAleatorio == 2) {
        mascotaEnemigo.innerHTML = "Lodin"//Lodin
    } else if (mascotaAleatorio == 3) {
        mascotaEnemigo.innerHTML = "Carboncillo"
    } else if (mascotaAleatorio == 4) {
        mascotaEnemigo.innerHTML = "Sable"
    } else {
        mascotaEnemigo.innerHTML = "Barrilete"
    }
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
    
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
    
}

function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
    
}



function ataqueAleatorioEnemigo() {
    let  ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    combate()

}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueJugador == ataqueEnemigo) {
        resultadocombate = "¡Empate! 😑"
    } else if((ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") || (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") || (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")) {
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
        crearMensajeFinal("FELICITACIONES!!, GANASTE LA PARTIDA🏋️🏋️")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("SORRY MY FRIEND, PERDISTE LA PARTIDA🥲🥲")
    }
    
}

function crearMensaje() {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo= document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + ", " + resultadocombate //parrafoCombate es la variable para el primer parrafo.

    

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) { 
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"

    let sectionMensajes = document.getElementById("mensajes")

    let parrafo= document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true // Este atributo me permite desabilitar los botones
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    sectionMensajes.appendChild(parrafo)//appendchild me permite mostrar el parrafo creado en mi html
}

function reiniciarJuego() {//location.reload se refiere a la ubicacion en la que nos encontramos ahora, y que nos permite recargar la pagina.
    location.reload ()
}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load", iniciarJuego)