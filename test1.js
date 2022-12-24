const WebSocket = require('ws');

const ws = new WebSocket('wss://c208-121-200-48-218.in.ngrok.io');

ws.on('open', () => {
  ws.send(JSON.stringify({id: new Date().getTime(), type: 'order', name: '27', contact: "7777777787", itemsPlaced: "Car", delivery: "1st Jan 2023", time: new Date().getTime()}));
  ws.close();
});
