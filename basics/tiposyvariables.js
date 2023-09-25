// Tipos en Javascript
// nombbre, string, boolean, object, undefined
// typeof nos dice el tipo de dato 

console.log(12);
console.log(typeof(12))

console.log('string');
console.log(typeof('string'));

console.log(true);
console.log(typeof(true));

let variable;
console.log(typeof(variable));

console.log([1,2,3,]);
console.log(typeof([1,2,3]));

// Variables en Javascript
// Versines anteriores ES6 var

var firstName = 'Tony Stark';

// const y let de ES6 en adelante
// constatantes const (variables de solo lectura)
// Siempre debe inicializarse
// No permite reasignación

const PI = 3.14;
// PI = 3.14;

// Variables con let
// declarar
let lastName; //undefined
lastName = 'Pérez';
lastName = true;
lastName = 25;