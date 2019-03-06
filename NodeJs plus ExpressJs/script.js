// RUNNING FILE -> in the terminal write "node script.js" 
// const a = 4;
// const b = 5;

// setTimeout(() => {
//   console.log(a+b);
// },3000)

// console.log(__dirname);  // current directory name



//==================================
// MODULES 
const script2 = require('./script2.js')
const a = script2.largeNumber;
const b = 8;

console.log(a + b); //361


//==================================
// TYPES OF MODULES 
// - own modules like those created before in this file
// - builded/preinstalled in node like:
//    - fs -> file system (with functions like .readFile)
//    - http -> creating a server
//    - packages from NPM like nodemon
// const c = require('fs').readFile;
// const d = require('http')

