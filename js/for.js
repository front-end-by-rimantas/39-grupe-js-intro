console.clear();

const marks = [10, 2, 8, 4, 6];

let suma = 0;

for (let i = 0; i < 5; i++) {
    const mark = marks[i];
    suma += mark;
}

console.log('suma:', suma);
console.log('kiekis:', marks.length);
console.log('vidurkis:', suma / marks.length);

const people = ['Petras', 'Maryte', 'Jonas', 'Ona'];

for (let i = 0; i < people.length; i++) {
    const name = people[i];
    console.log(name);
}