//create user specific routes
var user = require('../models/user');

var express = require('express');
var router = express.Router();

router.post('/login', function(req, res) {
	//var userModel = new userModel;

	user.username =  req.body.username;
	user.password = req.body.password;

	user.find(function(err, record) {
		if(err)
			res.json({status: 500, message: "Something went wrong!"});
		else if(record == null)
				res.json({status: 500, message: "Something went wrong!"});
		else
			console.log(record)
			if(record[0].password == req.body.password) 
				res.json({status: 200, message: "Successfully logged!", data: record});
			else
				res.json({status: 200, message: "Username or Password invalid!"});

	});

});


router.get('/register', function(req, res) {
	res.sendFile(__dirname + '/newuser.html');
});

module.exports = router;
