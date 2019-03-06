/*
const http = require('http');

const server = http.createServer((request, response) => {
  // console.log('I hear you!');
  console.log('headers', request.headers);
  console.log('method', request.method);
  console.log('url', request.url);

  //--------
  // HTML
  // response.setHeader('Content-type', 'text/html');
  // response.end('<h1>Helloooo</h1>')

  
  //--------
  //JSON
  const user = {
    name: 'John',
    hobby: 'Skating'
  }
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify(user))  //change object into json string
})

server.listen(3000) // listen on localhost:3000
*/