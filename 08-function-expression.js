// Function Declaration
function areaOfRectangleFD(length, width) {
    return length * width;
}

console.log(areaOfRectangleFD(5, 3)); // 15

// Function Expression
const areaOfRectangleFX = function (length, width) {
    return length * width;
}

console.log(areaOfRectangleFX(5, 3)); // 15

// Arrow Function
const areaOfRectangleAF = (length, width) => length * width;

console.log(areaOfRectangleAF(5, 3)); // 15


// Function Declaration
function areaOfCircleFD(radius) {
    return Math.PI * radius * radius;
}

console.log(areaOfCircleFD(5)); // 78.53981633974483

// Function Expression
const areaOfCircleFX = function (radius) {
    return Math.PI * radius * radius;
}

console.log(areaOfCircleFX(5)); // 78.53981633974483

// Arrow Function
const areaOfCircleAF = radius => Math.PI * radius * radius;

console.log(areaOfCircleAF(5)); // 78.53981633974483

// Arrow Function with no arguments
const calculateArea = () => {
    let triangle = areaOfRectangleAF(5, 3);
    let circle = areaOfCircleAF(5);

    console.log(`Area of Triangle: ${triangle}`);
    console.log(`Area of Circle: ${circle}`);
}

calculateArea();