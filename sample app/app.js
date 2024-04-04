/// to import we use require keyword
const http = require('http');

const server = http.createServer((req, res) =>{
    let url = req.url;
    let method = req.method;
    if(url == '/product'){
        res.setHeader('Content-Type','text/html');
        res.write(`<form><input type="text"</form>`)
    }
    res.write("<h4>Hello this is my first app </h4>");
})

server.listen(3000);


//// --save = production => environment
//// --sve-dev = dev/test
/// -g => global installation 