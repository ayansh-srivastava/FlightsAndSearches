const express=require(`express`);
const bodparser=require(`body-parser`);
const {PORT}=require(`./config/serverConfig.js`);
const CityRepository = require("./repository/cityrepository.js");
const repo=new CityRepository();
repo.deleteCity(1);

serverStart=async ()=>{
    const app=express();
    app.use(bodparser.json);
    bodparser.urlencoded({extended:true});

    app.listen(PORT, ()=>{
        console.log(`Server started on port ${PORT}`);
    })
}
serverStart();