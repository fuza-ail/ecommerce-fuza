'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Cart extends Model{

  }

  Cart.init({
    CustomerId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  },{sequelize})

  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.Customer);
    Cart.belongsTo(models.Product)
  };
  return Cart;
};