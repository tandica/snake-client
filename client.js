const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
    const conn = net.createConnection({
      host: IP,
      port: PORT,
    });
    
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
      console.log('time to play');
      conn.write('Name: TTW')
      });
  
    return conn;
  };

module.exports = { connect };