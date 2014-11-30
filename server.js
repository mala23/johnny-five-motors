var five = require("johnny-five"),
      board, motor, led;

board = new five.Board();

board.on("ready", function() {
 
  motor = new five.Motor({
    pin: 3
  });
  
  board.repl.inject({
    motor: motor
  });
 
  motor.start();

});
