var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function(req,res){
    res.writeHead('200',{
        'content-type': 'text/html'
    });
    res.write('The date and time are currently: ' + dt.myDateTime() + '</br>');
    res.write('The url is: ' + req.url  + '</br>');
    res.end();
}).listen(8080);