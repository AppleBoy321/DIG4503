const Express = require("express");
const App = Express();
const port = 8080;

App.get("/", function(Request, Response) {
    Response.send("Hello World!");
});

App.get("/public", function(Request, Response) {
    Response.send("Public");
});

App.listen(port, function(){
        console.log("Server running!");
});
