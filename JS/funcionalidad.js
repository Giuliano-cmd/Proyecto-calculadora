//* Llamado de Botones //
const botonC = document.getElementById("botonC");
const botonParentesis = document.getElementById("botonParentesis");
const botonBarra = document.getElementById("botonBarra");
const botonIgual = document.getElementById("botonIgual");
const botonMas = document.getElementById("botonMas");
const botonMenos = document.getElementById("botonMenos");
const botonMultip = document.getElementById("botonMultip");
const botonComa = document.getElementById("botonComa");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("boton6");
const boton7 = document.getElementById("boton7");
const boton8 = document.getElementById("boton8");
const boton9 = document.getElementById("boton9");
// Llamado del texto
const texto = document.getElementById("texto");

// Variables usadas
let resultado = 0;
let arreglo_operac = [];
let arreglo_num = [];
i = 0;


// Boton 1
boton1.addEventListener('click', boton_1)

function boton_1(){
    texto.textContent += 1;
}


// Boton 2
boton2.addEventListener('click', boton_2)

function boton_2(){
    texto.textContent += 2;
}


// Boton 3
boton3.addEventListener('click', boton_3)

function boton_3(){
    texto.textContent += 3;
    
}

// Boton +
botonMas.addEventListener('click', boton_mas)

function boton_mas(){
    i += 1;
    arreglo_num.push(Number(texto.textContent))
    arreglo_operac.push("+");
    
    
    if(arreglo_num.length === 1){
        resultado = Number(texto.textContent);
        texto.textContent = resultado;
    }
    else{
        resultado += arreglo_num[i - 1];
        texto.textContent = resultado;
    }
    


    
    console.log(arreglo_num);
    console.log(arreglo_operac);
}

//Boton =
botonIgual.addEventListener('click', boton_igual)

// Funcion del boton =
function boton_igual(){
    texto.textContent = resultado;
    resultado = 0;
    i = 0;
}






/** 

// Boton +
botonMas.addEventListener('click', boton_mas)
// Funcion del boton de +
function boton_mas(){
    operaciones();
}


// Funcion del primer numero de la cuenta
function operaciones(){
    if(band === false){
        let primNum = Number(texto.textContent);
        resultado = resultado + primNum;
        texto.textContent = "";
        band = true;
        console.log(resultado);
        console.log("Pasa por false (suma)");
    }
    else if(band === true){
        let segNum = Number(texto.textContent);
        resultado = resultado + segNum;
        texto.textContent = Number(resultado);
        console.log(resultado);
        console.log("Pasa por true (suma)");
    }
}

//Boton =
botonIgual.addEventListener('click', boton_igual)

// Funcion del boton =
function boton_igual(){
    if(band === false){
        console.log("Paso por false (igual)");
    }
    if(band === true){
        texto.textContent = String(resultado);
        console.log("Paso por True (igual)");
    }
}

*/