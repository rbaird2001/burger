//const express = require("express");
//var exphbs = require("express-handlebars");
//const app = express()
//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");
const burgers = require("../models/burger");

//console.log(burgers.status(1)) //TODO test your import of burger functions
module.exports = (app) => {
    app.get("/api/allburgers",function(req,res){
        burgers.select()
        .then(function(dataset){
        res.render("index",{burgers: dataset})
        });
    });
    
    app.put("/api/devour",function(req,res){
        console.log(req.body);
        burgers.devour(req.body.burger_name)
        .then(function(resp){
            console.log(resp);
            res.redirect("/api/allBurgers");
        })
        .catch(function(err){console.log(err)});
    })

    app.post("/api/newBurger",function(req,res){
        console.log(req.body);
        burgers.add(req.body.burger_name,0)
        .then(function(resp){
            res.redirect("/api/allBurgers")
        })
        .catch(function(err){console.log(err)});
    });
    
    app.get("/",function(req,res){
        burgers.select()
        .then(function(dataset){
            res.json(dataset);
        })
    })
}    

//module.exports = app

//const PORT = process.env.PORT || 8080;

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");

//routes = require("./controllers/burgers_controller");
//app.use(routes);

// app.use(express.static("public"));

// app.listen(PORT, function() {
// 	console.log("This app is listening on PORT: " + PORT + ".");
// });