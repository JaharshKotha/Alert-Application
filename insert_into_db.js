const http = require('http')  
const port = 4000

const requestHandler = (request, response) => { 
     

    console.log(request.url);
    request.on('data', function (data) {
           
            console.log("Partial body: " + data);
        });
console.log("I'm active");
  
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
    
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
    
})
