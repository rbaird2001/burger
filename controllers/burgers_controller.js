const express = require("express");
const app = express()
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const burgers = require("../models/burger");

//console.log(burgers.status(1)) //TODO test your import of burger functions

app.get("api/allBurgers",function(req,res){
    let devoured = burgers.status(1)
    let undevoured = burgers.status(0)
});

app.post("api/devour",function(req,res){
    burgers.devour(req.body.burgerID);
    res.redirect("api/allBurgers");
});

app.post("api/newBurger",function(req,res){
    burgers.add(req.body.burgerName)
    res.redirect("api/allBurgers")
});

