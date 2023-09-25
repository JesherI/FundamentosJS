// Strings
const firstName = 'Francisco';
const lastName = "López";
const fullName = firstName + " " + lastName;

console.log("I'm " + firstName)
console.log("I\'m " + firstName)

console.log(fullName);

// String Multilínea
const menu = `
elige:
1 - Opción 1
2 - Opción 2
3 - Opción 3
`;

console.log(menu);

// String Templates
// placeholder ${ }

const city = 'Huamantla';
const phone = '2471070644';
const rol = 'Proffesor';

const presentation = `
Hola
Soy ${fullName}, ${rol} en la UTT
Vivi en ${city}
Te puedes comunicar conmigo en ${phone}
`;

console.log(presentation);