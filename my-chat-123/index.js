const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT);

const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('chat', data => {
        if (data.name) {
            io.emit('chatToAll', data);
        } else {
            io.emit('chatToAll', {...data, name:'guest'});
        }
    });

    socket.on('writing', data => {
        if (data) {
            socket.broadcast.emit('writingToAll', data);
        } else {
            socket.broadcast.emit('writingToAll', 'guest');
        }
    });

    socket.on('writingStop', () => {
        io.emit('writingStopToAll');
    });
}); 