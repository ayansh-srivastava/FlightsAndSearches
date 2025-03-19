const express=require(`express`);
const bodparser=require(`body-parser`);
const {PORT}=require(`./config/serverConfig.js`);

serverStart=async ()=>{
    const app=express();
    app.use(bodparser.json);
    bodparser.urlencoded({extended:true});

    app.listen(PORT, ()=>{
        console.log(`Server started on port ${PORT}`);
    })
}
serverStart();