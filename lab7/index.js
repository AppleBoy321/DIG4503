// Require Express
const Express = require('express');
// Create an application based on a single instance of Express
const App = Express();
// Save the port number to listen to
const port = 80;
// Require cors
const cors = require('cors');
// Setup cors as a middleware BEFORE any other routes!
App.use(cors());

// Require Database from "./Database.js"
const Database = require("./Database.js");

// Create a new Database object based on its class
// (This will connect to the MongoDB system and save its internal objects.)
let database = new Database();

// Create a route
// A route is a combination of method, path, and response
// Method: GET
// Path: /movies/title/:title
// Response: 
// - Either an "error" object OR 
// - The movie object matching the search
App.get("/movies/title/:title", (req, res) => {

    // Set an "error" result to send back first
    let result = {"error": "Could not a movie with that title!"};

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

// TODO: Add a route /movies/year/:year
App.get("/movies/year/:year", (req, res) => {
    let result = { "error": "Couldn't find a movie in that year!" };

    database.findYear(req.params.year).then((movie) => {
        if (movie != null) {
            result = movie;
        }
        res.json(result);

    });

});


// Listen on 'port'
App.listen(port, () => {
    // Let the user know the server is running
    console.log("Server running!")
});