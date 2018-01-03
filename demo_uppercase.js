var upperCase = require('upper-case');
var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(upperCase('hello world!'));
    res.end();
}).listen(8080);