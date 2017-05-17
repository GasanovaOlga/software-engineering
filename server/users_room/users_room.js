let usersRoom = {};

let socket = require('../socket');
let io = socket.io;

usersRoom.usersNum = 0;

usersRoom.init = () => {
    io.on('connection', function (socket) {
        usersRoom.usersNum++;
        socket.on('new word', function (data) {
            socket.broadcast.emit('new word', {
                message: data
            });
        });
    });
};

usersRoom.addWord = (wordEntry) => {
    io.emit('new word', {
        message: wordEntry
    });
};

module.exports = usersRoom;
