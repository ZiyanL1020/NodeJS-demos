var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('connection', function(){
    console.log("Connect successfully");
    eventEmitter.emit('data_received');
});


eventEmitter.on('data_received', function(){
    console.log('data received successfully');
});

eventEmitter.emit('connection');

console.log("Program ended");