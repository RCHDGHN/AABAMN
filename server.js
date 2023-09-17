const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve your static HTML, CSS, and JavaScript files here (if needed).

io.on('connection', (socket) => {
    console.log('A user connected.');

    // Handle button click events
    socket.on('buttonClick', (buttonId) => {
        // Broadcast the button click to all connected clients
        io.emit('buttonClick', buttonId);
    });

    // Handle disconnect event
    socket.on('disconnect', () => {
        console.log('A user disconnected.');
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
