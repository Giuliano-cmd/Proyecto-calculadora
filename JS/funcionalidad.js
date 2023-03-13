//* Llamado de Botones //
const botonC = document.querySelector("#botonC");
const botonParentesis = document.querySelector("#botonParentesis");
const botonBarra = document.querySelector("#botonBarra");
const botonIgual = document.querySelector("#botonIgual");
const botonMas = document.querySelector("#botonMas");
const botonMenos = document.querySelector("#botonMenos");
const botonMultip = document.querySelector("#botonMultip");
const botonComa = document.querySelector("#botonComa");
const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#boton3");
const boton4 = document.querySelector("#boton4");
const boton5 = document.querySelector("#boton5");
const boton6 = document.querySelector("#boton6");
const boton7 = document.querySelector("#boton7");
const boton8 = document.querySelector("#boton8");
const boton9 = document.querySelector("#boton9");

const texto = document.querySelector("#texto");
let resultado = 0
let resultadotemp = 0

let band = false


// Boton 1
boton1.addEventListener('click', boton_1)

function boton_1(){
    texto.textContent = texto.textContent + "1"
}


// Boton 2
boton2.addEventListener('click', boton_2)

function boton_2(){
    texto.textContent = texto.textContent + "2"
}


// Boton 3
boton3.addEventListener('click', boton_3)

function boton_3(){
    texto.textContent = texto.textContent + "3"
    
}


// Boton +
botonMas.addEventListener('click', boton_mas)
// Funcion del boton de +
function boton_mas(){
    if(band === false){
        primernum()
        band = true
    }
    if(band === true){
        resultadotemp = Number(texto.textContent)
        resultado = resultado + resultadotemp
        texto.textContent = ""
        console.log(resultado)
    }
}


// Funcion del primer numero de la cuenta
function primernum(){
    resultadotemp = Number(texto.textContent)
    resultado = resultado + resultadotemp
    texto.textContent = ""
    console.log(resultado)
}


// Boton =
botonIgual.addEventListener('click', boton_igual)

// Funcion del boton =
function boton_igual(){
    if(band === false){
        resultado = 0
        console.log("Paso por false")
    }
    if(band === true){
        texto.textContent = String(resultado)
        resultado = 0
        console.log("Paso por True")
    }
}