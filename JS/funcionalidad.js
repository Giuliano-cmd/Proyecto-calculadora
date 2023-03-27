//* Llamado de Botones //
const botonC = document.getElementById("botonC");
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
let i = 0;
let j = 0;

// Boton 0
boton0.addEventListener('click', boton_0)

function boton_0(){
    j += 1;
    borrar_num();
    texto.textContent += "0";
}


// Boton 1
boton1.addEventListener('click', boton_1)

function boton_1(){
    j += 1;
    borrar_num();
    texto.textContent += "1";
}


// Boton 2
boton2.addEventListener('click', boton_2)

function boton_2(){
    j += 1;
    borrar_num();
    texto.textContent += "2";
}


// Boton 3
boton3.addEventListener('click', boton_3)

function boton_3(){
    j += 1;
    borrar_num();
    texto.textContent += "3";
    
}

// Boton 4
boton4.addEventListener('click', boton_4)

function boton_4(){
    j += 1;
    borrar_num();
    texto.textContent += "4";
}


// Boton 5
boton5.addEventListener('click', boton_5)

function boton_5(){
    j += 1;
    borrar_num();
    texto.textContent += "5";
}


// Boton 6
boton6.addEventListener('click', boton_6)

function boton_6(){
    j += 1;
    borrar_num();
    texto.textContent += "6";
    
}

// Boton 7
boton7.addEventListener('click', boton_7)

function boton_7(){
    j += 1;
    borrar_num();
    texto.textContent += "7";
}


// Boton 8
boton8.addEventListener('click', boton_8)

function boton_8(){
    j += 1;
    borrar_num();
    texto.textContent += "8";
}


// Boton 9
boton9.addEventListener('click', boton_9)

function boton_9(){
    j += 1;
    borrar_num();
    texto.textContent += "9";
    
}

// Boton +
botonMas.addEventListener('click', boton_mas)

function boton_mas(){
    i += 1;
    arreglo_num.push(Number(texto.textContent));
    arreglo_operac.push("+");
    texto.textContent += " +";
    j = 0;
    
    console.log(arreglo_num);
    console.log(arreglo_operac);
}

// Boton -
botonMenos.addEventListener('click', boton_menos)

function boton_menos(){
    i += 1;
    arreglo_num.push(Number(texto.textContent));
    arreglo_operac.push("-");
    texto.textContent += " -";
    j = 0;
    
    console.log(arreglo_num);
    console.log(arreglo_operac);
}

// Boton *
botonMultip.addEventListener('click', boton_multip)

function boton_multip(){
    i += 1;
    arreglo_num.push(Number(texto.textContent));
    arreglo_operac.push("*");
    texto.textContent += " x";
    j = 0;
    
    console.log(arreglo_num);
    console.log(arreglo_operac);
}

// Boton /
botonBarra.addEventListener('click', boton_barra)

function boton_barra(){
    i += 1;
    arreglo_num.push(Number(texto.textContent));
    arreglo_operac.push("/");
    texto.textContent += " ÷";
    j = 0;
    
    console.log(arreglo_num);
    console.log(arreglo_operac);
}


//Boton =
botonIgual.addEventListener('click', boton_igual)

// Funcion del boton =
function boton_igual(){
    arreglo_num.push(Number(texto.textContent));
    resultado += arreglo_num[0];
    i += 1;
    arreglo_operac.push("=");
    for(let l = 0; l < i; l++){
        if(arreglo_operac[l] === "+"){
            resultado += arreglo_num[l+1];
        }
        else if(arreglo_operac[l] === "-"){
            resultado -= arreglo_num[l+1];
        }
        else if(arreglo_operac[l] === "*"){
            resultado *= arreglo_num[l+1];
        }
        else if(arreglo_operac[l] === "/"){
            resultado /= arreglo_num[l+1];
        }
    }

    console.log(arreglo_num);
    console.log(arreglo_operac);


    texto.textContent = resultado;
    reseteo()
}

//funcion boton C
botonC.addEventListener('click', boton_c)

function boton_c(){
    reseteo()
    texto.textContent = "";
}


// Funcion para borrar los numeros de la barra
function borrar_num(){
    if(j === 1){
        texto.textContent = "";
    }
}


// Funcion para resetear variables
function reseteo(){
    arreglo_operac = [];
    arreglo_num = [];
    resultado = 0;
    i = 0;
    j = 0;
}