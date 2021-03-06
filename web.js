var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var f = fs.readFileSync('index.html');
  response.send(f.toString("utf-8", 0, f.length));
});

var port = process.env.PORT || 5000;
app.use("/public",express.static(__dirname+"/public"));
app.listen(port, function() {
  console.log("Listening on " + port);
});
