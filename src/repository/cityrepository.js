const {City}=require('../models/index.js');


class CityRepository{
    async createCity({name}){
        try {
        await City.create({name:name});   
        }
         catch (error) {
            console.log(error);
        }
    }
    async deleteCity(id){
        try {
            await City.destroy({
                where: {
                  id: id,
                },
              });

        } catch (error) {
            console.log(error)
        }
    }
}
module.exports=CityRepository;