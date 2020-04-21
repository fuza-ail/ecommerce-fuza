const {Customer,Product,Cart} = require('../models');
const {hashPassword,checkPassword} = require('../helpers/bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class Controller {
  static register(req,res,next){
    Customer.create({
      email: req.body.email,
      password: hashPassword(req.body.password)
    })
    .then(customer=>{
      res.status(201).json({email: customer.email})
    })
    .catch(err=>{
      next(err)
    })
  }

  static login(req,res,next){
    Customer.findOne({where:{email:req.body.email}})
    .then(customer=>{ 
      if(checkPassword(req.body.password,customer.password)){
        let token = jwt.sign({
          UserId: customer.id,
          EmailId: customer.email
        },process.env.TOKEN_KEY)
        res.status(200).json({
          access_token: token,
          email: customer.email
        })
      }else{
        throw {
          status: 400,
          message: 'Wrong password'
        }
      }
    })
    .catch(err=>{
      next(err)
    })
  }

  static getProduct(req,res,next){
    Product.findAll()
    .then(products=>{
      let items = []
      products.forEach(el=>{
        items.push({
          id: el.id,
          name:el.name,
          image_url: el.image_url,
          price:el.price,
          stock: el.stock,
          category: el.category,
          description: el.description
        })
      })
      res.status(200).json(items)
    })
    .catch(err=>{
      next(err)
    })
  }

  static getData(req,res,next){
    Customer.findAll({include:[{
      model:Cart,
      include: Product
    }]})
    .then(customers=>{
      res.status(200).json(customers)
    })
    .then(err=>{
      next(err)
    })
  }
}

module.exports = Controller