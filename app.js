// module dependencies
var express = require('express');


// app instance
var app = express.createServer();


// development mode configurations
app.configure('development', function() {
  // static directory
  app.use('/static', express['static'](__dirname + '/static'));
});


// route loader
var load = function(route) {
  var pieces = route.split('.');

  // load module
  var module = require('./routes/' + pieces[0]);

  // module action
  return module[pieces[1]];
};


// routes
app.get('/', load('home.index'));


// start server
app.listen(3000);
console.log('Express server listening on port %d in %s mode', app.address().port, app.settings.env);
