const uuid = require('uuid')
const path = require('path')
const {Product, ImageStore} = require('../models/models')
const APIError = require('../errors/APIError')

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, shortDescription, description, rating, typeProductId, storeProductId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({
                name,
                price,
                shortDescription,
                description,
                rating,
                typeProductId,
                storeProductId,
                img: fileName
            })

            // if(imgS) {
            //     imgS = JSON.parse(imgS)
            //     imgS.forEach(i =>
            //         ImageStore.create({
            //             title: i.title,
            //             description: i.description,
            //             productID: product.id
            //         })
            //     )
            // }
            return res.json(product)
        } catch (e) {
            next(APIError.notFound(e.message))
        }
    }

    async getAll(req, res, next) {
        let {typeProductId, storeProductId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let products;

        if (!storeProductId && !typeProductId) {
            products = await Product.findAndCountAll({limit, offset: offset})
        }
        if (storeProductId && !typeProductId) {
            products = await Product.findAndCountAll({where: {storeProductId}, limit, offset: offset})
        }
        if (!storeProductId && typeProductId) {
            products = await Product.findAndCountAll({where: {typeProductId}, limit, offset: offset})

        }
        if (storeProductId && typeProductId) {
            products = await Product.findAndCountAll({where: {storeProductId, typeProductId}, limit, offset: offset})
        }
        
        return res.json(products)
    }

    async getOne(req, res) {
        const {id} = req.params
        const product = await Product.findOne(
            {
                where: {id},
                //include:[{model: ImageStore, as: 'imgS'}]
            },
        )
        return res.json(product)
    }

    async deleteProduct(req, res) {
        const {id} = req.params
        const product = await Product.findOne(
            {
                where: {id},
                //include:[{model: ImageStore, as: 'imgS'}]
            },
        )
        return res.json(product)
    }

    async update(req, res, next) {
        try {
            // let {name, price, shortDescription, discription, rating, typeProductId, storeProductId} = req.body
            // const  {img} = req.files
            // let fileName = uuid.v4() + ".jpg"
            // img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = req.body

            if (!product.id) next(APIError.badRequest(e.message))
            const updateProduct = await Product.update(product, {where: {id}})
            return res.json(updateProduct)
        } catch (e) {
            next(APIError.notFound(e.message))
        }

    }

}

module.exports = new ProductController()
