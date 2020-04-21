'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Product extends Model {

  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    },
    image_url: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate:{
        min:0
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate:{
        min:0
      }
    },
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    AdminId: DataTypes.INTEGER,
    createdAt : new Date(),
    updatedAt : new Date()
  },{sequelize})

  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsToMany(models.Customer,{through:models.Cart});
    Product.hasMany(models.Cart)
  };
  return Product;
};