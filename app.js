var express = require('express');
var app = express();
//var monogoose = require('monogoose');
//mongoose.connect('mongodb://127.0.0.1/admin');

var mongojs = require('mongojs');
var db = mongojs('127.0.0.1/admin', ['itemList']);

app.use(express.static(__dirname + "/views"));
app.get("/itemList", function (req, res) {

    db.itemList.find(function (err, docs) {
        console.log(docs);
        res.jsonp(docs);
    });
    //item = {
    //    name : 'item',
    //    price : '100',
    //    qty : '10'
    //};
    //item2 = {
    //    name : 'item2',
    //    price : '200',
    //    qty : '20'
    //};
    //item3 = {
    //    name : 'item3',
    //    price : '300',
    //    qty : '30'
    //};
    //var itemList = [item, item2, item3];
    //res.jsonp(itemList);
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