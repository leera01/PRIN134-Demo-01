let logicalAndOperator = 5 === 5 && 10 === 10;
console.log("LogicalAndOperator: ", logicalAndOperator);
// Output: LogicalAndOperator: true

logicalAndOperator = 5 === 5 && 10 === 11;
console.log("LogicalAndOperator: ", logicalAndOperator);
// Output: LogicalAndOperator: false

let logicalOrOperator = 5 === 5 || 10 === 10;
console.log("LogicalOrOperator: ", logicalOrOperator);
// Output: LogicalOrOperator: true

logicalOrOperator = 5 === 5 || 10 === 11;
console.log("LogicalOrOperator: ", logicalOrOperator);
// Output: LogicalOrOperator: true

let logicalNotOperator = !(5 === 5);
console.log("LogicalNotOperator: ", logicalNotOperator);
// Output: LogicalNotOperator: false

logicalNotOperator = !(5 === 6);
console.log("LogicalNotOperator: ", logicalNotOperator);
// Output: LogicalNotOperator: true

// null or undefined
let nullishCoalescingOperator = null ?? "default value";
console.log("NullishCoalescingOperator: ", nullishCoalescingOperator);
// Output: NullishCoalescingOperator: default value

nullishCoalescingOperator = "value" ?? "default value";
console.log("NullishCoalescingOperator: ", nullishCoalescingOperator);
// Output: NullishCoalescingOperator: value