const express=require(`express`);
const bodyParser=require(`body-parser`);
const {PORT}=require(`./config/serverConfig.js`);
const Apiroute=require(`./routes/index.js`)
const db=require(`./models/index.js`);
const sequelize=require(`sequelize`);
const app=express();
serverStart=()=>{
    if(process.env.SYNC_DB){
    db.sequelize.sync({ alter: true })
    .then(()=>{
        console.log("DB snchronisation successful")
    }
    )
    .catch(error =>{
        console.log("Error snchronising",error)
    });}
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(`/api`,Apiroute)

    app.listen(PORT, async ()=>{
        console.log(`Server started on port ${PORT}`);
    })
}
serverStart();