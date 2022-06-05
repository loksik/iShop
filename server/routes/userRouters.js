const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../midlewere/authMiddleware')

router.post('/registration', userController.registration)
router.post('/authorization', userController.authorization)
router.get('/ifAuthorization', authMiddleware, userController.ifAuthorization)

module.exports = router