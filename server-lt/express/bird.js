/*Array.prototype.insertAt = function() {
    this.splice.apply(this, [arguments[0], 0].concat(Array.prototype.slice.call(arguments, 1)));

    return this;
}

var arr = ["a", "b", "c"];

arr.insertAt(1, 4,5,6,7);

console.log(arr);

*/
var express = require('express');

var router = express.Router();

router.param('user_id', function myTest(req, res, next, id) {
  // sample user, would actually fetch from DB, etc...
  req.user = {
    id: id,
    name: 'TJ'
  };

  next();
});






/*
router.use(function timeLog(req, res, next) {
    console.log("time:", Date.now());

    next();
});

router.get("/", function(req, res) {
    res.send('birds home page');
});

router.get("/about", function(req, res) {
    res.send('birds about');
});*/


module.exports = router