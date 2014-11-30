var five = require("johnny-five");

board = new five.Board();

board.on("ready", function() {
 
  motor01 = new five.Motor( {
    pin: 3
  });

  motor02 = new five.Motor( {
    pin: 5
  });

  motor03 = new five.Motor( {
    pin: 6
  });

  motor04 = new five.Motor( {
    pin: 9
  });
  
  board.repl.inject( {
    motor01: motor01,
    motor02: motor02,
    motor03: motor03,
    motor04: motor04
  });
 
});
