var five = require("johnny-five");

board = new five.Board();

board.on("ready", function() {
 
  motor01 = new five.Motor( {
    pin: 3
  });

  motor02 = new five.Motor( {
    pin: 5
  });

  
  board.repl.inject( {
    motor01: motor01,
    motor02: motor02
  });
 
});
