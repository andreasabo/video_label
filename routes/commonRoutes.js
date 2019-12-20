var express = require('express');
var router = express.Router();

/* 
	Common routes between the three areas which includes login page
	Root route is '/'
	*/

// Home page	
router.get(['/'], function(req, res) {
    // res.send('Hello World - Andrea!')
  res.render('common/main');
});


module.exports = router;