'use strict'

var mqtt = require('mqtt')
var client = mqtt.connect([{ host: '192.168.2.114', port: 1883 }])

client.on('connect', function () {
  console.log("Client is connected to 192.168.2.114:1883")
    client.subscribe('zimmer/map')
  })

client.on('message', function (topic, message) {
  console.log("message receives")
  console.log(message.toString())
})
