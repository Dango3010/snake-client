// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
//the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
  if (aww.movement[key]) {
    console.log(`going ${aww.movement[key]}`);
    connection.write(`Move: ${aww.movement[key]}`);
  }
};

module.exports = setupInput;
const aww = require("./constants");
