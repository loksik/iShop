const {StoreProduct} = require('../models/models')
const APIError = require ('../errors/APIError')

class StoreProductController {
    async create(req, res) {
        const {name, shortDescription, delivery, userId} = req.body
        const storeProduct = await StoreProduct.create({name, shortDescription, delivery, userId})
        return res.json(storeProduct)
    }
    async getAll(req, res) {
        const storesProduct = await StoreProduct.findAll()
        return res.json(storesProduct)
    }
    async getOne(req, res) {
        const {id} = req.params
        const storesProduct = await storesProduct.findOne(
            {
                where: {id},
                //include:[{model: ImageStore, as: 'imgS'}]
            },
        )
        return res.json(storesProduct)
    }
}

module.exports = new StoreProductController()
