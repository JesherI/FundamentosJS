const resultado = document.getElementById('resultado');
const inputFood = document.getElementById('itemFood');
// Arrays en Javascript
// Colección ordenada de datos

// Declaración o inicializacipon 
const enteros = new Array(1, 2, 3, 4, 5, 6);
console.log(enteros);
console.log(enteros[0]); // último .length -1
enteros[0] = 10;
enteros[2] *= 2;
console.log(enteros);

const fruits = ['apple', '🍕', '🍎', '🍋'];

console.log(fruits);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length); // Numero de elemntos
fruits[0] = '🌮';
console.log(fruits);
resultado.innerText = fruits.join('💠💠');

// Métodos para agregar/eliminar elementos
const food = [];
food.push('🍔'); // Push isertar inserta al final
food.push('🌮');
food.push('🍕');
food.unshift('🍟'); // unshift inseta al inicio
food.unshift('🥞');
food.unshift('🍗');
console.log(food);

let itemFood = food.pop(); // Extraemos del final
console.log(itemFood);
itemFood = food.shift(); // Extraemis del inicio
console.log(itemFood);
console.log(food);

const showLista = () => {
    //Ciclo for para Iterar arrays
    let listaHtml = ''
    for (let i = 0; i < food.length; i++) {
        listaHtml += `<li>${food[i]}</li>`;
    }
    //console.log(listaHtml);
    const ulFood = document.getElementById('comida');
    ulFood.innerHTML = listaHtml;
}

const addFruit = () =>{
    const fruit = inputFood.value;
    food.push(fruit);
    inputFood.value = '';
    showLista();
}