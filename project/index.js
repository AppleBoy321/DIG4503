const Express = require('express');
const App = Express();
const port = 80;

const CORS = require('cors');
App.use(CORS());

const MongoDB = require('mongodb');
const MongoClient = MongoDB.MongoClient;

const URL = "mongodb+srv://davidrichard:fgwffrfLDJxKX5EL@cluster0-tc9sb.mongodb.net/"

let collection = null;

MongoClient.connect(URL, (error, connection) => {
    if(error) {
        throw error;
    }

    let database = connection.db("DIG4503-78");
    collection = database.collection("Movies");

});


App.get("/movies/year/:year", (req, res) => {
    let result = {"error": "Could not find year!"};

    if(collection != null) {

        collection.find({"year": new RegExp(req.params.year)})
        .limit(100)
        .toArray()
        .then((processedArray) => {
            
            result = processedArray;
            res.json(result);

        });

    } else {
        res.json(result);
    }

    
});

App.listen(port, () => {

});
