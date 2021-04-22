const EventEmitter = require('events');

const event = new EventEmitter();

event.on('nameiswhat',()=>{
    console.log('my name is lakhan');
})
event.on('nameiswhat',()=>{
    console.log('my name is reshul');
})
event.on('nameiswhat',()=>{
    console.log('my name is lamdu');
})
event.emit('nameiswhat');
