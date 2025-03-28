'use strict';
const {
  Model
} = require('sequelize');
const city = require('./city');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City,{
        foreignKey:'cityid',
        allowNull:false,
        onDelete:'CASCADE',
        as:"City"
      })
    }
  }
  Airport.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    } ,
    address: DataTypes.STRING,
    cityid:{
      type:DataTypes.INTEGER,
     foreignKey:true
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};