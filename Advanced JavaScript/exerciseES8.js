// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';


// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
// "🐢======="

/*
  String.prototype.padStart(padLength [,padString]);
 
  The padStart() method takes two parameters:
  -The padLength is the length of the resulting string once it is padded. If the padLength is less than the string’s length, the string is returned as is without padding.
  -The padString is an optional argument which is used to pad the string. The default value for this parameter is ‘ ‘. If the padString is greater than padLength, the padString will be truncated and only the left-most part will be padded. */

  /*
  The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
   */


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
//'my name is Rudolf the raindeer'


let obj2 = Object.entries(obj).map(value => {
  return `${value[0]} ${value[1]} `;
})
obj2.join('');


// SOLUTION
Object.entries(obj).map(value => value.join(" ")).join(" ");
