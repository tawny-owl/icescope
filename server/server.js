var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server)

app.use(express.static(__dirname + '/../client/'));
app.listen(process.env.PORT || 8200);

io.on('connection', function(socket) {
  socket.on('chat message', function(message){

      io.emit('chat message', message);

      console.log('message: ' + message);

  });

});