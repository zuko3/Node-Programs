const event = require('events');
const eventEmmiter = new event.EventEmitter();

const connection = () => console.log("connection establish");

const close = () => console.log("connection closed");

eventEmmiter.addListener("connect",connection);
eventEmmiter.addListener('close',close);

setTimeout(function(){
    eventEmmiter.emit('close');
},2000)
eventEmmiter.emit('connect');


//And finally, if you need to remove a listener, you can use the removeListener method.
//And if u want to add listeners u can use addListener

/* ORDER OF LSITNERS  */

// If we register multiple listeners for the
// same event, the invocation of those listeners will be in order.
// // प्रथम
// withTime.on('data', (data) => {
//     console.log(`Length: ${data.length}`);
// });  
//   // दूसरा
// withTime.on('data', (data) => {
//     console.log(`Characters: ${data.toString().length}`);
// });



// If you need to define a new listener, but have that 
// listener invoked first, you can use the prependListener method:

// // प्रथम
// withTime.on('data', (data) => {
//   console.log(`Length: ${data.length}`);
// });
// // दूसरा
// withTime.prependListener('data', (data) => {
//   console.log(`Characters: ${data.toString().length}`);
// });

// The above will cause the “Characters” line to be logged first.