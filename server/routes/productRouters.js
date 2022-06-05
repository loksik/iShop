const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')
const checkTypeUser = require("../midlewere/checkTypeUserMiddleware");

router.post('/', checkTypeUser(4),productController.create)
router.get('/', productController.getAll)
router.get('/:id', productController.getOne)
router.put('/', productController.update)
router.delete('/:id', checkTypeUser(4), productController.deleteProduct)

module.exports = router