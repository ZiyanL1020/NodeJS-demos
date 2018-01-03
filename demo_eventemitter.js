var http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitter();

http.createServer(function(req,res){
    eventEmitter.on('scream', function(){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end("Scream event is fired");
    });
    eventEmitter.emit('scream');
}).listen(8080);