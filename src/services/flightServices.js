const {FlighRepository}=require(`../repository/index`);
const flightRepository=new FlighRepository()


class flightServices{
    async createFlight(data){
        try {
            return await flightRepository.createFlight(data);
        } 
        catch (error) {
            console.log("Something went wrong in services layer",error);
        }
    }
    async updateFlight(id,data){
        try {
            return await flightRepository.updateFlight(id,data);
        } 
        catch (error) {
            console.log("Something went wrong in services layer",error);
        }
    }
    async getFlight(id){
        try {
            return await flightRepository.getFlight(id);
        } 
        catch (error) {
            console.log("Something went wrong in services layer",error);
        }
    }
    async destoyFlight(id){
        try {
            return await flightRepository.destroyFlight(id);
        } 
        catch (error) {
            console.log("Something went wrong in services layer",error);
        }
    }
    async getAllFlight(filter){
        try {
            return await flightRepository.getAllFlights(filter);
        } 
        catch (error) {
            console.log("Something went wrong in services layer",error);
        }
    }
}
module.exports=flightServices