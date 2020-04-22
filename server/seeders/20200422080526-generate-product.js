'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Iphone SE',
        image_url: 'https://i.imgur.com/CaCrxnW.jpg',
        price: 5000000,
        stock: 10,
        category: 'smartphone',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Iphone 7',
        image_url: 'https://i.imgur.com/qIM4wWY.jpg',
        price: 7000000,
        stock: 10,
        category: 'smartphone',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Iphone X',
        image_url: 'https://i.imgur.com/SbvF0NL.jpg',
        price: 12000000,
        stock: 10,
        category: 'smartphone',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Samsung Galaxy S9',
        image_url: 'https://i.imgur.com/CIEFch5.jpg',
        price: 10000000,
        stock: 10,
        category: 'smartphone',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Samsung Galaxy S10',
        image_url: 'https://i.imgur.com/SvTGdJo.jpg',
        price: 11000000,
        stock: 10,
        category: 'smartphone',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Samsung Galaxy Note',
        image_url: 'https://i.imgur.com/GyZLBP4.jpg',
        price: 12000000,
        stock: 10,
        category: 'smartphone',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Macbook Air',
        image_url: 'https://i.imgur.com/rzWOVzF.jpg',
        price: 18000000,
        stock: 10,
        category: 'laptop',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Macbook Pro',
        image_url: 'https://i.imgur.com/3PvI5p9.jpg',
        price: 21000000,
        stock: 10,
        category: 'laptop',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thinkpad',
        image_url: 'https://i.imgur.com/r6APbHP.jpg',
        price: 18000000,
        stock: 10,
        category: 'laptop',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alienware',
        image_url: 'https://i.imgur.com/oEONBsl.jpg',
        price: 18000000,
        stock: 10,
        category: 'laptop',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lenovo Legion',
        image_url: 'https://i.imgur.com/LRFH1li.jpg',
        price: 18000000,
        stock: 10,
        category: 'laptop',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MSI',
        image_url: 'https://i.imgur.com/9MErCdf.jpg',
        price: 18000000,
        stock: 10,
        category: 'laptop',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ipad Mini',
        image_url: 'https://i.imgur.com/eYH0Aft.jpg',
        price: 18000000,
        stock: 10,
        category: 'tablet',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ipad Air',
        image_url: 'https://i.imgur.com/AI2AmNi.jpg',
        price: 18000000,
        stock: 10,
        category: 'tablet',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ipad Pro',
        image_url: 'https://i.imgur.com/oP6XpkZ.jpg',
        price: 18000000,
        stock: 10,
        category: 'tablet',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Galaxy A',
        image_url: 'https://i.imgur.com/FDaNm4U.jpg',
        price: 18000000,
        stock: 10,
        category: 'tablet',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Galaxy Tab S',
        image_url: 'https://i.imgur.com/bgUSDCF.jpg',
        price: 18000000,
        stock: 10,
        category: 'tablet',
        description: 'new',
        AdminId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
