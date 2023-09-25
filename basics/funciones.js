// funciones en Javascript

// función sin parámetros y sin retorno
function saluda(){
    console.log('Holaaa!');
}
saluda();
//función con parámetros y sin retorno
function addOne(num){
    console.log(`el ${ num } + 1 = ${  num + 1 }`);
}
addOne(15);

// función con parámetros y con retorno
function suma(num1, num2){
    return num1+num2;
}

const result = suma (12, 34);
console.log(result);

// Funciones como constates
// Funciones anónimas
const resta = function (num1, num2){
    return num1 + num2;
}
const resultado = resta(12,2);
console.log(resultado);

// Funciones de Flecha Arrow Functions
(param1,param2) => {
    //Code
    //return
}

const duplica = (num) => {
    return num * 2;
}

const multiplica = (num1, num2) => {
    console.log('Multiplica números');
    return num1 * num2;
}

const doble = duplica(16);
console.log(doble);

const resultM= multiplica(13,26);
console.log(resultM);

//Simplificado Arrow Functions
let cambiarMinusculas = (word) =>{
    return word.toLowerCase();
}

// Si solo es un único parámetro se pueden omitir parentesis
// Si la única línea es el retun su puede omitir llaves y return
cambiarMinusculas = word => word.toLowerCase(); 