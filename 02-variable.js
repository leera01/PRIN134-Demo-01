// using var keyword
var firstName = 'Arya';
alert(firstName);

var firstName = 'Jon';
alert(firstName);

// using let keyword
let lastName = 'Stark';
alert(lastName);

// lastName = 'Snow';
alert(lastName);

// using const keyword
const address = 'Winterfell';
address = 'The Wall'; // TypeError: Assignment to constant variable.
alert(address);