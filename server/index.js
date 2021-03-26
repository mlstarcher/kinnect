const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const http = require('http')
const socketio = require('socket.io')

// const controllers = require('./controllers.js');

const Gpio = require('onoff').Gpio
const pinFour = new Gpio(4, 'out')
// const greenLED = new Gpio(5, 'out')
// const blueLED = new Gpio(6, 'out')

const app = express()
app.use(express.json())
app.use(morgan('dev'))
// app.use(cors())

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: "GET,PUT,POST"
  }
});

const port = 4242;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')))

server.listen(port, () => {
    console.log(`Server is up and at em, listening on ${port}`)
})

io.on('connection', socket => {
    console.log('new WS Connection')
    socket.emit('success', 'Welome to Kinnect, connection successful!')

    socket.on('click', input => {
      if (input === 'red') {
        // console.log(input)
        if (pinFour.readSync() === 0) { //check the pin state, if the state is 0 (or off)
            pinFour.writeSync(1); //set pin state to 1 (turn pinFour on)
            setTimeout(switchOff, 60)
          } else {
            pinFour.writeSync(0); //set pin state to 0 (turn pinFour off)
          }
        } else if (input === 'green') {
          if (greenLED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
            greenLED.writeSync(1); //set pin state to 1 (turn greenLED on)
            setTimeout(switchOff, 150)
          } else {
            greenLED.writeSync(0); //set pin state to 0 (turn greenLED off)
          }
        } else if (input === 'blue') {
          if (blueLED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
            blueLED.writeSync(1); //set pin state to 1 (turn blueLED on)
            setTimeout(switchOff, 150)
          } else {
            blueLED.writeSync(0); //set pin state to 0 (turn blueLED off)
          }
        }
    })
})

// var blinkInterval = setInterval(blinkredLED, 250); //run the blinkredLED function every 250ms

// function blinkredLED() { //function to start blinking
//   if (redLED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
//     redLED.writeSync(1); //set pin state to 1 (turn redLED on)
//   } else {
//     redLED.writeSync(0); //set pin state to 0 (turn redLED off)
//   }
// }

function switchOff() { //function to stop blinking
  redLED.writeSync(0); // Turn LED off
  greenLED.writeSync(0);
  blueLED.writeSync(0);
//   LED.unexport(); // Unexport GPIO to free resources
}

// setTimeout(endBlink, 5000); //stop blinking after 5 seconds