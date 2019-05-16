const axios = require("axios")

const addr = "http://localhost:8081"
const interval = 43200000

function randomFloat(low, high) {
    return Math.random() * (high - low) + low
}
function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}

function newDate() {
    return new Date().getTime()
}

function sendData() {
    const data = {
        device: "brasil_device",
        temperature: randomInt(-10, 50).toString(),
        hour: newDate().toString(),
        gps: "-3.857450;-38.600702"
    }
    axios.post(addr+"/api/dato", data).then(function(res){
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}
sendData()
setInterval(sendData, interval)
