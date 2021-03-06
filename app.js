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
    db.itemList.remove({_id: mongoJs.ObjectId(req.params.id)}, function (err, docs) {
        res.json(docs);
    });
});
app.get("/itemList/:id", function (req, res) {
    db.itemList.findOne({_id: mongoJs.ObjectId(req.params.id)}, function (err, docs) {
        res.json(docs);
    });
});
app.put("/itemList/:id", function (req, res) {
    db.itemList.findAndModify({query: {_id: mongoJs.ObjectId(req.params.id)}, update: {$set: {name:req.body.name,
                                                                                   price:req.body.price,
                                                                                   qty:req.body.qty}}, new: true},
        function (err, docs) {
            res.json(docs);
        });
});
app.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');