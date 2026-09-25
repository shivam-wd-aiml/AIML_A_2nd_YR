const { timeStamp } = require('console');
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

class Button extends EventEmitter{
    click(){
        console.log('Button clicked')
        this.emit('click',{timeStamp: Date.now()});
    }
}
const butt= new Button();
butt.on('click',(event)=>{
    console.log(`Event at ${event.timeStamp}`)
})
butt.click();