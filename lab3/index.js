const Express = require("express");
const App = Express();
const port = 8080;

App.get("/", function(req, res){
    res.send("Hello World!");
});

App.use("/public", Express.static("public"));

App.listen(port, function() {
    console.log("Server running!");
});
