const { where } = require("sequelize");
const {Flight}=require(`../models/index.js`);
const {Op}=require(`sequelize`)


class FlighRepository{

    #createFilter(data) {
        let filterConditions = [];
        
    
        if (data.arrivalAirportId) {
            filterConditions.push({ arrivalAirportId: Number(data.arrivalAirportId) });
        }
    
        if (data.departureAirportId) {
            filterConditions.push({ departureAirportId: Number(data.departureAirportId) });
        }
    
        if (data.minPrice) {
            filterConditions.push({ price: { [Op.gte]: Number(data.minPrice) } });
        }
    
        if (data.maxPrice) {
            filterConditions.push({ price: { [Op.lte]: Number(data.maxPrice) } });
        }
    
        let filter = filterConditions.length ? { [Op.and]: filterConditions } : {};
    
        return filter;
    }


    async createFlight(data){
        try {
        const flight=await Flight.create(data)
        return flight;   
        } catch (error) {
            console.log("Something went wrong in repo later",error)
        }
    }
    async getAllFlights(data){
        try {
            const filter=this.#createFilter(data);
            
            const flight=await Flight.findAll({
                where:filter
            })
            console.log(flight);
            return flight;
            }
            
        catch (error) {
            console.log("Something went wrong in repo later",error)
            }
    }
    async updateFlight(id,data){
        try {        
            const flight=await Flight.findByPk(id);
            const res=await flight.update(data);
            return res 
        
            }
        catch (error) {
            console.log("Something went wrong in repo later",error)
        }
    }
    async destroyFlight(id) {
        try {        
            return await Flight.destroy(
                {
                    where:{
                        id:id
                    },
                }
            );
            
            }
        catch (error) {
            console.log("Something went wrong in repo later",error)
        }
    }
    async getFlight(id){
        try {        
             return await Flight.findByPk(id);
            }
        catch (error) {
            console.log("Something went wrong in repo later",error)
        }
    }

}
module.exports=FlighRepository