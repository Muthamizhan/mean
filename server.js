var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist'])

var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(request, response) {
   console.log("hi get");
   db.contactlist.find(function(err,docs){
   		console.log(err,docs)
   		response.json(docs);
   });
});

app.post('/contactlist',function(request,response){

	console.log(request.body);
	db.contactlist.insert(request.body,function(err,docs){
		console.log(docs);
		response.json(docs);
	});

});

app.delete('/contactlist/:id',function(request,response){
	var id = request.param.id;
	console.log(id);
	db.contactlist.remove({_id:mongojs.ObjectId(id)},function(err,docs){
		response.json(docs)
	});
});

app.listen(3000);
console.log("localhost:3000 ");
