// npm install play-sound

var player = require('play-sound')({player: "afplay"});
// configure arguments for executable if any
player.play('ELEVATOR.wav', { aplay: [ '-v', 10 ] }, function(err){
  if (err) throw err
});