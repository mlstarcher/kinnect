const socket = io();

socket.on('success', success => console.log(success))

// const redButton = document.getElementById('red-button')
// redButton.addEventListener('click', () => {
//   socket.emit('click', 'red')
//   console.log('red button was clicked')
// })

// const greenButton = document.getElementById('green-button')
// greenButton.addEventListener('click', () => {
//   socket.emit('click', 'green')
//   console.log('green button was clicked')
// })

// const blueButton = document.getElementById('blue-button')
// blueButton.addEventListener('click', () => {
//   socket.emit('click', 'blue')
//   console.log('blue button was clicked')
// })

// UPDATE: there is a problem in chrome with starting audio context
//  before a user gesture. This fixes it.
document.documentElement.addEventListener('mousedown', () => {
  if (Tone.context.state !== 'running') Tone.context.resume();
});

const $rows = document.body.querySelectorAll('div > div'),
      notes = ['C5', 'C#4', 'D4'];
let index = 0;

Tone.Transport.scheduleRepeat(repeat, '8n');
Tone.Transport.start();

function repeat(time) {
  let step = index % 8;
  for (let i = 0; i < $rows.length; i++) {
    // let synth = synths[i],
    //     note = notes[i],
        $row = $rows[i],
        $input = $row.querySelector(`input:nth-child(${step + 1})`);
    if ($input.checked) socket.emit('click', 'red')
    console.log('red button was clicked');
  }
  index++;
}
