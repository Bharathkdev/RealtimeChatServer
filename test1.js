const socketIO = require('socket.io-client');

const io = socketIO.connect('https://224a-49-206-115-118.in.ngrok.io');

io.on('connect', () => {
  console.log('Connected to server');
  io.emit('messages',  {id: new Date().getTime(), type: 'order', name: 'abi', contact: '9893893933', itemsPlaced: 'kdjnj', delivery: new Date().toLocaleDateString(), deviceId: '873838898', time: new Date().getTime()});
  io.disconnect();
});
