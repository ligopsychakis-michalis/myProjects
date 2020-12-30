const express = require('express');


const app = express();

app.use(express.static('public'));

const server = app.listen(8080, () => console.log('Server listen on port 8080...'));

const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('client connected...');

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
}); 