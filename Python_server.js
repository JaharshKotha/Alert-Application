const http = require('http')  
const port = 4000

const requestHandler = (request, response) => { 
     
    
const spawn = require('child_process').spawn;
const ls = spawn('python', ['script.py',arg 1,arg2 ]);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
      response.end(data);
});
   // response.end(data);
   
  
  
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
    
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
    
})
