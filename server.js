var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist'])


app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(request, response) {
   console.log("hi get");
   db.contactlist.find(function(err,docs){
   		console.log(err,docs)
   		response.json(docs);
   });
});

app.listen(3000);
console.log("localhost:3000 ");
