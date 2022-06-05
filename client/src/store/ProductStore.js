import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._typeProducts = []
        this._storeProducts = []
        this._products = []
        this._ratings = [
            {id:2,	rate:5,	review:'Когда я заказал у продовца товар связались быстро!',	createdAt:'2022-06-02 03:42:09.838 +0500',	updatedAt:'2022-06-02 03:42:09.838 +0500',	userId:1,	productId:1},
            {id:3,	rate:4,	review:'Заказ огонь!',	createdAt:'2022-06-02 03:42:55.783 +0500',	updatedAt:'2022-06-02 03:42:58.727 +0500',	userId:1,	productId:1},
            {id:4,	rate:3,	review:'Не доволен но хоть товар пришел(',	createdAt:'2022-06-02 03:43:27.351 +0500',	updatedAt:'2022-06-02 03:43:27.351 +0500',	userId:2,	productId:1}

        ]
        this._selectedTypeProduct = {}
        this._selectedStoreProduct = {}
        makeAutoObservable(this)
    }
    setTypeProducts(typeProducts) {
        this._typeProducts = typeProducts
    }
    setStoreProducts(storeProducts) {
        this._storeProducts = storeProducts
    }
    setProducts(products) {
        this._products = products
    }

    setProduct(product) {
        this._products = product
    }

    setRatings(ratings) {
        this._ratings = ratings
    }

    setSelectedTypeProduct(typeProduct) {
        this._selectedTypeProduct = typeProduct
    }
    setSelectedStoreProduct(storeProduct) {
        this._selectedStoreProduct = storeProduct
    }

    get typeProducts() {
        return this._typeProducts
    }
    get storeProducts() {
        return this._storeProducts
    }
    get products() {
        return this._products
    }
    get product() {
        return this._products
    }
    get ratings() {
        return this._ratings
    }

    get selectedTypeProduct() {
        return this._selectedTypeProduct
    }
    get selectedStoreProduct() {
        return this._selectedStoreProduct
    }


}