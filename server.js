var express = require('express');
var app = express();

var router = express.Router();

// Middleware
router.use(function(req, res, next) {
  next();
});


app.use(express.static(__dirname + '/dist/'));

// This will ensure that all routing is handed over to static file
app.get('*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 5000);
console.log("Starting Express Server for bartndr_web...");
