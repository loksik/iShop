const sequelize = require('../bd')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    email: {type: DataTypes.STRING, unique:true},
    surname: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    patronymic: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const BasketProduct = sequelize.define('basketProduct', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique:true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    shortDescription: {type: DataTypes.STRING},
    discription: {type: DataTypes.STRING},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const TypeProduct = sequelize.define('typeProduct', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique: true,}
})

const StoreProduct = sequelize.define('storeProduct', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    shortDescription: {type: DataTypes.STRING},
    delivery: {type: DataTypes.STRING},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
    review: {type: DataTypes.STRING},
})

const IndividualOrder = sequelize.define('individualOrder', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    discription: {type: DataTypes.STRING, allowNull: false},
    file: {type: DataTypes.STRING},
    // StoreId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const ImageStore = sequelize.define('imageStore', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    img1: {type: DataTypes.STRING, allowNull: false},
    img2: {type: DataTypes.STRING},
    img3: {type: DataTypes.STRING},
    img4: {type: DataTypes.STRING},
    img5: {type: DataTypes.STRING},
})

const TypeUser = sequelize.define('typeUser', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique: true,},
})

const TypeProduct_StoreProduct = sequelize.define('typeProduct_storeProduct', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(IndividualOrder)
IndividualOrder.belongsTo(User)

User.hasOne(StoreProduct)
StoreProduct.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Product.hasOne(BasketProduct)
BasketProduct.belongsTo(Product)

TypeUser.hasMany(User)
User.belongsTo(TypeUser)

Product.hasMany(Rating)
Rating.belongsTo(Product)

TypeProduct.hasMany(Product)
Product.belongsTo(TypeProduct)

ImageStore.hasOne(Product)
Product.belongsTo(ImageStore)

StoreProduct.hasMany(Product)
Product.belongsTo(StoreProduct)

TypeProduct.belongsToMany(StoreProduct, {through: TypeProduct_StoreProduct})
StoreProduct.belongsToMany(TypeProduct, {through: TypeProduct_StoreProduct})

StoreProduct.hasMany(IndividualOrder)
IndividualOrder.belongsTo(StoreProduct)

module.exports = {
    User,
    Basket,
    BasketProduct,
    Product,
    Rating,
    StoreProduct,
    TypeProduct,
    ImageStore,
    IndividualOrder,
    TypeUser,
    TypeProduct_StoreProduct
}