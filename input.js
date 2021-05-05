const net = require("net");

let connection;

let dir = {
    left: '\u0061',
    right: '\u0064',
    up: '\u0077',
    down: '\u0073'
}

let msg = {
    t: '\u0074',
    m: '\u006D',
    p: '\u0070'
}

const handleUserInput = function (key) {
    if (key === '\u0003') {
        console.log('exited');
        process.exit();
    } else if (key === dir.left) {
        connection.write('Move: left');
    } else if (key === dir.right) {
        connection.write('Move: right');
    } else if (key === dir.up) {
        connection.write('Move: up');
    } else if (key === dir.down) {
        connection.write('Move: down');
    } else if (key === msg.t) {
        connection.write('Say: whats up');
    } else if (key === msg.m) {
        connection.write('Say: im hungry');
    } else if (key === msg.p) {
        connection.write('Say: craving donuts');
    }
};

const setupInput = function (conn) {
    connection = conn;

    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    //register handleUserInput as the data callback
    stdin.on('data', (key) => {
    handleUserInput(key);
  });
  

    return stdin;
  };

module.exports = { setupInput };