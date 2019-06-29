var Process = require('process');

function showEnv(a, b) {
    console.log(Process.env)
}
module.exports = showEnv;