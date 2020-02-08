const Person = require("./Person.js");
const faker = require('faker');

class People {
    constructor() {

        this.people = [];

        for(let i = 0; i < 99; i++)
        {
            let name = faker.name.findName();
            let color = faker.commerce.color();
            this.people.push(new Person(name, color));
        }
    }
    readAllColor(req) {

        let result = [];

        this.people.forEach((value)=> {
            if(value.color == req.params.color) {
                result.push(value);
            }
        });

        if(result.length == 0) {
            //Invalid
            result.push({"error": "Can't find!"});
        } else {
            //Valid
        }

        return result;
    }

    readAllName(req) {

        let result = [];

        this.people.forEach((value)=> {
            if(value.name == req.params.name) {
                result.push(value);
            }
        });

        if(result.length == 0) {
            //Invalid
            result.push({"error": "Can't find!"});
        } else {
            //Valid
        }

        return result;
    }

    readColor(req) {

        let result = {"error": "Can't find!"};

        this.people.forEach((value)=> {
            if(value.color == req.params.color) {
                result = value;
            }
        });

        if(result.error) {
            //Invalid
        } else {
            //Valid
        }

        return result;
    }

    readName(req) {

        let result = {"error": "Can't find!"};

        this.people.forEach((value)=> {
            if(value.name == req.params.name) {
                result = value;
            }
        });

        if(result.error) {
            //Invalid
        } else {
            //Valid
        }

        return result;

    }

}

module.exports = People;
