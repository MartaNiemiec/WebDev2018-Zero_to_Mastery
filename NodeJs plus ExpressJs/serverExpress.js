/*
//====================
// Express
const express = require('express');

const app = express();

// we can use methods like: GET, POST, PUT, DELETE
// express read code line by line

app.get('/', (req, res) => { 
  res.send("getting root"); 
})  

app.get('/profile', (req, res) => { 
  res.send("getting profile"); 
})  

app.post('/profile', (req, res) => { //first param is the path and second param is request and response
  // res.send("<h1>helloooooooo</h1>");  //sending HTML

  const user = {
    name: 'sally',
    hobby: 'soccer'
  }
  res.send(user); //automaticalyy does the JSON.stringify()
})  
app.listen(3000);
*/







//====================
// Express Middleware
const express = require('express');

const app = express();

// we can use methods like: GET, POST, PUT, DELETE
// express read code line by line

app.use((req, res, next) => { // ".use()" is a generic Express middleware 
  console.log('<h1>HELOOOO</h1>');
  next();
});  

app.get('/', (req, res) => { 
  res.send("tested"); 
})  


app.listen(3000);