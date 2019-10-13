const express = require("express");
//var exphbs = require("express-handlebars");
const app = express()
//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");
const burgers = require("../models/burger");

//console.log(burgers.status(1)) //TODO test your import of burger functions

app.get("api/allBurgers",function(req,res){
    let dataset = burgers.select();
    return res.render("index",{burgers: dataset})
});

app.post("api/devour",function(req,res){
    burgers.devour(req.body.burgerID);
    res.redirect("api/allBurgers");
});

app.post("api/newBurger",function(req,res){
    burgers.add(req.body.burgerName)
    res.redirect("api/allBurgers")
});

