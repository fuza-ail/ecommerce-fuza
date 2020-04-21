'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Customer extends Model{

  }

  Customer.init({
    email: {
      type: DataTypes.STRING,
      notNull: true,
      validate:{
        notEmpty: true
      }
    },
    password: DataTypes.STRING
  },{sequelize})

  Customer.associate = function(models) {
    // associations can be defined here
    Customer.belongsToMany(models.Product,{through:models.Cart});
    Customer.hasMany(models.Cart)
  };
  return Customer;
};