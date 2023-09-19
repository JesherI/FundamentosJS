// Funciones de Orden superior
// High Order Functions
// Funciones que reciben otras funciones como parámetros

const myFunctionWithBigName = () =>{
    console.log('Esta es una Función');
}

myFunctionWithBigName();

const myFun = myFunctionWithBigName;

myFun();

const funOne = () =>{
    console.log('Ejecuta función 1');
}

const funTwo= () =>{
    console.log('Hola' + name);
    console.log('Ejecuta función 2');
}

funOne();
funTwo('Jeshersin_09');

const funThree = (otherFunction) => {
    otherFunction();
    console('Ejecuta función 3');
}

funThree(funOne);