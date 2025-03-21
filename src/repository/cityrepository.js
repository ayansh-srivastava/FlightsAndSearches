const { where } = require('sequelize');
const {City}=require('../models/index.js');


class CityRepository{
    async createCity({name}){
        try {
        return await City.create({name:name});   
        }
         catch (error) {
            
            console.log(error);
        }
    }
    async deleteCity(id){
        try {
            return await City.destroy({
                where: {
                  id: id,
                },
              });

        } catch (error) {
            console.log(error)
        }
    }
    async updateCity(id,{name}){
        try {
            const city= await City.findByPk(id);
            city.name=name;
            city.save();
            return city;
        } catch (error) {
            console.log(error);
        }
    }
    async getCity(id){
        try {
            const city= await City.findByPk(id);
            return city;
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports=CityRepository;