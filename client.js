var mqtt = require('mqtt')
var client = mqtt.connect([{ host: '192.168.2.114', port: 1883 }])

client.on('connect', function () {
    client.subscribe('zimmer/#')
  })

  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
  })
