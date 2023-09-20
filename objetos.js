// Objetos de javascript
/*
objeto ={
    key: value;
    key: value
}
objeto.key
objeto['key']
*/

const subjet = {
    name: 'Aplicaiones Web',
    cuatri: 3,
    professor: 'Francisco',
    'classroom': 'Lab Redes I',
    'total hours': 70,
    weekHours: 5
}

console.log(subjet);
console.log(subjet.name);
console.log(subjet.professor);
console.log(subjet['classroom']);
console.log(subjet['total hours']);

subjet.professor = 'Francisco López';
subjet.career = 'TIADSM';
console.log(subjet);

const student = {
    name: 'Laura Alicia',
    age: 21,
    califications: [10, 10, 8],
    city: 'Apizaco'
}

const group = {
    name: '4B',
    students: [student, student, student],
    subject: [subject, subject, subject]
}

console.log(group);
console.log(group.subject[0].professor);
console.log(group.students[1].califications);
console.log(group.students[1].califications[0]);