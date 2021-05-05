const net = require("net");
const { connect } = require("./client");


const handleUserInput = function (key) {
    if (key === '\u0003') {
        process.exit();
    }
};

const setupInput = function () {
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


console.log("Connecting ...");
connect();
setupInput();
