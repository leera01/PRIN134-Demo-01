// Global Scopes
let firstName = 'Juan';

const displayFirstName = () => {
    console.log(firstName);
}

displayFirstName(); // Juan

// Block Scopes
const displayLastName = () => {
    let lastName = 'Dela Cruz';
    console.log(lastName);
}

displayLastName(); // Dela Cruz
console.log(lastName); // ReferenceError: lastName is not defined

// Scope Pollution
let emailAddress = 'Juan.DelaCruz@email.com';
const displayEmailAddress = () => {
    emailAddress = 'Pedro.Penduko@email.com';
    console.log(emailAddress);
}

displayEmailAddress(); // Pedro.Penduko@email.com
console.log(emailAddress); // Pedro.Penduko@email.com