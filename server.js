const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

routes = require("./controllers/burgers_controller");
app.use(routes);

app.use(express.static("./public"));

app.listen(PORT, function() {
	console.log("This app is listening on PORT: " + PORT + ".");
});