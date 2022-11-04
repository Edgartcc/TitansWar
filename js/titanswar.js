const sectionSeleccionarAtaque = document.getElementById("ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonTitan = document.getElementById("boton-titan")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarTitan = document.getElementById("seleccion-titan")
const inputFemenina = document.getElementById("femenina")
const inputAtaque = document.getElementById("tataque")
const inputAcorazado = document.getElementById("acorazado")
const inputBestia = document.getElementById("bestia")
const inputColosal = document.getElementById("colosal")
const titanJugador = document.getElementById("titan-jugador")

const titanEnemigo = document.getElementById("titan-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

let titanes = []//para arrays arreglos

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class TitansWar {//Los nombres de las clases siempre inician con mayuscula a difeirecia de las variables
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let femenina = new TitansWar("Femenina", "https://i.pinimg.com/originals/b0/5e/6d/b05e6de155209ef81fd8e8e967d69855.png", 5)
let tataque = new TitansWar ("Ataque", "https://i.pinimg.com/originals/55/65/77/556577c1f56e9a19b5e612e6eed779ef.png", 5)
let acorazado = new TitansWar("Acorazado", "https://i.pinimg.com/originals/9f/1d/7a/9f1d7a2ab249a86a29472040f1ef0310.png" ,5)
let bestia = new TitansWar("Bestia", "https://i.pinimg.com/originals/c5/98/47/c5984763c9e6ca24918a59f5609f729d.png", 5)
let colosal = new TitansWar("colosal", "https://www.koeitecmoeurope.com/aot2/finalbattle/img/character/titan03.png", 5)

femenina.ataques.push(
    { nombre:"🔥", id: "boton-fuego" },
    { nombre:"🔥", id: "boton-fuego" },
    { nombre:"🔥", id: "boton-fuego" },
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🧊", id: "boton-agua" },
)
tataque.ataques.push(
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🔥", id: "boton-fuego" },
    { nombre:"🧊", id: "boton-agua" },
)
acorazado.ataques.push(
    { nombre:"🧊", id: "boton-agua" },
    { nombre:"🧊", id: "boton-agua" },
    { nombre:"🧊", id: "boton-agua" },
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🔥", id: "boton-fuego" },
)
bestia.ataques.push(
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🔥", id: "boton-fuego" },
    { nombre:"🧊", id: "boton-agua" },
)
colosal.ataques.push(
    { nombre:"🧊", id: "boton-agua" },
    { nombre:"🧊", id: "boton-agua" },
    { nombre:"🧊", id: "boton-agua" },
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🔥", id: "boton-fuego" },
)


function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = "none" //style.display none me permite ocultar la seccion en cuestion.  
    sectionReiniciar.style.display = "none"  
    botonTitan.addEventListener("click", seleccionarTitan)//Probabkemente el codigo no carga, ya que addeventlistnere se carga antes de que el documento html sea leido   
    botonFuego.addEventListener("click", ataqueFuego)   
    botonAgua.addEventListener("click", ataqueAgua)   
    botonTierra.addEventListener("click", ataqueTierra)   
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarTitan() {
    
    sectionSeleccionarAtaque.style.display = "flex" // style.display = block me permite volver a ver la seccion en cuestion   
    sectionSeleccionarTitan.style.display = "none" 
    
    if (inputFemenina.checked) {
       titanJugador.innerHTML = "Femenina"
    } else if (inputAtaque.checked) {
        titanJugador.innerHTML = "Ataque"
    } else if (inputAcorazado.checked) {
        titanJugador.innerHTML = "Acorazado"
    } else if (inputBestia.checked) {
        titanJugador.innerHTML = "Bestia"
    } else if (inputColosal.checked) {
        titanJugador.innerHTML = "Colosal"
    } else {
        alert("Te falta seleccionar mi brother")
    }
    
    seleccionarTitanEnemigo()
    
}

function seleccionarTitanEnemigo() {
    let titanAleatorio = aleatorio(1,5)

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
    

    
   
    let nuevoAtaqueDelJugador= document.createElement("p")
    let nuevoAtaqueDelEnemigo= document.createElement("p")//estas variables pueden quedarse pues forman parte espscifica de esta funcion al manipular el DOM

    sectionMensajes.innerHTML = resultadocombate
    nuevoAtaqueDelJugador.innerHTML =  ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML =  ataqueEnemigo
    /* let parrafo= document.createElement("p")
    parrafo.innerHTML = "Tu titan atacó con " + ataqueJugador + ", el titan del enemigo atacó con " + ataqueEnemigo + ", " + resultadocombate //parrafoCombate es la variable para el primer parrafo. */

    

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) { 
    
    sectionReiniciar.style.display = "block"  
    let parrafo= document.createElement("p")
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true // Este atributo me permite desabilitar los botones
    botonAgua.disabled = true 
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