const {Customer} = require('../models');
const jwt = require('jsonwebtoken')

function authentication(req,res,next){
  try{
    let token = req.headers.access_token;
    if(token){
      req.customer = jwt.verify(token,process.env.TOKEN_KEY);
      Customer.findOne({where:{email:req.customer.CustomerEmail}})
      .then(customer=>{
        if(customer){
          next()
        }else{
          throw {
            status: 403,
            message: 'User not found'
          }
        }
      })
    }else{
      throw {
        status: 404,
        message: 'Token not found'
      }
    }
  }catch(err){
    next(err)
  }
}

module.exports = authentication