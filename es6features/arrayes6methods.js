let characters = [{
    id: 1,
    name: 'James Bond',
    org: 'MI16'
}, {
    id: 2,
    name: 'Jason Bourn',
    org: 'Treadstone'
}, {
    id: 3,
    name: 'Indiana Jones',
    org: 'Archivelogy'
}, {
    id: 4,
    name: 'Ethan Hunt',
    org: 'IMF'
}, {
    id: 5,
    name: 'Tiger',
    org: 'RAW'
}, {
    id: 1,
    name: 'M',
    org: 'MI16'
}];

// 1. forEach() method. ES 3 to ES 5 Compatible method
// characters.forEach(function (value, index) {
//     console.log(`Record at Index ${index} is ${JSON.stringify(value)}`);
// });

// console.log();
// characters.map(function (value, index) {
//     console.log(`Record at Index ${index} is ${JSON.stringify(value)}`);
// });

// return an array of those characters of which name starts from 'J'

let chars = characters.filter((value, index) => {
    return value.name.startsWith('J');
});

// function print(value, index) {
//     return value.name.startsWith('J');
// }

console.log(JSON.stringify(chars));
// let res = characters.find(function (value, index) {
//     return value.id === 1;
// });

let res = characters.find((value, index) => {
    return value.id === 1;
});
console.log(JSON.stringify(res));