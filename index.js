const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('A client connected');

  socket.on('messages', (msg) => {
    console.log(`Received message: ${msg}`);
    io.emit('messages', msg);
  });

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Listening on port 3000');
});
