var express = require('express');
var app = express();


app.use(
    express.static(__dirname + "/views")
);

app.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

//app.get('/', function(req, res){
//        res.send("Hello app.js");
//    }
//).listen(1337, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');


/*var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');*/