// Players
let playerOne = 'Juan';
let playerTwo = 'Pedro';
let playerThree = 'Mateo';
let playerFour = 'Lucas';
let playerFive = 'Santiago';

console.log(playerOne, playerTwo, playerThree, playerFour, playerFive);
// Juan Pedro Mateo Lucas Santiago

const players = ['Juan', 'Pedro', 'Mateo', 'Lucas', 'Santiago'];
console.log(playersLiteral);
// ["Juan", "Pedro", "Mateo", "Lucas", "Santiago"]

const playerInfo = ['Juan', 'Dela Cruz', 'Sprint', 25, true, 10.25];
console.log(playerInfo);
// ["Juan", "Dela Cruz", "Sprint", 25, true, 10.25]

/* Creating Array */
// Array Constructor
const playersArray = new Array('Juan', 'Pedro', 'Mateo', 'Lucas', 'Santiago');
console.log(playersArray);
// ["Juan", "Pedro", "Mateo", "Lucas", "Santiago"]

// Array Literal
const playersLiteral = ['Juan', 'Pedro', 'Mateo', 'Lucas', 'Santiago'];
console.log(playersLiteral);
// ["Juan", "Pedro", "Mateo", "Lucas", "Santiago"]

// Split Function
const playersSplit = "Juan,Pedro,Mateo,Lucas,Santiago".split(", ");
console.log(playersSplit);
// ["Juan", "Pedro", "Mateo", "Lucas", "Santiago"]

/* Accessing Array Elements */
//const players = ['Juan', 'Pedro', 'Mateo', 'Lucas', 'Santiago'];
console.log(players.length); // 5
console.log(players[0]); // Juan
console.log(players[players.length - 1]); // Santiago

/* Modifying Array Elements */
//const players = ['Juan', 'Pedro', 'Mateo', 'Lucas', 'Santiago'];
confirm.log(players);
// ["Juan", "Pedro", "Mateo", "Lucas", "Santiago"]

players[0] = 'John';
players[1] = 'Peter';
console.log(players);
// ["John", "Peter", "Mateo", "Lucas", "Santiago"]

/* Sparse Arrays */
players[11] = 'Judas';
console.log(players);
// ["John", "Peter", "Mateo", "Lucas", "Santiago", empty × 6, "Judas"]

/* Deleting Array Elements */
//const players = ['Juan', 'Pedro', 'Mateo', 'Lucas', 'Santiago'];
players.length = 3;
console.log(players);
// ["Juan", "Pedro", "Mateo"]

delete players[1];
console.log(players);
// ["Juan", empty, "Mateo"]

/* Desctructuring Arrays */
//const playerInfo = ['Juan', 'Dela Cruz', 25];
console.log(`FirstName: ${playerInfo[0]}, LastName: ${playerInfo[1]}, Age: ${playerInfo[2]}`);
// FirstName: Juan, LastName: Dela Cruz, Age: 25

let [firstName, lastName, age] = playerInfo;
console.log(`FirstName: ${firstName}, LastName: ${lastName}, Age: ${age}`);
// FirstName: Juan, LastName: Dela Cruz, Age: 25

/* Spread Operator - Shallow */
const sprintPlayers = ['Juan', 'Pedro', 'Mateo'];
console.log(sprintPlayers);
// ["Juan", "Pedro", "Mateo"]

const swimmers = sprintPlayers;
console.log(swimmers);
// ["Juan", "Pedro", "Mateo"]

swimmers[0] = 'John';
console.log(swimmers);
// ["John", "Pedro", "Mateo"]

console.log(sprintPlayers);
// ["John", "Pedro", "Mateo"]

const hurdlesPlayers = [...sprintPlayers];
console.log(hurdlesPlayers);
// ["John", "Pedro", "Mateo"]

hurdlesPlayers[1] = 'Peter';
console.log(hurdlesPlayers);
// ["John", "Peter", "Mateo"]

console.log(sprintPlayers);
// ["John", "Pedro", "Mateo"]