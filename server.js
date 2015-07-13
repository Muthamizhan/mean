var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist'])

var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

/*fetch whole collection value*/
app.get('/contactlist', function(request, response) {
    console.log("hi get");
    db.contactlist.find(function(err, docs) {
        console.log(err, docs)
        response.json(docs);
    });
});

/*add new values to the collection*/
app.post('/contactlist', function(request, response) {

    console.log(request.body);
    db.contactlist.insert(request.body, function(err, docs) {
        console.log(docs);
        response.json(docs);
    });

});

/*Fetch specific values from collections*/
app.get('/contactlist/:id', function(request, response) {
    var id = request.params.id;
   /* console.log(request.body.name);*/
    db.contactlist.findOne({
        _id: mongojs.ObjectId(id)
    }, function(err, docs) {
        response.json(docs)
    });
});


/*Update Data*/
app.put('/contactlist/:id', function(request, response) {
    var id = request.params.id;
   /* console.log(id);*/
    db.contactlist.findAndModify({
        query: {
            _id: mongojs.ObjectId(id)
        },
        update: {
            $set: {
                name: request.body.name,
                email: request.body.email,
                number: request.body.number
            }
        },
        new: true
    }, function(err, docs) {
        response.json(docs);
    });
});

/*Delete query*/
app.delete('/contactlist/:id', function(request, response) {
    var id = request.params.id;
   /* console.log(id);*/
    db.contactlist.remove({
        _id: mongojs.ObjectId(id)
    }, function(err, docs) {
        response.json(docs)
    });
});

/*set port*/
app.listen(3000);
console.log("localhost:3000 ");
