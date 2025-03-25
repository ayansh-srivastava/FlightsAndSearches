const {flightServices}=require(`../services/index`);
const flightService=new flightServices();


const create=async (req,res) => {
    try {
        const data=await flightService.createFlight(req.body);
        return res.status(201).json({
            data:data,
            message:'Flight created',
            success:true
        })
        
    } catch (error) {
        console.log("Something went wrong in controller",error);
        return res.status(404).json({
            success:false
        })
    }    
}
const destroy=async (req,res) => {
    try {
        const data=await flightService.destoyFlight(req.params.id);
        return res.status(200).json({
            data:data,
            message:'flight deleted',
            success:true
        })
    } catch (error) {
        console.log("Something went wrong in controller",error);
        return res.status(404).json({
            success:false
        })
    }
}
const update=async (req,res) => {
    try {
        const data=await flightService.updateFlight(req.params.id,req.body);
        return res.status(200).json({
            data:data,
            message:'flight updated',
            success:true
        })
        
    } catch (error) {
        console.log("Something went wrong in controller",error);
        return res.status(404).json({
            success:false
        })
    }
}
const getone=async (req,res) => {
    try {
        const data=await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data:data,
            message:'flight found',
            success:true
        })
    } catch (error) {
        console.log("Something went wrong in controller",error);
        return res.status(404).json({
            success:false
        })
    }
}
const getAll=async (req,res) => {
    try {
        const data=await flightService.getAllFlight(req.query);
        return res.status(200).json({
            data:data,
            message:'flights fetched successfully',
            success:true
        })
    } catch (error) {
        console.log("Something went wrong in controller",error);
        return res.status(404).json({
            success:false
        })
    }
}
module.exports={
    create,
    destroy,
    getone,
    getAll,
    update
}