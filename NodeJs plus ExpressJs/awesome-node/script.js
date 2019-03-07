//=========================
// NODE FILE SYSTEM MODULE

const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('errrrrooorr');
  } 
  console.log('Async', data.toString('utf8')); // by default is using 'utf8' encoding // For now just know that UTF 8 is a type of encoding that is pretty much standard across the web. // ASCII was before UTF 8 existed. ASCII was mainly for Latin based languages, so the ABCs; and UTF expanded that to include many more from many more languages from different parts of the world.
})

const file = fs.readFileSync('./hello.txt');  // sync stands for synchronous.
console.log('Sync', file.toString());


//=================
// APPEND
// adding text to the file './hello.txt'
fs.appendFile('./hello.txt', ' This is so cool!', err => {
  if (err) {
    console.log(err);
  }
})


//=================
// WRITE
// create a file with content

// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//   if (err) {
//     console.log(err);
//   }
// })



//=================
// DELETE
// create a file with content

fs.unlink('./bye.txt', err => {
  if (err) {
    console.log(err);
  }
  console.log('Inception');
})










