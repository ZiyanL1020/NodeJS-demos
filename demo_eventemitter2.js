var events = require('events');
var eventEmitter = new events.EventEmitter();

//listener 1
var listener1 = function(){
    console.log("listener 1 fired");
}

//listener 2
var listener2 = function(){
    console.log("listener 2 fired");
}

// Bind the connection event with the listener1 function
eventEmitter.addListener('connection', listener1);
// Bind the connection event with the listener2 function
eventEmitter.on('connection', listener2);

// Display the number of listeners
var numOfListeners = eventEmitter.listenerCount('connection');
console.log(numOfListeners + " listeners are listening to conenction event" );

// fire connection event
eventEmitter.emit('connection');

// remove the binding of listener 1
eventEmitter.removeListener('connection', listener1);
console.log("Listener 1 is removed");

// fire connection event
eventEmitter.emit('connection');

// Display the number of listeners
var numOfListeners = eventEmitter.listenerCount('connection');
console.log(numOfListeners + " listeners are listening to conenction event" );