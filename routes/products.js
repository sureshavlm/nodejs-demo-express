var express = require('express');

var router = express.Router();

router.get('/all', function(req, res) {
	var products = ['Milk', 'Chocklates', 'Pizza'];
	res.json(products);
}); 

router.post('/add', function(req, res) {

});

router.post('/update/:productId', function() {

});

module.exports = router