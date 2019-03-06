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






/*
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
*/







/*
//====================
// POSTMAN and body-parser
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false})) //parse url-encoded
app.use(bodyParser.json()); //parse json file
app.get('/', (req, res) => { 
  res.send("getting root"); 
})  

app.get('/profile', (req, res) => { 
  res.send("getting profile"); 
})  

app.post('/profile', (req, res) => { 
  console.log(req.body); // access to the posted information; to use it it's needed middleware eg. body-parser
  // const user = {
  //   name: 'sally',
  //   hobby: 'soccer'
  // }
  res.send('Success'); 
})  


app.listen(3000);
*/





//====================
// RESTful API
  // GET:
  //  - req.query (localhost:3000/?name=andrei&age=31)  / "?" = query
  //  - req.body
  //  - req.headers
  //  - req.params

/*
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

// app.get('/', (req, res) => { 
//   // console.log(req.query); 
//   // console.log(req.body)
//   // console.log(req.headers)
// });  

// app.get('/:id', (req, res) => {   // params = id
//   // console.log(req.params) //{ id: '123' }
// }); 

app.get('/:id', (req, res) => { 
  console.log(req.params)
  res.status(404).send("not found");
});  


app.listen(3000);
*/


// STATIC
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/public')); //NodeJsplusExpressJs/public

app.listen(3000);