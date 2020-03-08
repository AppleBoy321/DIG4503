// Require Express
const Express = require('express');
// Create an application based on a single instance of Express
const App = Express();
// Save the port number to listen to
const port = 80;
// Require Database from "./database.js"
const Database = require("./Database.js");

// Create a new Database object based on its class
// (This will connect to the MongoDB system and save its internal objects.)
let database = new Database();

// Create a route
// A route is a combination of method, path, and response
// Method: GET
// Path: /movies/title/:title
// Response: Either an "error" object or the movie object matching the search
App.get("/movies/title/:title", (req, res) => {

    // Set an "error" result to send back first
    let result = {"error": "Could not find!"};

    // findTitle() will return a Promise
    // Once it finishes, send the response
    database.findTitle(req.params.title).then((movie) => {

        // If a movie was not found, it will be null
        if(movie != null) {
            // If it is not null, set result to whatever movie is
            result = movie;
        }
        
         // Send as a response: either the "error" object or the movie object found
        res.json(result);

    });

});

// Listen on 'port'
App.listen(port, () => {
    // Let the user know the server is running
    console.log("Server running!")
});