const router = require('express').Router();
const Controller = require('../controllers/controller')
const errorHandler = require('../middlewares/errorHandle');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization')

router.post('/register', Controller.register);
router.post('/login', Controller.login);

router.get('/', Controller.getProduct);
router.get('/cart',authentication, Controller.getData);
router.post('/cart/add',authentication,Controller.addItem);
router.delete('/cart/delete/:id', authentication, authorization, Controller.deleteItem);
router.put('/cart/edit/:id', authentication,authorization,Controller.editItem);
router.post('/cart/checkout', authentication,Controller.checkOut)

router.use(errorHandler)

module.exports = router