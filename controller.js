const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker.hivemq.com')
var name = 'subhransu'

var message = 'hello world'

client.on('connect', () => {
    setInterval(()=>{
        client.publish(name, message)
        console.log(message+" "+name);
    }, 5000)
})
