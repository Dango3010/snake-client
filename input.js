// setup interface to handle user input from stdin
//the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (key) {
    if (key === '\u0003') { // \u0003 maps to ctrl+c input
      process.exit();
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;