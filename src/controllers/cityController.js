const {cityService}=require(`../services/index`);

const cityservice=new cityService();
const create=async (req,res)=>{
   try {
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
 module.exports={
    create,
    destroy,
    get,
    update
 }