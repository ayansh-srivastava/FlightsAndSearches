const express=require(`express`);
const bodyParser=require(`body-parser`);
const {PORT}=require(`./config/serverConfig.js`);
const Apiroute=require(`./routes/index.js`)
const app=express();
serverStart=()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(`/api`,Apiroute)

    app.listen(PORT, async ()=>{
        console.log(`Server started on port ${PORT}`);
    })
}
serverStart();