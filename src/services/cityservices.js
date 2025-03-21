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
    
    async getCity(id){
        try {
            const city=await this.repo.getCity(id);
            return city;   
        } 
        catch (error) {
            console.log("Something went wrong in service later");  
        }
    }
}
module.exports=CityService;