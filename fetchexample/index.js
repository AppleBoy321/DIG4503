const Express = require("express");
const App = Express();
const port = 80;
const fs = require("fs");

// Read the entire contents of a file
let fileContents = fs.readFileSync("database.json");
// Convert the string contents (object notation) into JavaScript (object)
let database = JSON.parse(fileContents);

// Server static files in the 'public' directory from the "/" path
App.use("/", Express.static("public"));

App.get("/api/movies/score/:score", (req, res) => {

    let result = {"error": "Not found!"};

    database.forEach((value) => {
        if(req.params.score == value.score) {
            result = value;
        }
    });
    
    res.json(result);
});

App.get("/api/movies/name/:name", (req, res) => {

    let result = {"error": "Not found!"};

    database.forEach((value) => {
        if(req.params.name == value.name) {
            result = value;
        }
    });
    
    res.json(result);
});

App.get("/api/movies/score/less/:score", (req, res) => {

    let result = {"error": "Not found!"};
    let tempArray = [];

    database.forEach((value) => {
        if(req.params.score < value.score) {
            tempArray.push(value);
        }
    });

    if(tempArray.length > 0) {
        result = tempArray;
    }
    
    res.json(result);
});

App.post("/api/movies/:name/:score", (req, res) => {

    let result = {
        "name": req.params.name,
        "score": parseInt(req.params.score)
    };

    database.push(result);

    fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));

    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});
