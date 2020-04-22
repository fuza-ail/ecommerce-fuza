'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Cart extends Model{

  }

  Cart.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    CustomerId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    amount: {
      type: DataTypes.INTEGER,
      validate:{
        min:0
      }
    }
  },{sequelize})

  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.Customer);
    Cart.belongsTo(models.Product)
  };
  return Cart;
};