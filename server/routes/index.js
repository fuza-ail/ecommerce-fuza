const router = require('express').Router();
const Controller = require('../controllers/controller')
const errorHandler = require('../middlewares/errorHandle')

router.post('/register', Controller.register);
router.post('/login', Controller.login);
router.use(errorHandler)

router.get('/', Controller.getProduct)
router.get('/cart', Controller.getData)

module.exports = router