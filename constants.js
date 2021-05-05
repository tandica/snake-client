const net = require("net");
const IP = '135.23.222.131';
const PORT = 50542;

const dir = {
    left: '\u0061',
    right: '\u0064',
    up: '\u0077',
    down: '\u0073'
}

const msg = {
    t: '\u0074',
    m: '\u006D',
    p: '\u0070'
}


module.exports = { IP, PORT, dir, msg };