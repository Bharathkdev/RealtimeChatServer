const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);

    if (Buffer.isBuffer(message)) {
        message = message.toString();
    }
    // broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

server.on('error', (error) => {
    console.error(error);
  });

server.listen(3000, () => {
  console.log('Listening on port 3000');
});
