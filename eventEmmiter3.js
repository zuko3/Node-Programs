const EventEmitter = require('events');
class MyEmitter  extends EventEmitter  {}
const myEmitter = new MyEmitter();

myEmitter.on('event', function(a, b) {
    setTimeout(()=>console.log("zero timeout"),0);
    setImmediate(() => console.log('this happens asynchronously'));
    console.log('processed in first iteration',a,b);
  });
  myEmitter.emit('event', 'Technoetics', 'Club');