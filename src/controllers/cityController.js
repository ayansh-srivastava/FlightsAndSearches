const city = require("../models/city");
const {cityService}=require(`../services/index`);

const cityservice=new cityService();
const create=async (req,res)=>{
   if(!Array.isArray(req.body)){
      try {
         console.log(req.body)
      const city=await cityservice.createcity(req.body);
      return res.status(201).json({
         data:city,
         success:true
      })
      } catch (error) {
      console.log(error);
      return res.status(500).json({
         data:{},
         success:false,
         err:error
      })
      } 
   }
   else{
      try {
         console.log(req.body,typeof(req.body));
         const city=await cityservice.getMultiple(req.body);
         
         return res.status(201).json({
            data:city,
            success:true
         })
      } catch (error) {
         console.log("controller error",error)
      }

   }
}

const get=async (req,res)=>{
   
    try {
     const city = await cityservice.getCity(req.params.id);

     return res.status(201).json({
         data:city,
         success:true
     })
    } catch (error) {
     console.log(error);
      return res.status(500).json({
         data:{},
         success:false,
         err:error
      })
    } 
 }

 const destroy=async (req,res)=>{
    try {
     const city=await cityservice.deletecity(req.params.id);
     return res.status(200).json({
         data:city,
         success:true
     })
    } catch (error) {
     console.log(error);
      return res.status(500).json({
         data:{},
         success:false,
         err:error
      })
    } 
 }

 const update=async (req,res)=>{
    try {
     const data=await cityservice.updatecity(req.params.id,req.body);
     return res.status(201).json({
         data:data,
         success:true
     })
    } catch (error) {
     console.log(error);
      return res.status(500).json({
         data:{},
         success:false,
         err:error
      })
    } 
 }
 const getAll=async (req,res) => {
   try {
      const cities=await cityservice.getall(req.query);
      return res.status(200).json({
         data:cities,
         success:true
      })
   } catch (error) {
      console.log(error);
      return res.status(404).json({
         data:"Something went wrong",
         success:false
      })
   }
 }
 const airport=async (req,res)=>{
   try {
      const airports=await cityservice.getAirport(req.params.id);
      console.log(airports," in repo")
      return res.status(200).json({
         data:airports,
         success:true
      })
   } catch (error) {
      console.log(error);
      return res.status(404).json({
         success:false
      })
   }
 }
 module.exports={
    create,
    destroy,
    get,
    update,
    getAll,
    airport
 }