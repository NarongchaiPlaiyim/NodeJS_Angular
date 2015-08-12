var express = require('express');
var mongoJs = require('mongojs');
var bodyParser = require('body-parser');

var app = express();
var db = mongoJs('127.0.0.1/admin', ['itemList']);
app.use(express.static(__dirname + "/views"));
app.use(bodyParser.json());

app.get("/itemList", function (req, res) {
    db.itemList.find(function (err, docs) {
        res.json(docs);
    });
});

app.post("/itemList", function (req, res) {
    db.itemList.insert(req.body, function (err, docs) {
        res.json(docs);
    });
});

app.delete("/itemList/:id", function (req, res) {
    var id = req.params.id;
    db.itemList.remove({_id: mongoJs.ObjectId(id)}, function (err, docs) {
        res.json(docs);
    });
});

app.get("/itemList/:id", function (req, res) {
    var id = req.params.id;
    db.itemList.findOne({_id: mongoJs.ObjectId(id)}, function (err, docs) {
        res.json(docs);
    });
});

app.put("/itemList/:id", function (req, res) {
    var id = req.params.id;
    console.log('update : '+id);
    console.log('update : '+req.body.name);
    console.log('update : '+req.body.price);
    console.log('update : '+req.body.qty);
});

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