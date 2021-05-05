const net = require("net");
const { connect } = require("./client");
// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '135.23.222.131',
//     port: 50542
//   });
  
//   // interpret incoming data as text
// conn.setEncoding("utf8");

// conn.on("connect", () => {
//     console.log('time to play');
//     });

//   return conn;
// };


console.log("Connecting ...");
connect();
