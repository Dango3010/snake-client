const net = require("net");

const connect = require('./client');
const setupInput = require('./input');

console.log("Connecting ...");
//The game server automatically places your snake on the board as soon as you establish the connection. you should now see your snake appear briefly on the server's game screen.

setupInput(connect());

