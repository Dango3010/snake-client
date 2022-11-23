//a separate module for the TCP connection//
const net = require("net");

// establishes a connection with the game server
const connect = function () { //the function sets up a connection and returns an object.
  const conn = net.createConnection({ //use the Node's net library to create an object 
    host: 'localhost',// IP address here,
    port: 50541// PORT number here,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ONO"); //how to send data via TCP
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;