const http = require('http');
const port = 3000;
const fs = require('fs');

const requestHandler = (request, response) => {
  fs.writeFileSync('hello-world.txt', 'Hello to this great world', 'utf8');
  console.log(request.url)
  response.end('Hello Node.js Server!')
};

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
