'use strict'

var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://192.168.2.114')

client.on('connect', function () {
  console.log("Client is connected to 192.168.2.114:1883")
    client.subscribe('zimmer/#')
  })

client.on('message', function (topic, message) {
  console.log("message received")
  console.log(message.toString())
})
