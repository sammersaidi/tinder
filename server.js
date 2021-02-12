var express = require('express'),
  app = express(),
  port = 3000;
  var cors = require('cors');
  app.use(cors());
  
  var routes = require('./api/routes/account');
  routes(app);
  
app.listen(port);

console.log('Tinder api running: ' + port);