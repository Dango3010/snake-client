//a separate module for the TCP connection//
const net = require("net");

// establishes a connection with the game server
const connect = function () { //the function sets up a connection and returns an object.
  const conn = net.createConnection({ //use the Node's net library to create an object 
    host: 'localhost',// IP address here,
    port: 50541// PORT number here,
  });
  conn.on("connect", () => {
    // code that does something when the connection is first established
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;