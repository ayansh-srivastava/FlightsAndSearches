const express=require('express');
const v1apiroutes=require(`./v1route/index`);
const route=express.Router();
route.use('/v1',v1apiroutes);
module.exports=route;