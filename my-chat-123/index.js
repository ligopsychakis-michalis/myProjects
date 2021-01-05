const express = require('express');
const app = express();

//create server
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT);

//serve the site
app.use(express.static('public'));

//call socket.io package
const io = require('socket.io')(server);

//event for web-socket connection
io.on('connection', socket => {
    console.log('user connected');
    socket.on('chat', data => {
        io.emit('chatToAll', data);
    });

    socket.on('writing', data => {
        socket.broadcast.emit('writingToAll', data);
    });

    socket.on('writingStop', () => {
        io.emit('writingStopToAll');
    });
}); 