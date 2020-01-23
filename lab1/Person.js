const chalk = require("chalk");

class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor.toLowerCase();
    }

    speak() {
        console.log(chalk.keyword(this.favoriteColor)(this.name));
    }
    
}

module.exports = Person;