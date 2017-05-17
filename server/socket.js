let Promise = require('promise'); // jshint ignore:line
let socket = {};

socket.init = (app) => {
    return new Promise((resolve, reject) => {
        let server = require('http').createServer(app);
        let io = require('socket.io')(server);
        socket.io = io;
        server.listen(3000, function () {
            console.log('Socket listening at port %d', 3000);
            resolve();
        });
    });
};


module.exports = socket;

