const Express = require("express");
const chalk = require("chalk");
const pokemon = require('json-pokemon');
const App = Express();
const port = 80;

App.get("/id/:id", (req, res) => {

    let result = "Wrong! incorrect.";

    pokemon.forEach((value) => {
        if(value.id == req.params.id) {
            result = value;
        }
    });

    if(result == "Wrong! incorrect.") {
        
        console.log(chalk.red(req.path));
    } else {
        
        console.log(chalk.green(req.path));
    }

    res.send(result);

});

App.get("/name/:name", (req, res) => {

    let result = "Wrong! incorrect.";

    pokemon.forEach((value) => {
        if(value.name == req.params.name) {
            result = value;
        }
    });

    if(result.error) {
        
        console.log(chalk.red(req.path));
    } else {
        
        console.log(chalk.green(req.path));
    }

    res.send(result);

});

App.listen(port, () => {
    console.log("Server running!");
});