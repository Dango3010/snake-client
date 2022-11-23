//client.js
const net = require("net");

const connect = require('./client')

console.log("Connecting ...");
connect();
//The game server automatically places your snake on the board as soon as you establish the connection. you should now see your snake appear briefly on the server's game screen.