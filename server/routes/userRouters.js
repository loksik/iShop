const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../midlewere/authMiddleware')

router.post('/registretion', userController.registration)
router.post('/autorization', userController.autorization)
router.get('/ifAutorization',authMiddleware, userController.ifAutorization)

module.exports = router