const Express= require("express");
const App= Express();
const pokemon= require("json-pokemon");
const chalk= require("chalk");
const port= 80;

App.use("/", Express.static("public"));

App.get("/api/id/:id", (req, res)=>{
    let result={"Wrong": "No Answer!"};

    pokemon.forEach((value)=>{
        if(req.params.id == value.id){
            result= value.name;
        }
    });

    if(result.error=="No Answer!"){
        console.log(chalk.red(req.path));
    }else{
        console.log(chalk.green(req.path));
    }
    res.json(result);
});

App.get("/api/name/:name", (req, res)=>{
    let result={"Wrong": "No Answer!"};

    pokemon.forEach((value)=>{
        if(req.params.name == value.name){
            result= value.name;
        }
    });

    if(result.error=="No Answer!"){
        console.log(chalk.red(req.path));
    }else{
        console.log(chalk.green(req.path));
    }

    res.json(result);
});

App.listen(port, ()=>{
    console.log("server is running");
});