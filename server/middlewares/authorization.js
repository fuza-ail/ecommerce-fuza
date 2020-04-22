const { Cart } = require('../models');

function authorization(req, res, next) {
  Cart.findOne({where:{id: req.params.id}})
    .then(cart => {
      if (cart) {
        if (cart.CustomerId == req.customer.CustomerId) {
          next()
        } else {
          throw {
            status: 401,
            message: 'Unauthorized'
          }
        }
      } else {
        throw {
          status: 404,
          message: 'Item not found'
        }
      }
    })
    .catch(err => {
      next(err)
    })
}

module.exports = authorization