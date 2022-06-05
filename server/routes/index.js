const Router = require('express')
const router = new Router()
const userRouters = require('./userRouters')
const storeProductRouters = require('./storeProductRouters')
const productRouters = require('./productRouters')
const typeRouters = require('./typeRouters')

router.use('/user', userRouters)
router.use('/typeProduct', typeRouters)
router.use('/storeProduct', storeProductRouters)
router.use('/product', productRouters)
// router.use('/user',)

module.exports = router