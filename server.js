var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
 
app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});
 

// var routes = require("./controllers/catsController.js");

// app.use(routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });