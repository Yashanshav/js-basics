
const marvel_heroes = ['thor', 'ironman', 'spiderman'];
const dc_heroes = ['batman', 'superman', 'flash'];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes); // Output: [ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ] -> adds array as an element
// console.log(marvel_heroes[3][2]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes); //Output: [ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ] -> merges both arrays and make an new array

// const all_new_heroes = [...marvel_heroes, ...dc_heroes]; // spread operator (works same as concat, more preferred)
// console.log(all_new_heroes);

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [4, 5], 9];
// const flatArray = anotherArray.flat(Infinity); //Output: [1, 2, 3, 4, 5, 6, 7, 4, 5, 9]
// console.log(flatArray);

// console.log(Array.isArray("Hitesh")); //Output: false
// console.log(Array.from("Hitesh")); //Output: [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "Hitesh"})); //Output: [] //Interesting case for interviews

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //Output: [ 100, 200, 300 ]

// Read more about isArray(), from() and of() in arrays
