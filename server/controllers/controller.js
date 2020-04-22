const { Customer, Product, Cart } = require('../models');
const { hashPassword, checkPassword } = require('../helpers/bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { Op } = require('sequelize')

class Controller {
  static register(req, res, next) {
    Customer.create({
      email: req.body.email,
      password: hashPassword(req.body.password)
    })
      .then(customer => {
        let token = jwt.sign({
          CustomerId: customer.id,
          CustomerEmail: customer.email
        }, process.env.TOKEN_KEY)
        res.status(201).json({
          access_token: token,
          email: customer.email
        })
      })
      .catch(err => {
        next(err)
      })
  }

  static login(req, res, next) {
    Customer.findOne({ where: { email: req.body.email } })
      .then(customer => {
        if (checkPassword(req.body.password, customer.password)) {
          let token = jwt.sign({
            CustomerId: customer.id,
            CustomerEmail: customer.email
          }, process.env.TOKEN_KEY)
          res.status(200).json({
            access_token: token,
            email: customer.email
          })
        } else {
          throw {
            status: 400,
            message: 'Wrong password'
          }
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static getProduct(req, res, next) {
    Product.findAll()
      .then(products => {
        let items = []
        products.forEach(el => {
          items.push({
            id: el.id,
            name: el.name,
            image_url: el.image_url,
            price: el.price,
            stock: el.stock,
            category: el.category,
            description: el.description
          })
        })
        res.status(200).json(items)
      })
      .catch(err => {
        next(err)
      })
  }
  // get cart
  static getData(req, res, next) {
    Customer.findOne({
      include: [{
        model: Cart,
        where: { CustomerId: req.customer.CustomerId },
        include: Product
      }]
    }, { where: { id: req.customer.CustomerId } })
      .then(customers => {
        res.status(200).json(customers)
      })
      .then(err => {
        next(err)
      })
  }

  // add item to cart
  static addItem(req, res, next) {
    Cart.findOne({
      where: {
        [Op.and]: [{ CustomerId: req.customer.CustomerId }, { ProductId: req.body.ProductId }]
      }
    })
      .then(cart => {
        if (cart) {
          return Cart.update({
            amount: req.body.amount
          }, { include: [{ model: Product }], where: { id: cart.id }, returning: true })
        } else {
          return Cart.create({
            CustomerId: req.customer.CustomerId,
            ProductId: req.body.ProductId,
            amount: req.body.amount
          }, { include: [{ model: Product }] })
        }
      })
      .then(cart => {
        let data
        if (cart[0] == 1) {
          data = cart[1][0]
          console.log(data)
        } else {
          data = cart
        }
        return Cart.findByPk(data.id, { include: [{ model: Product }] })
      })
      .then(cart => {
        res.status(200).json(cart)
      })
      .catch(err => {
        next(err)
      })
  }

  // delete item from cart
  static deleteItem(req, res, next) {
    Cart.findOne({ where: { id: req.params.id } })
      .then(cart => {
        return Cart.destroy({ where: { id: req.params.id } })
      })
      .then(cart => {
        res.status(200).json({
          message: 'Item removed'
        })
      })
      .catch(err => {
        next(err)
      })
  }

  static editItem(req, res, next) {
    Cart.findByPk(req.params.id)
      .then(cart => {
        return Cart.update({
          // CustomerId: req.customer.CustomerId,
          // Product: req.body.ProductId,
          amount: req.body.amount
        }, { where: { id: cart.id } })
      })
      .then(cart => {
        return Cart.findByPk(req.params.id, { include: [{ model: Product }] })
      })
      .then(cart => {
        res.status(200).json(cart)
      })
      .catch(err => {
        next(err)
      })
  }

  static checkOut(req, res, next) {
    Cart.findAll({ where: { CustomerId: req.customer.CustomerId }, include: [{ model: Product }] })
      .then(carts => {
        // res.json(carts)
        const data = []
        for (let i = 0; i < carts.length; i++) {
          if(carts[i].amount<=carts[i].Product.stock){
            data.push(Product.update({
              stock: carts[i].Product.stock - carts[i].amount
            },{where:{id:carts[i].ProductId}}))
          }else{
            throw {
              status: 400,
              message: 'Stock is not enough'
            }
          }
        }
        return Promise.all(data)
      })
      .then(data=>{
        return Cart.destroy({where:{CustomerId:req.customer.CustomerId}})
      })
      .then(data=>{
        res.status(200).json({
          message: 'Successfully checkout'
        })
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = Controller