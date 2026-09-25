const EventEmitter= require('events');
const ud= new EventEmitter()

ud.on('greet',(name)=>{
    console.log(`Hello there ${name}`)
})
ud.on('exit',(num)=>{
    console.log(`thanku ${num}`)
})
ud.emit('greet','lolo')
ud.emit('exit',100)