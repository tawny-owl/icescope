var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/../client/'));
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile(path.resolve(__dirname + '/../client/room.html'));
});
app.listen(process.env.PORT || 8000);
