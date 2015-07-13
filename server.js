var express = require('express');
var app = express();

/*app.get('/',function(req,res){
	res.send("Hello World from server.js")
});*/

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(request, response) {
    console.log("hi get");
    var data = [{
        "name": "Muthu",
        "email": "muthu@email.com",
        "Number": "111 111 222"
    }, {
        "name": "Thamizh",
        "email": "thamizh@email.com",
        "Number": "222 222 222"
    }, {
        "name": "Ms",
        "email": "ms@email.com",
        "Number": "33 333 333"
    }, {
        "name": "MSD",
        "email": "msd@email.com",
        "Number": "444 44 444"
    }];
    response.json(data);
});

app.listen(3000);
console.log("localhost:3000 ");
