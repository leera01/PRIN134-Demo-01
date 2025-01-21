function sayHello() {
    console.log('Hello');
}

sayHello(); // Hello

// Function with parameter
function sayHelloTo(name) {
    console.log(`Hello ${name}`);
}

sayHelloTo('Juan'); // Hello Juan

// Function with default parameter
function sayHelloTo(name = 'stranger') {
    console.log(`Hello ${name}`);
}

sayHelloTo(); // Hello stranger
sayHelloTo('Pedro'); // Hello Pedro

// Function with return value
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

let fullName = getFullName('Juan', 'Dela Cruz');
console.log(fullName); // Juan Dela Cruz

// Function with an early return value
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
    console.log('This will not be executed');
}

fullName = getFullName('Pedro', 'Penduko');
console.log(fullName); // Juan Dela Cruz

// Function as a variable
function doStepOne() {
    console.log("Executing Step 01.");
}

function doStepTwo() {
    console.log("Executing Step 02.");
}

function executeSteps() {
    doStepOne();
    doStepTwo();
}

executeSteps();

const startSteps = executeSteps;
console.log(startSteps); // [Function: executeSteps]
startSteps(); // Executing Step 01. Executing Step 02.

// Function with callback
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

// usage: functions doStepOne, doStepTwo are passed as arguments to ask
ask("Do you agree?", doStepOne, doStepTwo);

// Function with callback
function sayCountdownComplete() {
    console.log("Countdown complete!");
}

function executeAfterNSeconds(seconds, callback) {
    setTimeout(callback, seconds * 1000);
}

executeAfterNSeconds(3, sayCountdownComplete); // Countdown complete! after 3 seconds