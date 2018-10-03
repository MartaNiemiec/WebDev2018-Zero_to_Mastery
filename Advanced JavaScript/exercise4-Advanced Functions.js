//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const addition = (a, b) => a + b; 
// const addition = (a) => (b) => a + b; 


//Closure: What does the last line return?  // 13
const addTo = x => y => x + y
var addToTen = addTo(10)    // x=10
addToTen(3) //y=3   // 10+3= 13 

//Currying: What does the last line return?     // 31
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)   // curriedSun(a-30)(b=1); then 30+1=31


//Currying: What does the last line return?     // 17
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)  // a=5
add5(12)    // =curriedSum(5)(12) so b=12 // 5+12 = 17

//Composing: What does the last line return?    // 16
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
//add1(add5(10)) ->  add1(10+5=15) -> 15+1=16

//What are the two elements of a pure function?
avoid side effects and deterministic

1. Deterministic --> always produces the same results given the same inputs
2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.