const APIError = require('../errors/APIError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require ('../models/models')

const generateJwt = (id, email, typeUserId) => {
    return jwt.sign(
        {id, email, typeUserId},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, name, surname, patronymic, typeUserId} = req.body
        if (!email || !password) {
            return next(APIError.notFound('Некорректный email или пароль'))
        }
        
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(APIError.notFound('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, name, surname, patronymic, typeUserId, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.typeUserId)
        return res.json({token})
    }
    async authorization(req, res, next) {
        const {email, password} = req.body
        
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(APIError.badRequest('Пользователь не найден'))
        }
        
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(APIError.badRequest('Указан некорректный email или пароль'))
        }
        
        const token = generateJwt(user.id, user.email, user.typeUserId)
        return res.json({token})
    }
    async ifAuthorization(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.typeUserId)
        return res.json({token})
    }
}

module.exports = new UserController()