const Express = require("express");
const App = Express();
const port = 8080;

const People = require("./People.js");
let people = new People();


App.get("/people/color/:color", (req, res) => {

    res.send(people.readAllColor(req));

});

App.get("/people/name/:name", (req, res) => {

    res.send(people.readAllName(req));

});

App.get("/people/person/color/:color", (req, res) => {

    res.send(people.readColor(req));

});

App.get("/people/person/name/:name", (req, res) => {
   
    res.send(people.readName(req));

});

App.listen(port, () => {
    console.log("Server running!");
});
