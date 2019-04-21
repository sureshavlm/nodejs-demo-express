
var express = require("express"); //MVC web framework
var bodyParser = require("body-parser");

var user = require('./routes/user');
var products = require('./routes/products');
var admin = require('./routes/admin');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mar19'); 
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error: '));

db.once('open', function(callback) {
//The code in this asynchronous callback block is executed after connecting to MongoDB. 
    console.log('Successfully connected to MongoDB.');
});




app = express();

app.use(bodyParser.json()); //convert to JSON
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', user); //tunnel http://localhost:3000/user/login
app.use('/products', products);
app.use('/admin', admin);

app.listen(3000, function() {
	console.log("Server up and running on port 3000");
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});