var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://broker.hivemq.com')
var name = 'subhransu'

client.on('message', (name, message)=>{
    message = message.toString()
    console.log(name+message);
})

client.on('connect', ()=>{
    client.subscribe(name);
})