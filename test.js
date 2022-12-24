const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3000');

ws.on('open', () => {
  ws.on('message', (message) => {
    console.log(message);
  })
});
