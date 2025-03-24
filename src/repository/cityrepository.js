const { where } = require('sequelize');
const {City}=require('../models/index.js');
const {Op} =require('sequelize')


class CityRepository{
    async createCity({name}){
        try {
        return await City.create({name:name});   
        }
         catch (error) {
            
            console.log(error);
        }
    }
    async createMultiple(data){
        try {
            return await City.bulkCreate(data);
        } catch (error) {
            console.log(error)
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
    async getAll(filter){
        try {
            if(filter.name){
                const cities=await City.findAll({
                    where : {
                        name:{
                        [Op.startsWith]: filter.name
                    }}}
                )
            return cities;
        }   
            const cities=await City.findAll();
            return cities;
            
        } catch (err) {
            console.log(err,"SOMETHING WENT WRONGIN REPO LAYER");
        }
    }
    async getAirport(cityid){
        try {
            const cities=await City.findByPk(cityid);
            const airport=await  cities.getAirports();
            return airport;
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports=CityRepository;