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

// Boton 1

boton1.addEventListener('click', boton_1)

function boton_1(){
    resultado = resultado + 1
    texto.textContent = texto.textContent + "1"
}

// Boton 2

boton2.addEventListener('click', boton_2)

function boton_2(){
    resultado = resultado + 2
    texto.textContent = texto.textContent + "2"
}

// Boton 3

boton3.addEventListener('click', boton_3)

function boton_3(){
    resultado = resultado + 3
    texto.textContent = texto.textContent + "3"
    
}

// Boton 4

boton4.addEventListener('click', boton_4)

function boton_4(){
    resultado = resultado + 4
    texto.textContent = "4"
}

// Boton 5

boton5.addEventListener('click', boton_5)

function boton_5(){
    resultado = resultado + 5
    texto.textContent = "5"
}

// Boton 6

boton6.addEventListener('click', boton_6)

function boton_6(){
    resultado = resultado + 6
    texto.textContent = "6"
}

// Boton 7

boton7.addEventListener('click', boton_7)

function boton_7(){
    resultado = resultado + 7
    texto.textContent = "7"
}

// Boton 8

boton8.addEventListener('click', boton_8)

function boton_8(){
    resultado = resultado + 8
    texto.textContent = "8"
}

// Boton 9

boton9.addEventListener('click', boton_9)

function boton_9(){
    resultado = resultado + 9
    texto.textContent = "9"
}

// Boton C

botonC.addEventListener('click', boton_C)

function boton_C(){
    texto.textContent = ""
    resultado = 0
}

// Boton Igual

botonIgual.addEventListener('click', boton_igual)

function boton_igual(){
    texto.textContent = resultado
}