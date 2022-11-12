const sectionSeleccionarAtaque = document.getElementById("ataque-titan")
const sectionReiniciar = document.getElementById("reiniciar")
const botonTitan = document.getElementById("boton-titan")


const sectionSeleccionarTitan = document.getElementById("seleccion-titan")

const titanJugador = document.getElementById("titan-jugador")


const titanEnemigo = document.getElementById("titan-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const botonReiniciar= document.getElementById("boton-reiniciar")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")

const contenedorAtaques = document.getElementById(`contenedorAtaques`)
const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let titanes = []//para arrays arreglos

let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeTitanes
let inputFemenina
let inputAtaque
let inputAcorazado
let inputBestia
let inputColosal
let titanesJugador
let titanJugadorObjeto
let ataquesTitan
let ataquesTitanEnemigo
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo




let botonFuego
let botonAgua
let botonTierra

let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./assets/mapa.png"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth -20
const anchoMaximoDelMapa = 500
if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos


class TitansWar {//Los nombres de las clases siempre inician con mayuscula a difeirecia de las variables
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 50
        this.alto = 50
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)       
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarTitan() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let femenina = new TitansWar("Femenina", "https://i.pinimg.com/originals/b0/5e/6d/b05e6de155209ef81fd8e8e967d69855.png", 5, "https://i.pinimg.com/originals/b0/5e/6d/b05e6de155209ef81fd8e8e967d69855.png")
let ataque = new TitansWar ("Ataque", "https://i.pinimg.com/originals/55/65/77/556577c1f56e9a19b5e612e6eed779ef.png", 5, "https://i.pinimg.com/originals/55/65/77/556577c1f56e9a19b5e612e6eed779ef.png")
let acorazado = new TitansWar("Acorazado", "https://i.pinimg.com/originals/9f/1d/7a/9f1d7a2ab249a86a29472040f1ef0310.png" ,5, "https://i.pinimg.com/originals/9f/1d/7a/9f1d7a2ab249a86a29472040f1ef0310.png")
let bestia = new TitansWar("Bestia", "https://i.pinimg.com/originals/c5/98/47/c5984763c9e6ca24918a59f5609f729d.png", 5, "https://i.pinimg.com/originals/c5/98/47/c5984763c9e6ca24918a59f5609f729d.png")
let colosal = new TitansWar("Colosal", "https://www.koeitecmoeurope.com/aot2/finalbattle/img/character/titan03.png", 5, "https://www.koeitecmoeurope.com/aot2/finalbattle/img/character/titan03.png")

let femeninaEnemigos = new TitansWar("Femenina", "https://i.pinimg.com/originals/b0/5e/6d/b05e6de155209ef81fd8e8e967d69855.png", 5, "https://i.pinimg.com/originals/b0/5e/6d/b05e6de155209ef81fd8e8e967d69855.png")
let ataqueEnemigos = new TitansWar ("Ataque", "https://i.pinimg.com/originals/55/65/77/556577c1f56e9a19b5e612e6eed779ef.png", 5, "https://i.pinimg.com/originals/55/65/77/556577c1f56e9a19b5e612e6eed779ef.png")
let acorazadoEnemigos = new TitansWar("Acorazado", "https://i.pinimg.com/originals/9f/1d/7a/9f1d7a2ab249a86a29472040f1ef0310.png" ,5, "https://i.pinimg.com/originals/9f/1d/7a/9f1d7a2ab249a86a29472040f1ef0310.png")
let bestiaEnemigos = new TitansWar("Bestia", "https://i.pinimg.com/originals/c5/98/47/c5984763c9e6ca24918a59f5609f729d.png", 5, "https://i.pinimg.com/originals/c5/98/47/c5984763c9e6ca24918a59f5609f729d.png")
let colosalEnemigos = new TitansWar("Colosal", "https://www.koeitecmoeurope.com/aot2/finalbattle/img/character/titan03.png", 5, "https://www.koeitecmoeurope.com/aot2/finalbattle/img/character/titan03.png")

femenina.ataques.push(
    { nombre:"🔥", id: "boton-fuego" },
    { nombre:"🔥", id: "boton-fuego" },
    { nombre:"🔥", id: "boton-fuego" },
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🧊", id: "boton-agua" },
)
femeninaEnemigos.ataques.push(
    { nombre:"🔥", id: "boton-fuego" },
    { nombre:"🔥", id: "boton-fuego" },
    { nombre:"🔥", id: "boton-fuego" },
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🧊", id: "boton-agua" },
)
ataque.ataques.push(
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🔥", id: "boton-fuego" },
    { nombre:"🧊", id: "boton-agua" },
)
ataqueEnemigos.ataques.push(
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
acorazadoEnemigos.ataques.push(
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
bestiaEnemigos.ataques.push(
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
colosalEnemigos.ataques.push(
    { nombre:"🧊", id: "boton-agua" },
    { nombre:"🧊", id: "boton-agua" },
    { nombre:"🧊", id: "boton-agua" },
    { nombre:"🌱", id: "boton-tierra" },
    { nombre:"🔥", id: "boton-fuego" },
)


titanes.push(femenina, ataque, acorazado, bestia, colosal)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = "none" //style.display none me permite ocultar la seccion en cuestion.  
    sectionReiniciar.style.display = "none" 
    sectionVerMapa.style.display = "none"
    
    titanes.forEach((titan) =>{
        opcionDeTitanes = `
        <input type="radio" name="titan" id=${titan.nombre} />
        <label class="tarjeta-titan" for=${titan.nombre} >
            <p>${titan.nombre} </p>
            <img src=${titan.foto}  alt=${titan.nombre} >
        </label>
        `

    contenedorTarjetas.innerHTML += opcionDeTitanes

    inputFemenina = document.getElementById("Femenina")
    inputAtaque = document.getElementById("Ataque")
    inputAcorazado = document.getElementById("Acorazado")
    inputBestia = document.getElementById("Bestia")
    inputColosal = document.getElementById("Colosal")

    })

    botonTitan.addEventListener("click", seleccionarTitan)//Probabkemente el codigo no carga, ya que addeventlistnere se carga antes de que el documento html sea leido   
    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarTitan() {   
   
    sectionSeleccionarTitan.style.display = "none" 
    
    
    if (inputFemenina.checked) {
       titanJugador.innerHTML = inputFemenina.id
       titanesJugador = inputFemenina.id
    } else if (inputAtaque.checked) {
        titanJugador.innerHTML = inputAtaque.id
        titanesJugador = inputAtaque.id
    } else if (inputAcorazado.checked) {
        titanJugador.innerHTML = inputAcorazado.id
        titanesJugador = inputAcorazado.id
    } else if (inputBestia.checked) {
        titanJugador.innerHTML = inputBestia.id
        titanesJugador = inputBestia.id
    } else if (inputColosal.checked) {
        titanJugador.innerHTML = inputColosal.id
        titanesJugador = inputColosal.id
    } else {
        alert("Te falta seleccionar mi brother")
    }
    
    extraerAtaques(titanesJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
    
    
}

function extraerAtaques(titanesJugador) {
    let ataques
    for (let i = 0; i < titanes.length; i++) {
        if (titanesJugador === titanes[i].nombre) {
            ataques = titanes[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach(ataque => {
        ataquesTitan = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesTitan
         
    });
    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botones = document.querySelectorAll('.BAtaque')
    
     


}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push("Bola de fuego")
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled = true
            } else if (e.target.textContent === '🧊') {
                ataqueJugador.push("Esquila de hielo")
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled = true
            } else {
                ataqueJugador.push("Terremoto")
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })  
    
}

function seleccionarTitanEnemigo(enemigo) {
    titanEnemigo.innerHTML = enemigo.nombre  
    ataquesTitanEnemigo = enemigo.ataques
    secuenciaAtaque()
    
}



function ataqueAleatorioEnemigo() {
    let  ataqueAleatorio = aleatorio(0,ataquesTitanEnemigo.length-1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1 ) {
        ataqueEnemigo.push("Bola de fuego")
    } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3) {
        ataqueEnemigo.push("Esquila de hielo")
    } else {
        ataqueEnemigo.push("Terremoto")
    }
    console.log(ataqueEnemigo)

    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("¡Empate! 😑")
        } else if((ataqueJugador[index] === "Bola de fuego" && ataqueEnemigo[index] === "Terremoto") || (ataqueJugador[index] === "Esquila de hielo" && ataqueEnemigo[index] === "Bola de fuego") || (ataqueJugador[index] === "Terremoto" && ataqueEnemigo[index] === "Esquila de hielo")) {
            indexAmbosOponentes(index, index)
            crearMensaje("¡Ganaste! 😀🏋️")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("¡Perdiste! 🥲")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        
    }
    

  

    

    //RevisarVidas
    revisarVidas()
}

function revisarVidas() { 
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!")
    } else if (vidasJugador > victoriasEnemigo) {
        crearMensajeFinal("Felicitaciones, eres el ganador!")
    } else {
        crearMensajeFinal("Perdiste la partida, lo siento mucho!")
    }
    
}

function crearMensaje(resultado) {
    

    
   
    let nuevoAtaqueDelJugador= document.createElement("p")
    let nuevoAtaqueDelEnemigo= document.createElement("p")//estas variables pueden quedarse pues forman parte espscifica de esta funcion al manipular el DOM

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML =  indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML =  indexAtaqueEnemigo
    /* let parrafo= document.createElement("p")
    parrafo.innerHTML = "Tu titan atacó con " + ataqueJugador + ", el titan del enemigo atacó con " + ataqueEnemigo + ", " + resultadocombate //parrafoCombate es la variable para el primer parrafo. */

    

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) { 
    
    sectionReiniciar.style.display = "block"  
    let parrafo= document.createElement("p")
    sectionMensajes.innerHTML = resultadoFinal
   

    /* sectionMensajes.appendChild(parrafo)//appendchild me permite mostrar el parrafo creado en mi html */
}

function reiniciarJuego() {//location.reload se refiere a la ubicacion en la que nos encontramos ahora, y que nos permite recargar la pagina.
    location.reload ()
}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function pintarCanvas() {
    
    titanJugadorObjeto.x = titanJugadorObjeto.x + titanJugadorObjeto.velocidadX
    titanJugadorObjeto.y = titanJugadorObjeto.y + titanJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.clientWidth, mapa.clientHeight)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    titanJugadorObjeto.pintarTitan()
    femeninaEnemigos.pintarTitan()
    ataqueEnemigos.pintarTitan()
    acorazadoEnemigos.pintarTitan()
    bestiaEnemigos.pintarTitan()
    colosalEnemigos.pintarTitan()
    if (titanJugadorObjeto.velocidadX !== 0 || titanJugadorObjeto.velocidadY !== 0) {
        revisarColision(femeninaEnemigos)
        revisarColision(ataqueEnemigos)
        revisarColision(acorazadoEnemigos)
        revisarColision(bestiaEnemigos)
        revisarColision(colosalEnemigos)
    }
}

function moverDerecha() {
    
    titanJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
    
    titanJugadorObjeto.velocidadX = -5
}

function moverArriba() {
    
    titanJugadorObjeto.velocidadY = -5
}

function moverAbajo() {
    
    titanJugadorObjeto.velocidadY = 5
}
function detenerMovimiento() {

    
    titanJugadorObjeto.velocidadX = 0
    titanJugadorObjeto.velocidadY = 0
}

function sePresionaUnaTecla(event) {
    switch(event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowLeft":
            moverIzquierda()
            break
        case "ArrowRight":
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {
    
    titanJugadorObjeto = obtenerObjetoMascota(titanJugador)

    intervalo = setInterval(pintarCanvas, 50)
    
    window.addEventListener("keydown", sePresionaUnaTecla)

    window.addEventListener("keyup", detenerMovimiento)

    
}

function obtenerObjetoMascota() {
    for (let i = 0; i < titanes.length; i++) {
        if (titanesJugador === titanes[i].nombre) {
            return titanes[i]
        }
        
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaTitan = titanJugadorObjeto.y
    const abajoTitan = titanJugadorObjeto.y + titanJugadorObjeto.alto
    const derechaTitan = titanJugadorObjeto.x + titanJugadorObjeto.ancho
    const izquierdaTitan = titanJugadorObjeto.x

    if(
        abajoTitan < arribaEnemigo ||
        arribaTitan > abajoEnemigo ||
        derechaTitan < izquierdaEnemigo ||
        izquierdaTitan > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = "flex" // style.display = block me permite volver a ver la seccion en cuestion   
    sectionVerMapa.style.display = "none"
    seleccionarTitanEnemigo(enemigo)
    
}

window.addEventListener("load", iniciarJuego)

