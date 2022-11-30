//a separate module for the TCP connection//
const net = require("net");
const b = require("./constants");

// establishes a connection with the game server
const connect = function () { //the function sets up a connection and returns an object.
  const conn = net.createConnection({ //use the Node's net library to create an object 
    host: b.IP,// IP address here,
    port: b.PORT// PORT number here,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ONO"); //how to send data via TCP
  });

  // conn.on("connect", () => {
  //   conn.write("Say: mochi"); //sending messages, allowing players to banter. another way to do it is in input.js
  // });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;
