// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes("John");

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John')) // ['Johnathan']

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (num) => num**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
power100(10000);   // infinity
/*
Infinity is a numeric value that represents positive infinity.
-Infinity is a numeric value that represents negative infinity.
Infinity is displayed when a number exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308.
-Infinity is displayed when a number exceeds the lower limit of the floating point numbers, which is -1.797693134862316E+308.
*/