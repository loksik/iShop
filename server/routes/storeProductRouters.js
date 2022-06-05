const Router = require('express')
const router = new Router()
const storeProductController = require ('../controllers/storeProductController')
const checkTypeUser = require("../midlewere/checkTypeUserMiddleware");

router.post('/',checkTypeUser(4), storeProductController.create)
router.get('/', storeProductController.getAll)
router.get('/:id', storeProductController.getOne)

module.exports = router