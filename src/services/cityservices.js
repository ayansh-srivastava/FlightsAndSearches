const {CityRepository}=require(`../repository/index`);

class CityService {
    constructor(){
        this.repo=new CityRepository();
    }

    async createcity(data){
        try {
            const city=await this.repo.createCity(data);
            return city;   
        } 
        catch (error) {
            console.log("Something went wrong n service later");    
        }
    }
    
    async deletecity(id){
        try {
            const city=await this.repo.deleteCity(id);
            return city;   
        } 
        catch (error) {
            console.log("Something went wrong in service later");    
        }
    }
    
    async updatecity(id,data){
        try {
            const city=await this.repo.updateCity(id,data);
            return city;   
        } 
        catch (error) {
            console.log("Something went wrong in service later");    
        }
    }
    async getMultiple(data){
        try {
            const city=await this.repo.createMultiple(data);
            return city;
            
        } catch (error) {
            console.log("Something went wrong in service later");    

        }
    }
    async getCity(id){
        try {
            const city=await this.repo.getCity(id);
            return city;   
        } 
        catch (error) {
            console.log("Something went wrong in service later");  
        }
    }
    async getall(filter){
        try {
            const cities=await this.repo.getAll({name:filter.name});
            return cities;
        } catch (error) {
            console.log(error,"something went wrong at service layer");
        }
    }
    async getAirport(cityid){
        try {
            const airports=await this.repo.getAirport(cityid);
            console.log(airports,"in serice")
            return airports;
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports=CityService;