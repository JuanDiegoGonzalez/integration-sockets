var express = require('express');
var router = express.Router();

const movies = require("../controllers/movies");

/* GET home page. */
router.get('/', function(req, res, next) {
  movies.getMovies(data=>{
    res.send(data);
  })
});

module.exports = router;
