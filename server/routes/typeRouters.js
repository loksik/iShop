const Router = require('express')
const router = new Router()
const typeProductController = require ('../controllers/typeController')
const checkTypeUser = require('../midlewere/checkTypeUserMiddleware')

router.post('/', checkTypeUser(4), typeProductController.create)
router.get('/', typeProductController.getAll)

module.exports = router